import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, Scroll } from 'lucide-react';

const AboutSection = () => {
    return (
        <div className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pixel-border"
                style={{ padding: '1.5rem', background: 'rgba(15, 28, 63, 0.9)' }} // Reduced padding
            >
                <h2 className="section-title">
                    <BookOpen size={30} /> NAMBY'S LORE & ORIGIN
                </h2>

                <div className="about-section-grid">

                    {/* Professional Summary & Image */}
                    <div className="about-content-wrapper">
                        <div className="about-image-container">
                            <img
                                src="/images/image_2.jpeg"
                                alt="Indraja Nambiar"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        <div className="about-text">
                            <h3 className="prof-summary-title" style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-game)' }}>
                                // PROFESSIONAL_SUMMARY
                            </h3>
                            <p style={{ lineHeight: '1.6', fontSize: '1rem', color: 'var(--color-text-muted)' }}>
                                AI Developer with hands-on experience building production-grade applications powered by Large Language Models (LLMs) such as OpenAI GPT, LangChain, and LangGraph on Azure. Skilled in Python, NLP, RAG, Agentic AI, and Computer Vision.
                                <br /><br />
                                Strong background in document intelligence, data extraction, and chatbot development. Experienced with prompt engineering and optimization techniques for high-performance AI systems.
                            </p>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div>
                        <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                            <GraduationCap size={20} /> EDUCATION_LOGS
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="education-item">
                                <h4 style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.4' }}>M.SC. IN COMPUTER SCIENCE (DATA ANALYTICS)</h4>
                                <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-game)', fontSize: '0.8rem', marginTop: '0.5rem' }}>2021 – 2023</p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Digital University Kerala</p>
                            </div>

                            <div className="education-item">
                                <h4 style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.4' }}>B.VOC IN BUSINESS PROCESS & DATA ANALYTICS</h4>
                                <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-game)', fontSize: '0.8rem', marginTop: '0.5rem' }}>2018 – 2021</p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>CUSAT, Kochi</p>
                            </div>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                            <Award size={20} /> ACHIEVEMENTS
                        </h3>
                        <div className="achievement-card">
                            <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏆</span>
                            <div>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.2rem', fontSize: '1rem' }}>Special Recognition Award</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>PixDynamics (2024)</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                            <Scroll size={20} /> CERTIFICATIONS
                        </h3>
                        <ul className="certifications-list">
                            {[
                                "Blockchain Foundation Program",
                                "Business Intelligence Workshop",
                                "Advanced Excel Workshop",
                                "Big Data Hands-on Workshop"
                            ].map((cert, index) => (
                                <li key={index} className="certification-item">
                                    <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>📜</span>
                                    <span style={{ fontSize: '0.9rem' }}>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default AboutSection;
