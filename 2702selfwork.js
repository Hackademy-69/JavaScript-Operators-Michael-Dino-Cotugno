// Esercizi funzioni:
// 1 - Scrivere una funzione che prenda in ingresso 3 parametri:
//              - Una stringa che rappresenti un nome (es. Matteo)
//              - Un numero che rappresenti un'eta'  (es. 36)
//              - Una stringa che rappresenti un linguaggio di programmazione (es. JavaScript)
//        Questa funzione dovra' restituire la stringa Mi chiamo Matteo, ho 36 anni ed il mio linguaggio di programmazione preferito e' JavaScript
console.log(`Funzioni: Esercizio 1`);
function dettagliPersonali(nome, eta, linguaggio) {
    console.log(
        `Mi chiamo ${nome}, ho ${eta} anni ed il mio linguaggio di programmazion preferito è ${linguaggio}.`
    );
}

dettagliPersonali(`Michael`, 39, `C++`);
// dettagliPersonali(true, null, NaN);

// 2 - Scrivere una funzione che prenda in input due parametri e restituisca true se sono identici, false altrimenti.
// Esempi: Input: a = 2, b = 3 Output: false
//                 Input: a = 2, b = "2" Output: false
//                 Input: a = 2, b = 2 Output: true
console.log(`Funzioni: Esercizio 2`);
function identita(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(identita(1, 11));

// Esercizi array:
// 1 - Dato l' array  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10] utilizzare il giusto metodo degli array per rimuovere il primo 10 e sostituirlo con un 9
console.log(`Array: Esercizio 1`);
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
numeri.splice(8, 1, 9);
console.log(numeri);

// 2 - Dato un array vuoto names = []   utilizzare il metodo giusto per aggiungere all'interno i nomi degli studenti della vostra aula studio
console.log(`Array: Esercizio 2`);
let nomi = [];
nomi.push(`Michael`, `Elison`, `Simone`);
console.log(nomi);

// Esercizi funzioni + array:
// 1 - Scrivere una funzione che prenda un array di 10 numeri interi ordinati in modo casuale in ingresso e li riordini in modo decrescente.
// Esempio: Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4] Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
// Variante: Provare ad ordinali in modo crescente.
console.log(`Funzioni + Array: Esercizio 1`);

function ordinaMatriceDec(arr) {
    return matrice.sort((a, b) => b - a);
}
function ordinaMatriceCre(arr) {
    return matrice.sort((a, b) => a - b);
}

let matrice = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
console.log(ordinaMatriceDec(matrice));
console.log(ordinaMatriceCre(matrice));

// 2 - Scrivere due funzioni che prendano in input un array di numeri, una dovra’ restituire il numero maggiore, l'altra dovra’ restituire il minore.
// Esempio: Input: a = [1, -10, 4]
// Output: minore = -10, maggiore = 4
console.log(`Funzioni + Array: Esercizio 2`);
function matriceMin(arr) {
    return arr.shift(arr.sort((a, b) => a - b));
}
function matriceMax(arr) {
    return arr.pop(arr.sort((a, b) => a - b));
}
let matrice2 = [-9, 7, 28, -29, 38, 7.9, -97.3];
console.log(matrice2);
console.log(`Minore: ${matriceMin(matrice2)}`);
console.log(`Maggiore: ${matriceMax(matrice2)}`);
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// Esercizi funzioni:
// 1 - Scrivere una funzione che prenda in ingresso 3 parametri:
//              - Una stringa che rappresenti un nome (es. Matteo)
//              - Un numero che rappresenti un'eta'  (es. 36)
//              - Una stringa che rappresenti un linguaggio di programmazione (es. JavaScript)
//        Questa funzione dovra' restituire la stringa Mi chiamo Matteo, ho 36 anni ed il mio linguaggio di programmazione preferito e' JavaScript

// console.log(`Funzioni: Esercizio 1`);

// function personalDetails(name, age, language) {
//     console.log(
//         `My chiamo ${name}, ho ${age} anni ed il mio linguaggio di programmazion preferito è ${language}.`
//     );
// }

// personalDetails(`Michael`, 39, `C++`);

// 2 - Scrivere una funzione che prenda in input due parametri e restituisca true se sono identici, false altrimenti.
// Esempi: Input: a = 2, b = 3 Output: false
//                 Input: a = 2, b = "2" Output: false
//                 Input: a = 2, b = 2 Output: true

// console.log(`Funzioni: Esercizio 2`);

// function identity(a, b) {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(identity());

// Esercizi array:
// 1 - Dato l' array  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10] utilizzare il giusto metodo degli array per rimuovere il primo 10 e sostituirlo con un 9

// console.log(`Array: Esercizio 1`);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
// numbers.splice(8, 1, 9);
// console.log(numbers);

// 2 - Dato un array vuoto names = []   utilizzare il metodo giusto per aggiungere all'interno i nomi degli studenti della vostra aula studio

// console.log(`Array: Esercizio 2`);

// let names = [];

// names.push(`Simone Lupica`, `Elison Di Biase`, `Michael Dino Cotugno`);

// console.log(names);

//Esercizi funzioni + array:
// 1 - Scrivere una funzione che prenda un array di 10 numeri interi ordinati in modo casuale in ingresso e li riordini in modo decrescente.
// Esempio: Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4] Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
// Variante: Provare ad ordinali in modo crescente.

// console.log(`Funzioni + Array: Esercizio 1`);
// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// function arraySort(arr) {
//     return arr.sort((a, b) => a - b);
// }

// console.log(arraySort(array));

//2 - Scrivere due funzioni che prendano in input un array di numeri, una dovra’ restituire il numero maggiore, l'altra dovra’ restituire il minore.
// Esempio: Input: a = [1, -10, 4]
// Output: minore = -10, maggiore = 4

// console.log(`Funzioni + Array: Esercizio 2`);

// let array2 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// function arrayMin(arr) {
//     return arr.shift(arr.sort((a, b) => a - b));
// }
// function arrayMax(arr) {
//     return arr.pop(arr.sort((a, b) => a - b));
// }

// console.log(`Minore: ${arrayMin(array2)}`);
// console.log(`Maggiore: ${arrayMax(array2)}`);
