import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import ParticipantEntryScreen from './components/ParticipantEntryScreen';
import DomainSelectionScreen from './components/DomainSelectionScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import NeonBackground from './components/NeonBackground';
import { questions } from './data/quizData';
import { initialLeaderboards as lbs } from './data/leaderboardData';

function App() {
  const [screen, setScreen] = useState('HOME'); // HOME, ENTRY, DOMAIN, QUIZ, RESULTS
  const [participant, setParticipant] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [score, setScore] = useState(0);
  const [leaderboards, setLeaderboards] = useState(lbs);

  // Transitions
  const goEntry = () => setScreen('ENTRY');
  
  const handleJoin = (data) => {
    setParticipant(data);
    setScreen('DOMAIN');
  };

  const handleSelectDomain = (domainId) => {
    setSelectedDomain(domainId);
    setScreen('QUIZ');
  };

  const handleQuizFinish = (finalScore) => {
    setScore(finalScore);
    
    // Update Leaderboard Logic (Simplified)
    const newEntry = { name: participant?.name, score: finalScore, id: participant?.id };
    
    setLeaderboards(prev => {
      const newOverall = [...prev.overall, newEntry].sort((a, b) => b.score - a.score);
      // Not actually saving domain specific for now in home screen summary, but good to have
      return { ...prev, overall: newOverall };
    });

    setScreen('RESULTS');
  };

  const restart = () => {
    setParticipant(null);
    setSelectedDomain(null);
    setScore(0);
    setScreen('HOME');
  };

  return (
    <>
      <NeonBackground />
      
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', opacity: 0.3, userSelect: 'none', pointerEvents: 'none', zIndex: 1000 }}>
        Kiosk Mode • {screen}
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
      {screen === 'HOME' && (
        <HomeScreen onStart={goEntry} leaderboards={leaderboards} />
      )}

      {screen === 'ENTRY' && (
        <ParticipantEntryScreen onJoin={handleJoin} />
      )}

      {screen === 'DOMAIN' && (
        <DomainSelectionScreen onSelectDomain={handleSelectDomain} />
      )}

      {screen === 'QUIZ' && selectedDomain && (
        <QuizScreen 
          questions={questions[selectedDomain]} 
          onFinish={handleQuizFinish} 
        />
      )}

      {screen === 'RESULTS' && (
        <ResultsScreen 
          score={score} 
          participant={participant} 
          selectedDomain={selectedDomain}
          onRestart={restart} 
        />
      )}
      </div>
    </>
  );
}

export default App;
