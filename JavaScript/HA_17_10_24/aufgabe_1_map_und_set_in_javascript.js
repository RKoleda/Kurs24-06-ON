// Aufgabenstellung
// Zielsetzung: 
// Anwendung der Kenntnisse über `Map` und `Set` aus dem Unterricht.
// Entwicklung einer kleinen Anwendung zur Datenverwaltung mit diesen
// Datenstrukturen.

// Aufgabe 1 - Punkt 1: Benutzerverwaltung mit `Map`.
// 1. Erstelle eine neue `Map` mit dem Namen `benutzerVerwaltung`, die Benutzernamen als
// Schlüssel und Objekte als Werte speichert. Die Objekte sollen die folgenden Eigenschaften haben: 
// email (`benutzer123@example.com`), rolle (`Admin`, `User`, `Gast`).
// 2. Füge mindestens drei Benutzer zur Map hinzu.
// 3. Implementiere eine Funktion `zeigeBenutzer`, die alle Benutzer mit ihren Details im
// Format "Benutzername: Email, Rolle" ausgibt.
// Hinweis: Verwende die Methoden .set(), .get() und .forEach().

// Schritt 1 - Erstellung einer `Map` mit dem Namen `benutzerVerwaltung`.

let benutzerVerwaltung = new Map();

// Schritt 2 - Hinzufügen von mindestens drei Benutzern zur Map.

benutzerVerwaltung.set("Sidespell", { email: "sidespell@gmx.de", rolle: "Admin"});
benutzerVerwaltung.set("Kohledawarrior", { email: "sexyrudirasenmaeherboy@spankmail.com", rolle: "User"});
benutzerVerwaltung.set("BudiBonksiDinksiDonksi", { email: "budibonksidinksidonksi@bonksimail.de", rolle: "Developer"});

// Schritt 3 - Definition der Funktion `zeigeBenutzer`.

function zeigeBenutzer() {
  console.log("Benutzerverwaltung:");
  benutzerVerwaltung.forEach((benutzer, name) => {
    console.log(`${name}: ${benutzer.email}, ${benutzer.rolle}`);
  });
}

// Schritt 4 - Aufruf der Funktion `zeigeBenutzer`.

zeigeBenutzer();
