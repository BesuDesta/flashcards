import React, {useState} from 'react';
import './form.css';
import flashcards from '../flashcards';


export default function form({currentCard}) {
  const [input, setInput] = useState('');
  const [correct, setCorrect] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === flashcards[currentCard].answer.toLowerCase()) {
      setCorrect(true);
      console.log('Correct!');
    } else {
      setCorrect(false);
    }
  };
  
  return (
    <div className={`form ${correct === true ? 'correct' : correct === false ? 'incorrect' : ''}`}>
      <p>Guess the answer here: </p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
