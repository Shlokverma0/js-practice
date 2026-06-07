// 1. Declare the descriptive variables using 'let' and assign initial string values
let adjective = "gargantuan";
let noun = "dragon";
let verb = "sleeping";
let place = "medieval castle";
let adjective2 = "smoky";
let noun2 = "spicy tacos";

// 2. Declare the firstStory variable and use the template to build the string
const firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// 3. Output the first story to the console with the required prefix
console.log(`First story: ${firstStory}`);

// 4. Assign new values to the existing descriptive variables
adjective = "tiny";
noun = "hamster";
verb = "startled";
place = "cardboard box";
adjective2 = "microscopic";
noun2 = "sunflower seeds";

// 5. Declare the secondStory variable and use the exact same template with the new values
const secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// 6. Output the second story to the console with the required prefix
console.log(`Second story: ${secondStory}`);