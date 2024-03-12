import React from 'react';
import seperate from './components/seperate';
import Card from './components/card';
import Navbar from './components/navbar';
import './App.css';

function App() {
  const cards = seperate.map((item) => {
    return <Card key={item.Title} item={item} className="cards" />;
  });

  // Under is the main display
  return (
    <div className="main">
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
