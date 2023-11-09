// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente


let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let firstNumber = prompt("Inserisci un numero");
let secondNumber = prompt("Inserisci un secondo numero");
let randomNumber = Math.floor((Math.random() * 100)+ 0 );


firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
let divisionResult = firstNumber / secondNumber;

console.log(`

password: ${name}${surname}${favoriteColor}21
password2: ${name}${surname}${favoriteColor}${divisionResult}
password3: ${name}${surname}${favoriteColor}${randomNumber}

`)






     







document.getElementById('firstpassword').innerHTML= name+surname+favoriteColor+21;
document.getElementById('secondpassword').innerHTML= name+surname+favoriteColor+divisionResult;
document.getElementById('thirdpassword').innerHTML= name+surname+favoriteColor+randomNumber;


