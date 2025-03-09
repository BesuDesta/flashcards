import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './components/card'

const App = () => {
 
  return (
    <>
      <div className="title">
        <h1>U.S. States quiz!</h1>
        <p>Number of cards: 10</p>
      </div>
      <div className="description">
        <p>Test your knowledge on the United States of America</p>
      </div>
      <Card/>
    </>
  );
}


export default App
