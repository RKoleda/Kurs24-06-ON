const fs = require('fs').promises;
const readline = require('readline');

// Benutzer-Eingabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Frage-Funktion
const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

async function appendToFile() {
  try {
    const fileName = await askQuestion('Dateiname: '); // Dateiname eingeben
    const message = await askQuestion('Nachricht: '); // Nachricht eingeben

    // Nachricht anhängen
    await fs.appendFile(fileName, message + '\n', 'utf8');
    console.log(`Nachricht erfolgreich in "${fileName}" gespeichert.`);
  } catch (err) {
    console.error('Fehler:', err);
  } finally {
    rl.close(); // Schnittstelle schließen
  }
}

appendToFile();
