import React, { useEffect } from 'react';
import { API_BASE_URL } from "../config";

export default function ResultsScreen({ score, participant, selectedDomain, onRestart }) {

  const hasSubmitted = React.useRef(false);

  useEffect(() => {
    if (hasSubmitted.current) return;
    
    if (!participant || (!participant.id && !participant._id)) {
      console.log("NO PARTICIPANT ID");
      return;
    }

    hasSubmitted.current = true;
    console.log("SENDING SCORE:", participant.id || participant._id, score, selectedDomain);

    fetch(`${API_BASE_URL}/participants/update-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: participant.id,
        _id: participant._id,
        score: Number(score),
        domain: selectedDomain
      })
    });
  }, [participant, score, selectedDomain]);

  return (
    <div className="screen-container">
      <div className="card" style={{ padding: '4rem', minWidth: '600px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ 
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px', height: '300px',
          background: 'var(--primary-color)',
          filter: 'blur(100px)',
          opacity: 0.2,
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Session Complete
          </h2>

          <h1 style={{ fontSize: '8rem' }}>{score}</h1>

          <p style={{ marginBottom: '2rem' }}>
            Well played, <strong>{participant?.name || 'Player'}</strong>!
          </p>

          <button className="btn" onClick={onRestart}>
            NEXT CONTESTANT
          </button>
        </div>
      </div>
    </div>
  );
}
