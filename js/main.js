// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente


let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");            // Esercizio base


let passwordGenerator = `

----Password: ${name}${surname}${favoriteColor}21

`;
console.log(passwordGenerator)


/*
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");            // Password con divisione
let firstNumber = prompt("Scegli un numero");
let secondNumber = prompt("Scegli un secondo numero");

// Risultato del calcolo

firstNumber= parseInt(firstNumber);
secondNumber= parseInt(secondNumber);
let divisionResult = firstNumber / secondNumber;

let passwordGenerator = `

----Password: ${name}${surname}${favoriteColor}${divisionResult}

`;
console.log(passwordGenerator)
*/

/*
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");            // Password con numero random
let randomNumber = Math.floor((Math.random() * 100) + 0);


let passwordGenerator = `

----Password: ${name}${surname}${favoriteColor}${randomNumber}

`;
console.log(passwordGenerator)
*/