import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";    
import inspirationalQuotes from "inspirational-quotes";
import catFacts from 'cat-facts';

// Funktion, um ein inspirierendes Zitat anzuzeigen
function showQuote() {
    const quote = inspirationalQuotes.getQuote();
    const quoteBox = boxen(quote.text, { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(quoteBox);
}

// Funktion, um einen Katzenfakt anzuzeigen
function showCatFact() {
    const fact = catFacts.random(); 
    console.log(chalk.green(`Katzenfakt: ${fact}`));
}

// Benutzername abfragen
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: chalk.bold('Wie heißt du?')
        }
    ]);
    return answers.username;
}

// Benutzerinteraktionen für neue Katzenfakten
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'wantMoreFacts',
            message: chalk.bold('Möchtest du einen weiteren Katzenfakt sehen?'),
            default: true
        }
    ]);
    return answers.wantMoreFacts;
}

// Benutzerinteraktionen für Zitate
async function askForNewQuote() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'wantMoreQuotes',
            message: chalk.bold('Möchtest du ein inspirierendes Zitat sehen?'),
            default: true 
        }
    ]);
    return answers.wantMoreQuotes;
}

// Hauptfunktion
async function main() {
    const username = await askForUsername(); 
    console.log(`Hallo, ${username}!`); 
    
    let moreFacts = true;
    let moreQuotes = true;

    while (moreFacts || moreQuotes) {
        if (moreQuotes) {
            moreQuotes = await askForNewQuote(); 
            if (moreQuotes) {
                showQuote(); 
            }
        }

        if (moreFacts) {
            moreFacts = await askForNewCatFact(); 
            if (moreFacts) {
                showCatFact(); 
            }
        }
    }
    
    console.log(chalk.blue('Danke fürs Spielen!'));
}

main();