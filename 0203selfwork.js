// Esercizi di riscaldamento:
// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di dati e mi restituisca la stringa Mi hai passato N dati dove N rappresenta il numero di elementi che sono stati passati
// Es. 1   numeroDati(  'Millenium Falcon', 66, false);       output = Mi hai passato 3 dati

console.log(`Es.1`);
function numeroDati(...elements) {
    console.log(`Mi ha passato ${elements.length} dati.`);
}
numeroDati(`ere`, 3, false, null);

// - Scrivere una funzione che prenda in ingresso una stringa e me la restituisca tutta in maiuscolo
// Es. input = 'may the force be with you'       output = 'MAY THE FORCE BE WITH YOU'

console.log(`Es.2`);
function capitalize(str) {
    console.log(str.toUpperCase());
}
capitalize(`hi, my name is`);

// - Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due inviati ma capovolto
// Es. arr1 = [1,2,3]   arr2 = [4,5,6]    output = [6,5,4,3,2,1]

console.log(`Es.3`);
let ray1 = [1, 2, 3];
let ray2 = [4, 5, 6];

function arrAdd(arr1, arr2) {
    return arr1.concat(arr2).reverse();
}
console.log(arrAdd(ray1, ray2));

// - Scrivere una funzione che prenda in ingresso un array contenente qualsiasi dato e mi restituisca un nuovo array contenente soltanto numeri
// Es. array = [1, 'due', true, 4]     output = [1, 4]

console.log(`Es.4`);
// function onlyNum(data) {
//     inter = [];
//     data.map((datum) => {
//         if (typeof datum == "number") {
//             inter.push(datum);
//         }
//     });
//     return inter;
// }
function onlyNums(data) {
    return data.filter((datum) => typeof datum === "number");
}
let rayEx4 = [1, "due", true, 4, 5, "asad", NaN, 999, [1, 2, 3]];
// console.log(onlyNum(rayEx4));
console.log(onlyNums(rayEx4));

// Esercizi intermedi:
// - Scrivere una funzione che prenda in ingresso un numero e mi stampi in console il conto alla rovescia dal numero scelto fino a 1
// Es. input = 5    output = 5             4             3           2             1
//      (indizio: ricordate l'operatore di decremento)

console.log(`Es.5`);
function countdown(count) {
    for (let i = count; i > 0; i--) {
        console.log(i);
    }
    console.log(`Buon anno!`);
}
countdown(8);

// - Scrivere una funzione che prenda in ingresso un qualsiasi quantitativo di numeri e mi restituisca un array con tutti i numeri dispari maggiori di 10
// Es. moreThanTen(1, 5, 6, 8, 10, 11, 13, 16, 22)     output = [11, 13]

console.log(`Es.6`);
function overTen(...numbers) {
    return numbers.filter((number) => number > 10 && number % 2 != 0);
}
console.log(overTen(1, 5, 6, 8, 10, 11, 13, 16, 22));

// - Scrivere una funzione che prenda in ingresso un nome, un cognome ed una professione e mi restituisca un oggetto che abbia queste proprieta'
// Es. createPerson('Qui-Gon' , 'Jin', 'Maestro Jedi')    output = {name : 'Qui-Gon' , surname: 'Jin', job: 'Maestro Jedi'}

console.log(`Es.7`);
function person(nome, cognome, lavoro) {
    return (personalData = { name: nome, surname: cognome, job: lavoro });
}
console.log(person(`Michael`, `Cotugno`, `Engineer`));

// - Scrivere una funzione che prenda in ingresso un array e mi restituisca un nuovo array che contenga solo le stringhe messe in ordine alfabetico

console.log(`Es.8`);
function alphabetizedStrings(arr) {
    // let strings = arr.filter((str) => typeof str == "string");
    // return strings.sort();
    return arr.filter((str) => typeof str == "string").sort();
}
let randomString = [
    1,
    `sdad`,
    12,
    NaN,
    `jahjahd`,
    `braoih`,
    false,
    `hello`,
    `patata`,
];
console.log(alphabetizedStrings(randomString));

// Esercizi che il cervello se ne va in sciopero:
// - Scrivere un oggetto che mi permetta di simulare una sala giochi. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di giocatori ed ogni giocatore sara' a sua volta un oggetto con una proprieta' name ed una proprieta' score: []. Scrivere dei metodi che vi permettano di simulare una sfida ai dadi e se ne decreti il vincitore

console.log(`Es.9`);

let: gameRoom = {
    players: [],

    addPlayers: function (playerName, playerScore) {
        this.players.push({ name: playerName, score: playerScore });
    },

    setScore: function () {},

    whoWon: function () {
        this.players.sort((a, b) => b.score - a.score);
        let winner = this.players[0];
        console.log(
            `Il vincitore è ${winner.name}, con un punteggio di ${winner.score}`
        );
    },
};

gameRoom.addPlayers(`Michael`, 38);
gameRoom.addPlayers(`Alin`, 33);
gameRoom.addPlayers(`Elison`, 48);
gameRoom.addPlayers(`Badr`, 31);
gameRoom.addPlayers(`Giancarlo`, 32);
gameRoom.whoWon();
console.log(gameRoom);
