// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let number = 21;

let passwordGenerator = `

----Password: ${name}${surname}${favoriteColor}21

`;
console.log(passwordGenerator)
