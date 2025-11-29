import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

const ContactSection = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/indrajanambiar',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://www.linkedin.com/in/indrajanambiar',
            color: '#0077b5'
        },
        {
            name: 'Instagram',
            icon: <Instagram size={24} />,
            url: 'https://www.instagram.com/indraja_namby6/?hl=en',
            color: '#E1306C'
        },
        {
            name: 'Email',
            icon: <Mail size={24} />,
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
                <h2 className="section-title">
                    <Send size={40} /> ESTABLISH_UPLINK
                </h2>

                <p style={{ marginBottom: '3rem', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
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
                            <span style={{ fontFamily: 'var(--font-game)', fontSize: '0.9rem' }}>{link.name}</span>
                        </motion.a>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <p style={{ fontFamily: 'var(--font-game)', color: 'var(--color-primary)' }}>
                        STATUS: OPEN FOR WORK
                    </p>
                </div>

            </motion.div>
        </div>
    );
};

export default ContactSection;
