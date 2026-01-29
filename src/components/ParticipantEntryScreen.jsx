import React, { useState } from 'react';
import { API_BASE_URL } from "../config";

export default function ParticipantEntryScreen({ onJoin }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name && !id) return;

  const payload = name
    ? { name }
    : { id };

  try {
    const res = await fetch(`${API_BASE_URL}/participants/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!data.success) {
      alert("Invalid participant or server error");
      return;
    }

    onJoin(data.participant);
  } catch (error) {
    console.error("Join error:", error);
    alert(`Failed to connect to server: ${error.message}. \n\nCheck if the Backend is awake!`);
  }
};



  return (
    <div className="screen-container">
      <div className="card" style={{ width: '100%', maxWidth: '600px', padding: '4rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Participant Entry</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Full Name</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>
          <br/>
          <h3 style={{ textAlign: 'center', color:'grey'}}>OR</h3>
          <br/>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Participant Email-ID</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. CS-2026-001" 
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
