import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Lock, Unlock } from 'lucide-react';

const ProjectCard = ({ title, category, difficulty, status, description, tech, link }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="pixel-border"
        style={{
            background: 'var(--color-bg-secondary)',
            padding: '1.5rem',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <div style={{
            position: 'absolute',
            top: '-10px',
            right: '10px',
            background: 'var(--color-primary)',
            color: 'var(--color-bg)',
            padding: '0.25rem 0.5rem',
            fontFamily: 'var(--font-game)',
            fontSize: '0.6rem'
        }}>
            {status}
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {status === 'LOCKED' ? <Lock size={16} /> : <Unlock size={16} color="var(--color-accent)" />}
            {title}
        </h3>

        <div style={{ marginBottom: '1rem', fontFamily: 'var(--font-game)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
            ZONE: {category} | DIFFICULTY: {'💖'.repeat(difficulty)}
        </div>

        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
            {description}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {tech.map(t => (
                <span key={t} style={{
                    background: 'rgba(255, 105, 180, 0.1)',
                    color: 'var(--color-primary)',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.7rem',
                    border: '1px solid var(--color-primary)'
                }}>
                    {t}
                </span>
            ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <button
                onClick={() => window.open(link, '_blank')}
                style={{
                    flex: 1,
                    padding: '0.5rem',
                    background: 'var(--color-primary)',
                    color: 'var(--color-bg)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                <Github size={14} /> CODE
            </button>
            <button style={{
                flex: 1,
                padding: '0.5rem',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                background: 'transparent',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
            }}>
                <ExternalLink size={14} /> DEMO
            </button>
        </div>
    </motion.div>
);

const LevelSelect = () => {
    const projects = [
        {
            title: "AICADAMY",
            category: "ED-TECH",
            difficulty: 4,
            status: "IN PROGRESS",
            description: "AI learning coach using RAG and Agentic AI.",
            tech: ["RAG", "Agentic AI"],
            link: "https://github.com/indrajanambiar"
        },
        {
            title: "HELMET_DETECT_V8",
            category: "VISION",
            difficulty: 4,
            status: "COMPLETED",
            description: "Real-time helmet and mask detection system using YOLOv8n with 94% mAP.",
            tech: ["YOLOv8", "OpenCV", "Roboflow"],
            link: "https://github.com/indrajanambiar/mask-helmet-detection"
        },
        {
            title: "AUDIO_LINGO",
            category: "AUDIO ML",
            difficulty: 4,
            status: "COMPLETED",
            description: "Multilingual audio translation pipeline with Whisper ASR and MarianMT.",
            tech: ["Whisper", "FastAPI", "HuggingFace"],
            link: "https://github.com/indrajanambiar/AudioLingo"
        },
        {
            title: "RESEARCH_ASSISTANT",
            category: "RAG / NLP",
            difficulty: 3,
            status: "COMPLETED",
            description: "RAG-based knowledge extraction tool for research papers using Llama 3.",
            tech: ["LangChain", "Streamlit", "Llama 3"],
            link: "https://github.com/indrajanambiar/research-paper-assistant"
        },
        {
            title: "FAKE_NEWS_DETECT",
            category: "NLP",
            difficulty: 3,
            status: "COMPLETED",
            description: "Machine learning model to detect fake news articles.",
            tech: ["Python", "Scikit-learn", "NLP"],
            link: "https://github.com/indrajanambiar/Project-on-fake-news-detection"
        },
        {
            title: "RASA_CHATBOT",
            category: "CHATBOT",
            difficulty: 3,
            status: "COMPLETED",
            description: "Conversational AI chatbot built with Rasa framework.",
            tech: ["Rasa", "Python", "NLP"],
            link: "https://github.com/indrajanambiar/rasa_chatbot"
        },
        {
            title: "FLIGHT_FARE_PRED",
            category: "ML / REGRESSION",
            difficulty: 3,
            status: "COMPLETED",
            description: "Predicting flight fares using machine learning regression techniques.",
            tech: ["Python", "ML", "Pandas"],
            link: "https://github.com/indrajanambiar/Flight_Fare_Prediction"
        }
    ];

    return (
        <div className="container section-padding">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">
                    SELECT LEVEL
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default LevelSelect;
