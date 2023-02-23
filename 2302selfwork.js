// Esercizi Condizioni e Cicli:
// 1 - Scrivere un programma che dato un numero intero compreso tra 1 e 7
//   visualizzi il corrispondente giorno della settimana. Sapendo che:
//     1 = lunedì
//     2 = martedì
//     3 = mercoledì
//     ...
//     7 = domenica

//   Esempi:
//     Input: numero = 6
//     Output: "Sabato"
//     Input: numero = 10
//     Output: “Errore! Giorno della settimana non valido!"

console.log(`Esempio 1`);

// let lunedi = 1;
// let martedi = 2;
// let mercoledi = 3;
// let giovedi = 4;
// let venerdi = 5;
// let sabato = 6;
// let domenica = 7;

let input = prompt(`Inserisci un numero`);

if (input == 1) {
    console.log(`Lunedì`);
} else if (input == 2) {
    console.log(`Martedì`);
} else if (input == 3) {
    console.log(`Mercoledì`);
} else if (input == 4) {
    console.log(`Giovedì`);
} else if (input == 5) {
    console.log(`Venerdì`);
} else if (input == 6) {
    console.log(`Sabato`);
} else if (input == 7) {
    console.log(`Domenica`);
} else if (input < 1 || input > 7 || typeof input != `number`) {
    console.log(`Errore! Giorno della settimana non valido!`);
}

//     2 - Scrivere un programma che dato un numero stampi la tabellina corrispondente.

console.log(`Esempio 2`);

let input2 = prompt(`Inserisci un numero`);

for (let i = 1; i <= 10; i++) {
    console.log(input2 * i);
}

//     3 - Scrivere un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.

//     Output:

//             1 2 3 4 5 6 7 8 9 10
//             11 12 13 14 15 16 17 18 19 20
//             21 22 23 24 25 26 27 28 29 30
//             31 32 33 34 35 36 37 38 39 40
//             41 42 43 44 45 46 47 48 49 50
//             51 52 53 54 55 56 57 58 59 60
//             61 62 63 64 65 66 67 68 69 70
//             71 72 73 74 75 76 77 78 79 80
//             81 82 83 84 85 86 87 88 89 90
//             91 92 93 94 95 96 97 98 99 100

//   Per andare a capo usa ‘\n’   ←-indizio importantissimo!!

console.log(`Esempio 3`);

for (let i = 1; i <= 100; i += 10) {
    console.log(
        `${i}, ${i + 1}, ${i + 2}, ${i + 3}, ${i + 4}, ${i + 5}, ${i + 6}, ${
            i + 7
        }, ${i + 8}, ${i + 9}\n`
    );
}

//   4 - Scrivere un programma che stampi i numeri da 1 a 100 con una variazione. Al posto di ogni numero multiplo di 3 dovra' stampare la stringa 'Fizz', ad ogni multiplo di 5 la stringa 'Buzz' e ad ogni multiplo di 15 la stringa 'FizzBuzz'

console.log(`Esempio 4`);

// let fizz = 3;
// let buzz = 5;
// let fizzbuzz = 15;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz`);
    } else if (i % 3 == 0) {
        console.log(`Fizz`);
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
    } else {
        console.log(i);
    }
}

//   5 - Scrivere il recap
