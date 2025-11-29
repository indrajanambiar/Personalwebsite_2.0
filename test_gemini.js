import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Simple .env parser
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!API_KEY) {
    console.error("API Key not found in .env");
    process.exit(1);
}

console.log("Using API Key:", API_KEY.substring(0, 5) + "...");

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        // There isn't a direct listModels on genAI instance in the node SDK easily accessible without model, 
        // but we can try to just run a generation with a known safe model or catch the error.
        // Actually, the SDK doesn't expose listModels directly in the main class in all versions.
        // Let's try to just run with gemini-1.5-flash and print the error details fully.

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-1.5-flash!");
        console.log(result.response.text());
    } catch (error) {
        console.error("Error with gemini-1.5-flash:", error.message);

        try {
            console.log("Trying gemini-pro...");
            const model2 = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result2 = await model2.generateContent("Hello");
            console.log("Success with gemini-pro!");
        } catch (err2) {
            console.error("Error with gemini-pro:", err2.message);
        }
    }
}

listModels();
