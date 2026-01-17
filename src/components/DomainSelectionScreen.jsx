import React from 'react';
import { domains } from '../data/quizData';

export default function DomainSelectionScreen({ onSelectDomain }) {
  return (
    <div className="screen-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>SELECT DOMAIN</h2>
        <p style={{ color: 'var(--text-muted)' }}>Choose your area of expertise to begin.</p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem', 
        width: '100%', 
        maxWidth: '1100px' 
      }}>
        {domains.map((domain, index) => (
          <button 
            key={domain.id}
            className="btn"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--surface-border)',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              animationDelay: `${index * 0.1}s`,
              animation: 'slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
              opacity: 0 // start hidden for animation
            }}
            onClick={() => onSelectDomain(domain.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-color)';
              e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--surface-border)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{domain.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
