import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub size={24} />,
            url: 'https://github.com/indrajanambiar',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={24} />,
            url: 'https://www.linkedin.com/in/indrajanambiar',
            color: '#0077b5'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram size={24} />,
            url: 'https://www.instagram.com/indraja_namby6/?hl=en',
            color: '#E1306C'
        },
        {
            name: 'Email',
            icon: <FaEnvelope size={24} />,
            url: 'mailto:nambiarindraja@gmail.com',
            color: '#EA4335'
        }
    ];

    return (
        <div className="container section-padding">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="pixel-border"
                style={{ padding: '3rem', background: 'rgba(15, 28, 63, 0.9)', textAlign: 'center' }}
            >
                <h2 className="section-title contact-section-title">
                    <FaPaperPlane size={40} /> ESTABLISH_UPLINK
                </h2>

                <p className="contact-description" style={{ marginBottom: '3rem', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                    Ready to collaborate on the next big AI project? Send a transmission.
                </p>

                <div className="contact-grid">
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="contact-card"
                        >
                            <div style={{
                                color: 'var(--color-bg)',
                                background: 'var(--color-text)',
                                padding: '0.8rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {link.icon}
                            </div>
                            <span className="contact-card-text" style={{ fontFamily: 'var(--font-game)' }}>{link.name}</span>
                        </motion.a>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <p className="contact-status" style={{ fontFamily: 'var(--font-game)', color: 'var(--color-primary)' }}>
                        STATUS: OPEN FOR WORK
                    </p>
                </div>

            </motion.div>
        </div>
    );
};

export default ContactSection;
