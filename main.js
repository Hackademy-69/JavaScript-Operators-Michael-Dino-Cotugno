// Esercizi Lezione JS 02:
// - Scrivere un programma che mi stampi in console il numero piu' grande tra i seguenti :  3, 244, 71, 59, 100
console.log(Math.max(3, 244, 71, 59, 100));

// - Scrivere un programma che dati i numeri precedenti mi stampi in console per ciascuno di loro "true" se ' pari e "false" se e' dispari
console.log(3 % 2 == 0);
console.log(244 % 2 == 0);
console.log(71 % 2 == 0);
console.log(59 % 2 == 0);
console.log(100 % 2 == 0);

// %
// 3%2 = 1
// 48%2 = 0

// - Scrivere un programma che utilizzando ognuno di questi dati una volta per ciascuno (0, NaN, 'ciao', false) attraverso gli operatori di confronto e logici mi restituisca un true

// falsy:
// 0, NaN, false
// truthy:
// 'ciao'

// &&: restituisce il primo falsy, se non lo trova, l'utlimo truthy
// ||: restituisce il primo thruthy, se non lo trova, l'utlimo falsy

// console.log((0 < "ciao" && NaN) || false);
// console.log((false && NaN) || false);
// console.log(false || false);
// console.log(false);

// console.log((0 < 2 && NaN) || false);
// console.log((true && NaN) || false);
// console.log(NaN || false);
// console.log(false);

// console.log(0 < 2 || NaN || false);
// console.log(true || NaN || false);
// console.log(true || false);
// console.log(true);

// console.log(0 || "ciao" || NaN || false);
// console.log(true || NaN || false);
// console.log(true || false);
// console.log(true);

// console.log((0 && "ciao") || NaN || false);
// console.log(true || NaN || false);
// console.log(true || false);
// console.log(true);

console.log((0 && "ciao") || NaN < false);
console.log(true || false);
console.log(true);
