// Metodo con variabili
let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colorePreferito = prompt("Inserisci il tuo colore preferito");
let eta = prompt("Inserisci la tua età")

let password = nome + cognome + colorePreferito + eta;

document.getElementById('container_password').innerHTML = password;
// Posso sommare gli input direttamente senza utilizzo di un'altra varibile
// document.getElementById('container_password').innerHTML = nome + cognome + colorePreferito + eta;


// Metodo senza Variabili
// document.getElementById('container_password').innerHTML = prompt("Inserisci il tuo nome") + prompt("Inserisci il tuo cognome") + prompt("Inserisci il tuo colore preferito") + prompt("Inserisci la tua età");

