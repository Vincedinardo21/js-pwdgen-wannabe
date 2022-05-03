// Inserisco il nome
const nome = prompt("Inserisci il tuo nome:");
console.log(nome);

// Inserisco il cognome
const cognome = prompt("Inserisci il tuo cognome:");
console.log(cognome);

// Inserisco il colore preferito
const colore = prompt("Inserisci il tuo colore preferito:");
console.log(colore);

// Password
document.getElementById("password").innerHTML = "La tua password è: " + nome + cognome + colore + 21; 