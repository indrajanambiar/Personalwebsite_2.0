import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTerminal, FaMicrochip, FaGithub, FaStar } from 'react-icons/fa';

const HeroSection = ({ onStart, onResume, isMuted, toggleAudio }) => {
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div className="hero-container" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Settings Modal */}
      {showSettings && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)'
        }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="pixel-border"
            style={{
              background: 'var(--color-bg-secondary)',
              padding: '2rem',
              width: '300px',
              textAlign: 'center'
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>SYSTEM SETTINGS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-game)', fontSize: '0.8rem', alignItems: 'center' }}>
                <span>AUDIO</span>
                <button
                  onClick={toggleAudio}
                  style={{
                    background: 'transparent',
                    color: isMuted ? 'var(--color-text-muted)' : 'var(--color-primary)',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  {isMuted ? 'OFF' : 'ON'}
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-game)', fontSize: '0.8rem' }}>
                <span>GRAPHICS</span>
                <span style={{ color: 'var(--color-primary)' }}>ULTRA</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-game)', fontSize: '0.8rem' }}>
                <span>SERVER</span>
                <span style={{ color: 'var(--color-accent)' }}>ASIA (KERALA)</span>
              </div>
            </div>

            <button
              onClick={() => setShowSettings(false)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
                fontFamily: 'var(--font-game)',
                fontSize: '0.9rem'
              }}
            >
              CLOSE
            </button>
          </motion.div>
        </div>
      )}

      {/* Fantasy Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: -10, // Reduced inset for less movement
          backgroundImage: 'url(/images/image_2.jpeg)',
          backgroundSize: 'cover', // Fill the screen again
          backgroundPosition: 'center 15%', // Shift image down to show head
          filter: 'grayscale(100%) brightness(0.55) contrast(1.2)', // Balanced shadow look
          opacity: 0.5, // Balanced opacity
          animation: 'float-bg 25s ease-in-out infinite alternate'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(2, 4, 10, 0.5)', // Balanced overlay
          zIndex: 1
        }} />
      </div>

      {/* Background Grid Animation */}
      <div className="grid-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(transparent 95%, var(--color-primary) 100%), linear-gradient(90deg, transparent 95%, var(--color-primary) 100%)',
        backgroundSize: '40px 40px',
        opacity: 0.15, // Slightly increased for visibility over image
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom',
        animation: 'grid-scroll 20s linear infinite',
        zIndex: 2
      }} />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 10, textAlign: 'center' }}
      >
        <h1 className="glitch-text hero-title" data-text="INDRAJA NAMBIAR" style={{
          fontSize: '4rem',
          marginBottom: '2rem',
          textShadow: '0 0 20px var(--color-primary)'
        }}>
          INDRAJA NAMBIAR
        </h1>

        <p className="hero-subtitle" style={{
          fontFamily: 'var(--font-game)',
          color: 'var(--color-accent)',
          marginBottom: '4rem',
          fontSize: '1.2rem'
        }}>
          SYSTEM READY... PRESS START <FaStar size={16} style={{ display: 'inline', marginBottom: '2px' }} />
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 255, 255)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="pixel-border hero-main-button"
            style={{
              padding: '1.5rem 4rem',
              fontSize: '1.5rem',
              background: 'var(--color-primary)',
              color: 'var(--color-bg)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <FaPlay size={24} /> ENTER WORLD
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
            onClick={onResume}
            className="hero-nav-button"
            style={{
              background: 'transparent',
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaTerminal size={16} /> LOAD RESUME
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
            onClick={() => setShowSettings(true)}
            className="hero-nav-button"
            style={{
              background: 'transparent',
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaMicrochip size={16} /> SETTINGS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
            onClick={() => window.open('https://github.com/indrajanambiar', '_blank')}
            className="hero-nav-button"
            style={{
              background: 'transparent',
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaGithub size={16} /> GITHUB
          </motion.button>
        </div>
      </motion.div>

      <div className="hero-footer-text" style={{
        position: 'absolute',
        bottom: '2rem',
        width: '100%',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-game)',
        fontSize: '0.8rem'
      }}>
        © 2025 INDRAJA. ALL RIGHTS RESERVED.
      </div>

      <style>{`
        @keyframes grid-scroll {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        @keyframes float-bg {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-10px, -10px); }
          100% { transform: scale(1) translate(10px, 10px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
