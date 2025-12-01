import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
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
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const startGame = () => {
    setGameState('PLAYING');
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ensure volume is audible
      if (!isMuted) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playing successfully");
            })
            .catch(error => {
              console.log("Audio play failed (likely needs user interaction first):", error);
            });
        }
      }
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.5;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio resumed");
              setIsMuted(false);
            })
            .catch(error => {
              console.error("Audio resume failed:", error);
            });
        }
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Use encoded URL for special characters */}
      <audio ref={audioRef} loop src={`${import.meta.env.BASE_URL}audio/Ocean%27s_Whisper.mp3`} />
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
      <AnimatePresence mode="wait">
        {gameState === 'MENU' && (
          <motion.div
            key="menu"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection
              onStart={startGame}
              onResume={() => setShowResume(true)}
              isMuted={isMuted}
              toggleAudio={toggleAudio}
            />
          </motion.div>
        )}

        {gameState === 'PLAYING' && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Content Background Image */}
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: -1,
              backgroundImage: `url(${import.meta.env.BASE_URL}images/image_4.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.4, // Increased visibility
              filter: 'grayscale(50%) contrast(1.1) brightness(0.8)', // Brighter and clearer
              pointerEvents: 'none'
            }} />

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
              <div className="container game-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <div className="header-branding" style={{ fontFamily: 'var(--font-game)', color: 'var(--color-primary)' }}>
                  INDRAJA_OS <span className="header-status" style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>[ONLINE]</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontFamily: 'var(--font-game)', alignItems: 'center' }}>
                  <button
                    onClick={toggleAudio}
                    className="home-button"
                    style={{
                      background: 'transparent',
                      color: 'var(--color-accent)',
                      border: '1px solid var(--color-accent)',
                      padding: '0.25rem 0.5rem',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <button
                    onClick={() => setGameState('MENU')}
                    className="home-button"
                    style={{
                      background: 'transparent',
                      color: 'var(--color-accent)',
                      border: '1px solid var(--color-accent)',
                      padding: '0.25rem 0.5rem',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    HOME <FaHome />
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

              {/* <section id="blog">
                <BlogSection />
              </section> */}

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
