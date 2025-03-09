import React, { useState } from 'react';
import flashcards from '../flashcards';
import './card.css';

export default function Card() {
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleClick = () => {
    setFlip(!flip);
  };

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setFlip(false); // Reset flip state when moving to the next card
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
    setFlip(false); // Reset flip state when moving to the previous card
  };

  return (
    <div>
      <div className={`card-container ${flip ? 'flip' : ''}`} onClick={handleClick}>
        <div className="card">
          <div className="card-face card-front">
            {flashcards[currentCard].image && (
              <img src={flashcards[currentCard].image} alt="Flashcard" className="card-image" />
            )}
            <p>{flashcards[currentCard].question}</p>
          </div>
          <div className="card-face card-back">
            <p>{flashcards[currentCard].answer}</p>
          </div>
        </div>
      </div>
      <button onClick={handlePrev} disabled={currentCard === 0}>Previous</button>
      <button onClick={handleNext} disabled={currentCard === flashcards.length - 1}>Next</button>
    </div>
  );
}
