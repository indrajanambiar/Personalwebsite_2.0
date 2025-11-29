import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Scroll, Shield, Database, LayoutDashboard, Bot } from 'lucide-react';

const ExperienceSection = () => {
    const experiences = [
        {
            company: "PixDynamics Pvt. Ltd.",
            role: "Junior AI Developer",
            period: "July 2023 – Present",
            location: "Kochi, Kerala",
            description: "Building production-grade RAG pipelines and Agentic AI workflows using OpenAI GPT, LangChain, and LangGraph.",
            quests: [
                {
                    title: "AUTOMATION_BOT",
                    icon: <Bot size={16} />,
                    desc: "End-to-end insurance document processing using LangGraph, Azure OpenAI, and Blob Storage.",
                    tech: "LangGraph, Azure OpenAI"
                },
                {
                    title: "BROKER_COPILOT",
                    icon: <Shield size={16} />,
                    desc: "AI system for extracting and comparing complex insurance data using advanced prompting.",
                    tech: "OpenAI, RAG, Prompt Eng."
                },
                {
                    title: "SAP_INTEGRATION",
                    icon: <Database size={16} />,
                    desc: "Agentic AI system integrated with SAP for automated quotation and product matching.",
                    tech: "SAP, SQL, Qdrant"
                },
                {
                    title: "AI_DASHBOARD",
                    icon: <LayoutDashboard size={16} />,
                    desc: "Interactive dashboard for visualizing AI model insights and workflow performance.",
                    tech: "Python, Dash, Plotly"
                }
            ]
        },
    ];

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    textShadow: '0 0 10px var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <Scroll size={40} /> QUEST LOG (EXPERIENCE)
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="pixel-border"
                            style={{
                                padding: '2rem',
                                background: 'var(--color-bg-secondary)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Briefcase size={20} /> {exp.company}
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--color-accent)', fontFamily: 'var(--font-game)' }}>
                                        ROLE: {exp.role}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-game)' }}>{exp.period}</p>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{exp.location}</p>
                                </div>
                            </div>

                            <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                                {exp.description}
                            </p>

                            {exp.quests.length > 0 && (
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-game)', fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                        {`>>`} COMPLETED FACTION QUESTS:
                                    </h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                        {exp.quests.map((quest, qIndex) => (
                                            <div key={qIndex} style={{
                                                background: 'rgba(0,0,0,0.2)',
                                                padding: '1rem',
                                                border: '1px solid var(--color-primary)',
                                                borderRadius: '5px'
                                            }}>
                                                <h5 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    {quest.icon} {quest.title}
                                                </h5>
                                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                                    {quest.desc}
                                                </p>
                                                <span style={{ fontSize: '0.7rem', color: 'var(--color-accent)', fontFamily: 'var(--font-game)' }}>
                                                    [{quest.tech}]
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceSection;
