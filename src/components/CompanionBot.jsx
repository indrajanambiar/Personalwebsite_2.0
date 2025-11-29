import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot, ChevronRight } from 'lucide-react';

const CompanionBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Greetings. I am Mr. Sudoko 🤖. I can provide factual information about Indraja. Select a topic below. 🙂", sender: 'bot' }
    ]);
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef(null);

    const faqData = [
        {
            id: 'skills',
            question: "What are her top skills? 💻",
            answer: "Indraja specializes in **Python, RAG, and Agentic AI**. Her technical stack includes PyTorch, Azure AI, and LangChain."
        },
        {
            id: 'projects',
            question: "Tell me about her projects! 🚀",
            answer: "Key projects include an **Automation Bot** for insurance processing and **AudioLingo** for multilingual translation. Detailed case studies are available in the Level Select screen."
        },
        {
            id: 'contact',
            question: "How can I contact her? 💌",
            answer: "You can contact her via email at **nambiarindraja@gmail.com** for professional inquiries."
        },
        {
            id: 'experience',
            question: "What is her experience? 💼",
            answer: "She works as a **Junior AI Developer** at PixDynamics, focusing on production-grade AI systems. She holds an M.Sc in Computer Science."
        },
        {
            id: 'fun',
            question: "Any fun facts about her? 🎸",
            answer: "Outside of work, she is interested in **Music, Singing, and playing the Ukulele**."
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, showOptions]);

    const handleOptionClick = (faq) => {
        setShowOptions(false);
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
                        {/* FAQ Options Area */}
                        <div style={{
                            padding: '1rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                            {showOptions ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-game)', marginBottom: '0.5rem' }}>
                                        SELECT A TOPIC:
                                    </p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '150px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                        {faqData.map((faq) => (
                                            <motion.button
                                                key={faq.id}
                                                whileHover={{ scale: 1.02, background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleOptionClick(faq)}
                                                style={{
                                                    width: '100%',
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
                                                    gap: '0.5rem',
                                                    flexShrink: 0
                                                }}
                                            >
                                                <ChevronRight size={12} />
                                                {faq.question}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => setShowOptions(true)}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'var(--color-primary)',
                                        color: 'var(--color-bg)',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontFamily: 'var(--font-game)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <MessageSquare size={16} /> ASK ANOTHER QUESTION
                                </motion.button>
                            )}
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
