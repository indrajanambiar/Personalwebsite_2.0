import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, User } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="pixel-border"
                    style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        maxWidth: '800px',
                        width: '90%',
                        position: 'relative',
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            color: 'var(--color-text-muted)',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* Left Column: Image */}
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            overflow: 'hidden',
                            border: '2px solid var(--color-primary)',
                            position: 'relative'
                        }}>
                            <img
                                src="/images/image_2.jpeg"
                                alt="Indraja Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                background: 'rgba(0,0,0,0.7)',
                                color: 'var(--color-primary)',
                                padding: '0.5rem',
                                textAlign: 'center',
                                fontFamily: 'var(--font-game)',
                                fontSize: '0.8rem'
                            }}>
                                PLAYER_ID: INDRAJA
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Actions */}
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <FileText size={32} /> RESUME_DATA
                        </h2>

                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Accessing classified personnel files... <br />
                            Select an action to proceed with the data retrieval.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.button
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('/resume.txt', '_blank')}
                                style={{
                                    padding: '1rem',
                                    background: 'var(--color-primary)',
                                    color: 'var(--color-bg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    border: 'none'
                                }}
                            >
                                <Eye size={20} /> VIEW DOCUMENT
                            </motion.button>

                            <motion.button
                                onClick={async () => {
                                    try {
                                        const response = await fetch('/resume.txt');
                                        const blob = await response.blob();
                                        const url = window.URL.createObjectURL(blob);
                                        const link = document.createElement('a');
                                        link.href = url;
                                        link.download = 'Indraja_Nambiar_Resume.txt';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                        window.URL.revokeObjectURL(url);
                                    } catch (error) {
                                        console.error('Download failed:', error);
                                        alert('Failed to download resume. Please try viewing it instead.');
                                    }
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    padding: '1rem',
                                    background: 'transparent',
                                    color: 'var(--color-primary)',
                                    border: '1px solid var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }}
                            >
                                <Download size={20} /> DOWNLOAD DATA
                            </motion.button>
                        </div>

                        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-game)' }}>
                            STATUS: READY FOR DEPLOYMENT
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;
