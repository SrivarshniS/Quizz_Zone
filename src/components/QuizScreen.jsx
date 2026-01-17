import React, { useState, useEffect } from 'react';

export default function QuizScreen({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isReveling, setIsReveling] = useState(false);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);

  const currentQ = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    if (isReveling) return;

    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleAnswer(-1);
    }
  }, [timer, isReveling]);

  const handleAnswer = (optionIndex) => {
    if (isReveling) return;

    setSelectedOption(optionIndex);
    setIsReveling(true);

    if (optionIndex === currentQ.answer) {
      setScore(s => s + 10);
    }

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setTimer(10);
        setIsReveling(false);
        setSelectedOption(null);
      } else {
        onFinish(optionIndex === currentQ.answer ? score + 10 : score);
      }
    }, 2000);
  };

  const getOptionStyle = (index) => {
    // Base style logic
    if (!isReveling) return {}; // Default

    if (index === currentQ.answer) {
      return { 
        backgroundColor: 'rgba(16, 185, 129, 0.2)', 
        borderColor: 'var(--success-color)',
        boxShadow: '0 0 20px var(--success-glow)',
        transform: 'scale(1.02)'
      };
    }
    if (index === selectedOption && index !== currentQ.answer) {
      return { 
        backgroundColor: 'rgba(239, 68, 68, 0.2)', 
        borderColor: 'var(--error-color)',
        boxShadow: '0 0 20px var(--error-glow)'
      };
    }
    return { opacity: 0.4 };
  };

  return (
    <div className="screen-container" style={{ justifyContent: 'flex-start', paddingTop: '6rem' }}>
      
      {/* Timer Bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)' }}>
        <div style={{ 
          height: '100%', 
          width: `${(timer / 10) * 100}%`, 
          background: timer <= 3 ? 'var(--error-color)' : 'var(--primary-color)',
          transition: 'width 1s linear, background 0.3s' 
        }} />
      </div>

      <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
         <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>QUESTION {currentQuestionIndex + 1}/{totalQuestions}</span>
         <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{timer}s</span>
      </div>

      {/* Question */}
      <div className="card" style={{ width: '100%', maxWidth: '1000px', marginBottom: '3rem', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', lineHeight: 1.3 }}>{currentQ.question}</h2>
      </div>

      {/* Options */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '1.5rem', 
        width: '100%', 
        maxWidth: '1000px' 
      }}>
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            className="btn btn-option"
            disabled={isReveling}
            onClick={() => handleAnswer(idx)}
            style={{ 
              ...getOptionStyle(idx),
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <div className="option-label" style={{ 
              color: isReveling && idx === currentQ.answer ? 'var(--success-color)' : 'white' 
            }}>
              {String.fromCharCode(65 + idx)}
            </div>
            <span style={{ fontSize: '1.2rem' }}>{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
