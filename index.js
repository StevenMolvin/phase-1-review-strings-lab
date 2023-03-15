// Write your code in this file!
let currentUser = "Tina";
let welcomeMessage = "Welcome to Flatbook, ";
welcomeMessage = welcomeMessage + currentUser + "!";
let excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";
const upperCaseCurrentUser = currentUser.toUpperCase();
excitedWelcomeMessage = excitedWelcomeMessage + upperCaseCurrentUser + "!";
let shortGreeting = "Welcome, ";
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
shortGreeting = shortGreeting + firstInitial + "!";
