// Step 1: Log the initial greeting message
console.log("Hello! I'm your coding fun fact guide!");

// Step 2: Create the three initial variables
const botName = "FactBot";
const botLocation = "the Cloud";
const favoriteLanguage = "JavaScript";

// Step 3: Log the name and location message
console.log(`My name is ${botName} and I live on ${botLocation}.`);

// Step 4: Log the favorite programming language message
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Step 5 & 6: Create the codingFact variable with 'let' and log the first fact
let codingFact = `${favoriteLanguage} was famously created in just 10 days back in 1995 by Brendan Eich.`;
console.log(codingFact);

// Step 7 & 8: Reassign codingFact to a second fact and log it
codingFact = `Did you know? ${favoriteLanguage} was originally going to be named Mocha, and then LiveScript, before settling on its current name.`;
console.log(codingFact);

// Step 9 & 10: Reassign codingFact to a third fact and log it
codingFact = `Even though they share a name, ${favoriteLanguage} is completely different from Java in both concept and design.`;
console.log(codingFact);

// Step 11: Log the final farewell statement
console.log(`It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`);