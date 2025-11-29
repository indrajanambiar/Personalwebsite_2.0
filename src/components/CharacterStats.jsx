import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Zap } from 'lucide-react';

const StatBar = ({ label, value, color }) => (
    <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontFamily: 'var(--font-game)', fontSize: '0.8rem' }}>
            <span>{label}</span>
            <span>{value}/100</span>
        </div>
        <div style={{ width: '100%', height: '10px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-text-muted)' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ height: '100%', background: color }}
            />
        </div>
    </div>
);

const CharacterStats = () => {
    // Calculate experience
    const startDate = new Date('2023-07-26');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = (diffDays / 365).toFixed(1);

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="pixel-border"
                style={{ padding: '2rem', background: 'rgba(15, 28, 63, 0.9)' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', md: { flexDirection: 'row' } }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '1rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/images/image_1.jpeg"
                                alt="Indraja's Avatar"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>INDRAJA NAMBAIR</h2>
                            <p style={{ fontFamily: 'var(--font-game)', color: 'var(--color-accent)', fontSize: '0.8rem' }}>CLASS: AI DEVELOPER / ENGINEER</p>
                            <p style={{ fontFamily: 'var(--font-game)', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                LEVEL: {years} <span style={{ color: 'var(--color-accent)' }}>(XP: {diffDays} DAYS)</span>
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                        {/* Attributes */}
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Brain size={20} /> ATTRIBUTES
                            </h3>
                            <StatBar label="INTELLIGENCE (AI/ML)" value={98} color="var(--color-primary)" />
                            <StatBar label="AGILITY (PYTHON/RAG)" value={95} color="var(--color-accent)" />
                            <StatBar label="STAMINA (DEBUGGING)" value={90} color="var(--color-danger)" />
                            <StatBar label="MANA (CREATIVITY)" value={92} color="#9370DB" />
                            <StatBar label="CHARISMA (MUSIC/UKULELE)" value={95} color="#FF69B4" />
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={20} /> SKILL TREE
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {[
                                    'PYTHON', 'RAG', 'LLM MODELS', 'AGENTIC AI', 'PROMPT ENG',
                                    'LANGCHAIN', 'LANGGRAPH',
                                    'PYTORCH', 'TENSORFLOW', 'SCIKIT-LEARN', 'TRANSFORMERS',
                                    'YOLO', 'OPENCV', 'WHISPER', 'HUGGING FACE', 'SPACY',
                                    'AZURE AI', 'AZURE DOC INTEL', 'DOCKER', 'GITHUB ACTIONS',
                                    'CHROMA DB', 'QDRANT', 'FAISS',
                                    'FASTAPI', 'STREAMLIT', 'GRADIO', 'REST APIS'
                                ].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            border: '1px solid var(--color-primary)',
                                            fontFamily: 'var(--font-game)',
                                            fontSize: '0.7rem',
                                            cursor: 'default'
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Code size={20} /> LORE
                            </h3>
                            <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                                <strong>CLASS:</strong> AI Developer / Engineer
                                <br />
                                <strong>ORIGIN:</strong> Kochi, Kerala
                                <br />
                                <strong>EDUCATION:</strong> M.Sc in Computer Science (Specialised in Data Analytics)
                                <br /><br />
                                Specialist in building production-grade <strong>Agentic AI</strong> and <strong>RAG</strong> systems.
                                Experienced in constructing autonomous agents, document intelligence pipelines, and computer vision models.
                                <br /><br />
                                <span style={{ color: 'var(--color-accent)' }}>MISSION:</span> Solving real-world problems with advanced AI automation.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CharacterStats;
