import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, Scroll } from 'lucide-react';

const AboutSection = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pixel-border"
                style={{ padding: '2rem', background: 'rgba(15, 28, 63, 0.9)' }}
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
                    <BookOpen size={40} /> NAMBY'S LORE & ORIGIN
                </h2>

                <div style={{ display: 'grid', gap: '3rem' }}>

                    {/* Professional Summary & Image */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            width: '100%',
                            height: 'auto',
                            border: '2px solid var(--color-primary)',
                            padding: '5px',
                            background: 'rgba(255,255,255,0.05)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/images/image_2.jpeg"
                                alt="Indraja Nambiar"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        <div>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-game)' }}>
                                // PROFESSIONAL_SUMMARY
                            </h3>
                            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                                AI Developer with hands-on experience building production-grade applications powered by Large Language Models (LLMs) such as OpenAI GPT, LangChain, and LangGraph on Azure. Skilled in Python, NLP, RAG, Agentic AI, and Computer Vision, with practical expertise in designing automation workflows that solve real-world business problems.
                                <br /><br />
                                Strong background in document intelligence, data extraction, and chatbot development, including integrating AI systems into cloud environments and streamlining data-driven processes. Experienced with prompt engineering and optimization techniques for high-performance AI systems.
                            </p>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-game)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <GraduationCap size={24} /> EDUCATION_LOGS
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{
                                borderLeft: '2px solid var(--color-primary)',
                                paddingLeft: '1.5rem',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-6px',
                                    top: '0',
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%'
                                }} />
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>M.SC. IN COMPUTER SCIENCE (SPECIALISED IN DATA ANALYTICS)</h4>
                                <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-game)', fontSize: '0.9rem' }}>2021 – 2023</p>
                                <p style={{ color: 'var(--color-text-muted)' }}>Digital University Kerala, Thiruvananthapuram</p>
                            </div>

                            <div style={{
                                borderLeft: '2px solid var(--color-primary)',
                                paddingLeft: '1.5rem',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-6px',
                                    top: '0',
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%'
                                }} />
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>B.VOC IN BUSINESS PROCESS & DATA ANALYTICS</h4>
                                <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-game)', fontSize: '0.9rem' }}>2018 – 2021</p>
                                <p style={{ color: 'var(--color-text-muted)' }}>Cochin University of Science and Technology, Kochi</p>
                            </div>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-game)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Award size={24} /> ACHIEVEMENTS_UNLOCKED
                        </h3>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'rgba(255, 215, 0, 0.1)',
                            padding: '1rem',
                            borderRadius: '10px',
                            border: '1px solid var(--color-primary)'
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>🏆</span>
                            <div>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Special Recognition Award</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>PixDynamics (2024)</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-game)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Scroll size={24} /> CERTIFICATIONS & WORKSHOPS
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            {[
                                "Blockchain Foundation Program – Kerala Blockchain Academy",
                                "International Workshop on Business Intelligence and Analytics",
                                "Advanced Data Analysis with MS Excel – Workshop",
                                "Big Data: Hands-on Experience – Workshop"
                            ].map((cert, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '1rem',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <span style={{ color: 'var(--color-text-muted)' }}>📜</span>
                                    {cert}
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
