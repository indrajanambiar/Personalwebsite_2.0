import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot, ChevronRight } from 'lucide-react';

const CompanionBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi Bestie! I'm Mr. Sudoko! 🌸 I can answer FAQs about Indraja! What would you like to know? ✨", sender: 'bot' }
    ]);
    const messagesEndRef = useRef(null);

    const faqData = [
        {
            id: 'skills',
            question: "What are your top skills? 💻",
            answer: "Indraja is a pro at **Python 🐍, RAG, and Agentic AI**! She also knows PyTorch, Azure AI, and builds cool things with LangChain! 💅"
        },
        {
            id: 'projects',
            question: "Tell me about your projects! 🚀",
            answer: "She has built amazing things like the **Automation Bot** 📄 (Insurance processing) and **AudioLingo** 🎧 (Multilingual translation)! Check out the Level Select screen for more! ✨"
        },
        {
            id: 'contact',
            question: "How can I contact you? 💌",
            answer: "You can reach her at **nambiarindraja@gmail.com**! She is always open to cool collaborations! 💖"
        },
        {
            id: 'experience',
            question: "What is your experience? 💼",
            answer: "She is currently a **Junior AI Developer** at PixDynamics, building production-grade AI systems! Before that, she aced her M.Sc in Computer Science! 🎓"
        },
        {
            id: 'fun',
            question: "Any fun facts? 🎸",
            answer: "She loves **Music 🎵, Singing 🎤, and playing the Ukulele 🎸**! A true creative soul! ✨"
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleOptionClick = (faq) => {
        // Add user selection
        const userMsg = { id: Date.now(), text: faq.question, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Add bot response with delay
        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: faq.answer, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 500);
    };

    return (
        <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 100 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pixel-border"
                        style={{
                            width: 'min(320px, 90vw)',
                            height: 'min(500px, 80vh)',
                            background: 'var(--color-bg-secondary)',
                            marginBottom: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '0.75rem',
                            background: 'var(--color-primary)',
                            color: 'var(--color-bg)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontFamily: 'var(--font-game)',
                            fontSize: '0.8rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Bot size={16} /> MR. SUDOKO (FAQ MODE)
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', color: 'var(--color-bg)' }}>
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            padding: '1rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            {messages.map((msg) => (
                                <div key={msg.id} style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%'
                                }}>
                                    <div style={{
                                        padding: '0.75rem',
                                        background: msg.sender === 'user' ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                                        color: msg.sender === 'user' ? 'var(--color-bg)' : 'var(--color-text)',
                                        fontSize: '0.9rem',
                                        borderRadius: '10px',
                                        border: msg.sender === 'user' ? 'none' : '1px solid var(--color-text-muted)',
                                        lineHeight: '1.4'
                                    }}>
                                        {msg.text.split('**').map((part, i) =>
                                            i % 2 === 1 ? <strong key={i} style={{ color: 'var(--color-accent)' }}>{part}</strong> : part
                                        )}
                                    </div>
                                    <div style={{
                                        fontSize: '0.6rem',
                                        color: 'var(--color-text-muted)',
                                        marginTop: '0.25rem',
                                        textAlign: msg.sender === 'user' ? 'right' : 'left',
                                        fontFamily: 'var(--font-game)'
                                    }}>
                                        {msg.sender === 'user' ? 'YOU' : 'MR. SUDOKO'}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* FAQ Options */}
                        <div style={{
                            padding: '1rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-game)', marginBottom: '0.5rem' }}>
                                SELECT A TOPIC:
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {faqData.map((faq) => (
                                    <motion.button
                                        key={faq.id}
                                        whileHover={{ scale: 1.05, background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleOptionClick(faq)}
                                        style={{
                                            flex: '1 1 auto',
                                            padding: '0.5rem 0.75rem',
                                            background: 'transparent',
                                            border: '1px solid var(--color-primary)',
                                            color: 'var(--color-primary)',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer',
                                            borderRadius: '5px',
                                            textAlign: 'left',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <ChevronRight size={12} />
                                        {faq.question}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--color-primary)',
                        color: 'var(--color-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 15px var(--color-primary)',
                        border: '2px solid var(--color-bg)'
                    }}
                >
                    <MessageSquare size={24} />
                </motion.button>
            )}
        </div>
    );
};

export default CompanionBot;
