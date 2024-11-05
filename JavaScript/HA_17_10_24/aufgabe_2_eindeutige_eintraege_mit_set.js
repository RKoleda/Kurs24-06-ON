// Aufgabenstellung
// Zielsetzung: 
// Nutzung der Kenntnisse über `Map` und `Set` aus dem Unterricht.
// Entwicklung einer kleinen Anwendung zur Verwaltung von Daten mit diesen
// Datenstrukturen.

// Aufgabe 1 - Punkt 1: Benutzerverwaltung mit `Map`.
// 1. Erstelle eine neue `Map` mit dem Namen `benutzerVerwaltung`, die 
// Benutzernamen als Schlüssel und zugehörige Objekte als Werte speichert. 
// Die Objekte sollten folgende Eigenschaften besitzen: 
// email (`benutzer123@example.com`), rolle (`Admin`, `User`, `Gast`).
// 2. Füge mindestens drei Benutzer in die Map ein.
// 3. Implementiere eine Funktion `zeigeBenutzer`, die alle Benutzer mit ihren 
// Details im Format "Benutzername: Email, Rolle" ausgibt.
// Hinweis: Nutze die Methoden .set(), .get() und .forEach().

// Schritt 1 - Erstellen der `Map` namens `benutzerVerwaltung`.

let benutzerVerwaltung = new Map();

// Schritt 2 - Einfügen von mindestens drei Benutzern in die Map.

benutzerVerwaltung.set("Sidespell", { email: "sidespell@gmx.de", rolle: "Admin" });
benutzerVerwaltung.set("Kohledawarrior", { email: "sexyrudirasenmaeherboy@spankmail.com", rolle: "User" });
benutzerVerwaltung.set("BudiBonksiDinksiDonksi", { email: "budibonksidinksidonksi@bonksimail.de", rolle: "Developer" });

// Schritt 3 - Definition der Funktion `zeigeBenutzer`.

function zeigeBenutzer() {
  console.log("Benutzerverwaltung:");
  benutzerVerwaltung.forEach((benutzer, name) => {
    console.log(`${name}: ${benutzer.email}, ${benutzer.rolle}`);
  });
}

// Schritt 4 - Aufrufen der Funktion `zeigeBenutzer`.

zeigeBenutzer();
