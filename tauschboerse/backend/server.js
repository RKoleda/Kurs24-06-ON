const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

// Einfache Benutzerdaten-Speicherung
const usersFile = 'users.json';

// Hilfsfunktion, um Benutzerdaten zu speichern
const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// Hilfsfunktion, um Benutzerdaten zu laden
const loadUsers = () => {
  if (!fs.existsSync(usersFile)) return [];
  return JSON.parse(fs.readFileSync(usersFile));
};

// Registrierung
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();

  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Benutzer existiert bereits' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { email, password: hashedPassword };

  users.push(newUser);
  saveUsers(users);

  const token = jwt.sign({ email: newUser.email }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

// Anmeldung
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();

  const user = users.find(user => user.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Ungültige Anmeldedaten' });
  }

  const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

// Geschützter Endpunkt
app.get('/api/profile', (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ message: 'Kein Token bereitgestellt' });

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Token ungültig' });
    res.json({ message: `Willkommen, ${decoded.email}!` });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
