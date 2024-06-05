// App.js
import React, { useState } from 'react';
import './App.css';
import MadlibForm from './MadlibForm';
import Story from './Story';

function App() {
  const [showStory, setShowStory] = useState(false);
  const [madlibData, setMadlibData] = useState({});

  const handleSubmit = (data) => {
    setMadlibData(data);
    setShowStory(true);
  };

  const handleRestart = () => {
    setShowStory(false);
    setMadlibData({});
  };

  return (
    <div className="App">
      <h1>Madlibs Game</h1>
      {showStory ? (
        <Story data={madlibData} onRestart={handleRestart} />
      ) : (
        <MadlibForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
