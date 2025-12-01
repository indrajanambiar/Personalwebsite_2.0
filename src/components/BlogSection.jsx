import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCalendarAlt, FaArrowRight, FaTerminal } from 'react-icons/fa';

const BlogSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: "Building Autonomous Agents with LangGraph",
            date: "2024-03-15",
            summary: "Exploring the architecture of stateful agents and how to orchestrate complex workflows using LangGraph and GPT-4.",
            tags: ["AI", "Agents", "LangChain"]
        },
        {
            id: 2,
            title: "RAG Systems: Beyond Basic Embeddings",
            date: "2024-02-28",
            summary: "A deep dive into advanced Retrieval-Augmented Generation techniques, including hybrid search and re-ranking strategies.",
            tags: ["RAG", "NLP", "Vector DB"]
        },
        {
            id: 3,
            title: "Optimizing LLM Context Windows",
            date: "2024-01-10",
            summary: "Strategies for managing limited context windows in production applications, from summarization chains to sliding windows.",
            tags: ["LLM", "Optimization", "Python"]
        }
    ];

    return (
        <div className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pixel-border"
                style={{ padding: '3rem', background: 'rgba(15, 28, 63, 0.9)' }}
            >
                <h2 className="section-title">
                    <FaBookOpen size={30} /> DEV_LOGS / CHRONICLES
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-game)' }}>
                    {`>>`} ACCESSING ARCHIVES...
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Hover Effect Overlay */}
                            {hoveredIndex === index && (
                                <motion.div
                                    layoutId="hoverOverlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(45deg, rgba(0, 240, 255, 0.1), transparent)',
                                        pointerEvents: 'none'
                                    }}
                                />
                            )}

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.8rem', marginBottom: '0.5rem', fontFamily: 'var(--font-game)' }}>
                                    <FaCalendarAlt size={14} /> {post.date}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                                    {post.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {post.summary}
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    {post.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.7rem',
                                            padding: '0.2rem 0.5rem',
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            border: '1px solid var(--color-primary)',
                                            borderRadius: '4px',
                                            color: 'var(--color-primary)',
                                            fontFamily: 'var(--font-game)'
                                        }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-game)',
                                    fontSize: '0.9rem',
                                    padding: 0
                                }}>
                                    READ_ENTRY <FaArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button style={{
                        background: 'transparent',
                        border: '1px solid var(--color-text-muted)',
                        color: 'var(--color-text-muted)',
                        padding: '0.5rem 1rem',
                        fontFamily: 'var(--font-game)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <FaTerminal size={16} /> VIEW_ALL_ARCHIVES
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BlogSection;
