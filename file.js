let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colorePreferito = prompt("Inserisci il tuo colore preferito");
let eta = prompt("Inserisci la tua età")

let password = nome + cognome + colorePreferito + eta;

document.getElementById('container_password').innerHTML = password;
