import React from 'react';
import './App.css';

function App() {
  // Definiere eine Variable für den aktuellen Tag
  const greeting = "Schön, dass du hier bist!";
  const currentDate = new Date().toLocaleDateString();

  // Definiere eine Berechnung
  const result = 5 + 3;

  return (
    <>
      {/* H1-Überschrift */}
      <h1>Willkommen zu meiner ersten React-App</h1>

      {/* H2 mit der Begrüßung */}
      <h2>{greeting} Heute ist der {currentDate}.</h2>

      {/* H3 mit einer einfachen Berechnung */}
      <h3>Das Ergebnis von 5 + 3 ist: {result}</h3>
    </>
  );
}

export default App;
