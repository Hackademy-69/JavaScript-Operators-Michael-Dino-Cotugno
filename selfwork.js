// Esercizi Tipi di dato e Operatori:
// 1 -  Dichiarare una variabile contenente l’età di un utente. Fare in modo che venga stampata in console la frase: Hai x anni e te ne mancano ancora y per arrivare a 100. (servirà una seconda variabile che indichi quanti anni mancano per arrivare a 100)

console.log("Esempio 1");
// let age = prompt("Quanti anni hai?");
let age2 = 56;
console.log(`Hai ${age2}. Te ne mancano ${100 - age2} per arrivare a 100.`);

// 2 -  Scrivere un programma che dati:
//     a) Un numero totale di gatti (44)
//     b) Il  numero dei gatti presenti in ogni fila (6)
//   Restituisca in output:
//     - Il  numero di file risultanti
//     - indicare il numero di gatti mancanti per completare una nuova fila

//     Esempio:
// “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”.

console.log("Esempio 2");
let cat = 44;
let catInOgniFila = 6;
console.log(
    `Ci sono ${Math.floor(cat / catInOgniFila)} file di gatti e mancano ${
        catInOgniFila - (cat % catInOgniFila)
    } per una nuova fila, con un avanzo di ${cat % catInOgniFila}.`
);

// 3 - Scrivere un programma che dati sette valori relativi alle temperature della settimana stabilisca la giornata più calda e quella più fredda.
//   Esempio:
//     Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
//     “La temperatura piu’ calda e’ 31 quella piu’ fredda -6”

console.log("Esempio 3");
let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

console.log(
    `La temperatura piu’ calda e’ ${Math.max(
        a,
        b,
        c,
        d,
        e,
        f,
        g
    )} quella piu’ fredda ${Math.min(a, b, c, d, e, f, g)}`
);

// 4 - Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true. Utilizzare tutti gli operandi una sola volta ciascuno.

console.log("Esempio 4");
// Falsy: false, NaN, null
// Truthy: ‘Ciao’, 23
console.log(("Ciao" !== 23 && false !== NaN) || null);

// 5 - Scrivere il recap
