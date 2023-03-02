// Esercizi Metodi degli Array:
// - Scrivere una funzione che prenda in ingresso una stringa e me la restituisca capovolta
console.log(`Ex1`);
function stringReverse(str) {
    let reversedString = str.split(" ").reverse().join(" ");
    return reversedString;
}

let str = `Amo la pizza`;

console.log(stringReverse(str));

// - Scrivere una funzione che prenda due parametri, il primo e' un array di numeri e il secondo e' un numero. La funzione mi deve restituire un nuovo array i cui numeri siano tutti moltiplicati per il secondo parametro

console.log(`Ex2`);
function multiplier(arr, multiplier) {
    let multiplied = arr.map((el) => el * multiplier);
    return multiplied;
}
console.log(multiplier([3, 4, 5], 3));

// - Scrivere una funzione che prenda in ingresso un numero N e mi restituisca un array contenente N numeri casuali

console.log(`Ex3`);
function randomArray(n) {
    let randomizedArray = Array(n)
        .fill()
        .map(() => Math.random());
    return randomizedArray;
}

console.log(randomArray(5));

// function getRandomNumber(n) {
//     let randomNumbers = Array(n).fill().map(() => Math.random() *100);
//     return randomNumbers;
// }

// console.log(getRandomNumber(5));

// - Scrivere una funzione che prenda in ingresso un array contenente qualsiasi tipo di dato e mi restituisca un nuovo array che contenga solo le stringhe dell'array che abbiamo passato

console.log(`Ex4`);
function stringFilter(arr) {
    let stringArray = arr.filter((el) => typeof el == "string");
    return stringArray;
}

let sample = [`ass`, 9, null, true, NaN, `alkh`, `lkhf`];
console.log(stringFilter(sample));

// ESERCIZIO 1
// function reverseString(str) {
//     let arr = str.split("");
//     let reversedArr = arr.reverse();
//     let reversedStr = reversedArr.join("");
//     return reversedStr;
// }

// console.log(reverseString("Ciao"));

// ESERCIZIO2

// function multyArray(arr, num) {
//     let multipliedArr = arr.map((element) => element * num);
//     return multipliedArr;
// }

// console.log(multyArray([2, 4, 8], 3));

// ESERCIZIO 3

// function getRandomNumber(n) {
//     let randomNumbers = Array(n).fill().map(() => Math.random() *100);
//     return randomNumbers;
// }

// console.log(getRandomNumber(5));

// ESERCIZIO 4

// function filterStrings(arr) {
//     let stringArrey = arr.filter((el) =>typeof el == 'string');
//     return stringArrey;
// }

// let mixedArrey = [1, 'hello', 3, null, 'world']
// let stringArrey = filterStrings(mixedArrey);
// console.log(stringArrey);

//
// SELFWORK 28/02/23

// Esercizi Funzioni e Metodi degli Array:
// - Scrivere una funzione che prenda in input un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempi:

//     Input : 9
//     Output :  1 cifra

//     Input : 99
//     Output :  2 cifre

// Super indizio: anche le stringhe hanno la proprieta' .length

console.log(`\n Esempio 1`);
function characterCounter(n) {
    let charCount = n.toString().length;
    console.log(`Input :  ${n}\nOutput : ${charCount}`);
}
let num = Math.ceil(Math.random(6) + 1);
characterCounter(9876);

// Scrivere una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
//   Nel controllo scarta gli spazi e i segni di punteggiatura.

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE

//   Consigli:
//   Potete eliminare spazi e segni di punteggiatura usando :

//      str.replace(/\W/g, "").

console.log(`\n Esempio 2`);

function palindromeChecker(str) {
    let reversed = str.replace(/\W/g, "").split("").reverse().join("");
    // replace --> removes spaces --> STILL A STRING
    // split --> makes STRING into ARRAY
    // reverse --> reverses order of ARRAY
    // join --> makes ARRAY into STRING
    if (str.replace(/\W/g, "") == reversed) {
        // removes spaces --> STILL A STRING
        return true;
    } else {
        return false;
    }
}
let testString = `a man a plan a canal panama`;
console.log(palindromeChecker(testString));

// console.log(testString.replace(/\W/g, ""));

// console.log(`\n\nTesting area`);
// let removespacestest = testString.replace(/\W/g, "");
// console.log(removespacestest);
// let reversedtest = removespacestest.split(``).reverse().join(``);
// console.log(reversedtest);
// let crazytest = testString.replace(/\W/g, "").split(``).reverse().join(``);
// console.log(crazytest);

//-----------------------
// Scrivere una funzione che prenda in input un numero intero N e mi restituisca un array con all'interno N numeri casuali

console.log(`\n Esempio 3`);

function randomArray(n) {
    let intermediary = [];
    for (let i = 0; i < n; i++) {
        // intermediary = intermediary.push(Math.random());
    }
}

console.log(randomArray(2));

let test = [];
test = test.push(Math.random(), Math.random());
console.log(test);
console.log(Math.random());

// Scrivere una funzione che dati:
// - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// - il tipo di operazione aritmetica da effettuare (stringa), una delle seguenti:
//    addizione
//    sottrazione
//   moltiplicazione
//   divisione
//  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// Esempio:
// Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b=[9, 3, 1, 4, 7, 6, 5, 10, 1, 5] operazione = "addizione"
// Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

console.log(`\n Esempio 4`);
// Math.floor(Math.random() * (10 - 1) + 1);

function arrayMath(arr1, arr2) {
    let intermediate1 = arr1.map();
}

let ray1 = [3, 5, 1, 4, 67, 7, 3, 3, 5, 6];
let ray2 = [9, 7, 4, 5, 6, 7, 2, 3, 6, 11];

// console.log(ray1, ray2, ray3);

// Scrivere una funzione che dato un array di numeri, calcoli la media dei valori e restituisca in output un nuovo array con tutti i valori minori della media.

//   Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori della media= [3, 5, 2]

//   Variante (Abbastanza Croccante):
//   Stampare anche quanti sono i valori minori della media e quanti quelli maggiori della media.

console.log(`\n Esempio 5`);
