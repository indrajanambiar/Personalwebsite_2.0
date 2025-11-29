import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CharacterStats from './components/CharacterStats';
import LevelSelect from './components/LevelSelect';
import CompanionBot from './components/CompanionBot';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import ResumeModal from './components/ResumeModal';

function App() {
  const [gameState, setGameState] = useState('MENU'); // MENU, PLAYING
  const [showResume, setShowResume] = useState(false);

  const startGame = () => {
    setGameState('PLAYING');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
      <AnimatePresence mode="wait">
        {gameState === 'MENU' && (
          <motion.div
            key="menu"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection onStart={startGame} />
          </motion.div>
        )}

        {gameState === 'PLAYING' && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* HUD / Header */}
            <header style={{
              position: 'sticky',
              top: 0,
              zIndex: 50,
              background: 'rgba(5, 10, 26, 0.9)',
              backdropFilter: 'blur(10px)',
              borderBottom: '2px solid var(--color-primary)',
              padding: '1rem'
            }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ fontFamily: 'var(--font-game)', color: 'var(--color-primary)' }}>
                  INDRAJA_OS <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>[ONLINE]</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontFamily: 'var(--font-game)', alignItems: 'center' }}>
                  <button
                    onClick={() => setGameState('MENU')}
                    style={{
                      background: 'transparent',
                      color: 'var(--color-accent)',
                      border: '1px solid var(--color-accent)',
                      padding: '0.25rem 0.5rem',
                      cursor: 'pointer',
                      borderRadius: '5px'
                    }}
                  >
                    HOME 🏠
                  </button>

                </div>
              </div>
            </header>

            <main>
              <section id="stats">
                <CharacterStats />
              </section>

              <section id="about">
                <AboutSection />
              </section>

              <section id="experience">
                <ExperienceSection />
              </section>

              <section id="levels">
                <LevelSelect />
              </section>

              <section id="blog">
                <BlogSection />
              </section>

              <section id="contact">
                <ContactSection />
              </section>
            </main>

            <footer style={{
              textAlign: 'center',
              padding: '2rem',
              borderTop: '1px solid var(--color-text-muted)',
              marginTop: '4rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-game)',
              fontSize: '0.8rem'
            }}>
              GAME OVER? NO, THE QUEST CONTINUES.
            </footer>

            <CompanionBot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
