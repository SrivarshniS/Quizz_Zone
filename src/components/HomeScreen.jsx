import React, { useState } from 'react';
import LeaderboardScreen from './leaderboard';
import wtmLogo from '../assets/WTM.png';
import shebuilds from '../assets/shebuilds.png';

export default function HomeScreen({ onStart, leaderboards }) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="screen-container home-screen">
      {showLeaderboard && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 100,
          background: 'rgba(0,0,0,0.95)',
          overflowY: 'auto',
          padding: '2rem'
        }}>
          <button 
            className="btn" 
            style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 101 }}
            onClick={() => setShowLeaderboard(false)}
          >
            CLOSE
          </button>
          <LeaderboardScreen leaderboards={leaderboards} />
        </div>
      )}

      <div className="hero-section animate-float" style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 2 }}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={wtmLogo} alt="Women Techmakers Logo" style={{ maxWidth: '200px', marginBottom: '0.0rem'}} />
          <h3>X</h3>
          <img src={shebuilds} alt="Shebuilds Logo" style={{ maxWidth: '300px', marginBottom: '0.0rem'}} />
        </div>
        
        <h1 style={{
          textAlign: "center",
          fontSize: '5rem', 
          fontWeight: '800', 
          background: 'linear-gradient(to right, #fff, #9ca3af)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          marginTop: 0,
          marginBottom: '0.5rem',
          letterSpacing: '-2px'
        }}>Quizz Zone
        </h1>
        <h2 style={{ 
          textAlign: "center",
          fontSize: '1.0em',
          color: 'var(--primary-color)', 
          textTransform: 'uppercase', 
          letterSpacing: '4px',
          fontWeight: 600
        }}>
         {"  "} &lt;powered by Shebuilds in collab with WTM/&gt;
        </h2>
        
        <div style={{ marginTop: '4rem' }}>
          <button className="btn animate-pulse" style={{ padding: '1.5rem 5rem', fontSize: '1.5rem' }} onClick={onStart}>
            ENTER QUIZ
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowLeaderboard(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary-color)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
        }}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.15)", 
          color: "#000",                          
          fontSize: "24px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          transition: "background 0.25s ease",
          zIndex: 10
        }}
      >
        🏆
      </button>

    </div>
  );
}
