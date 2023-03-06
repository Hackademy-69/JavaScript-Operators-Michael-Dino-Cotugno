// Esercizi di riscaldamento:
// - Scrivere una funzione che prenda in ingresso una stringa e mi restituisca solo la prima parola
console.log("Esercizio di riscaldamento 1");
function firstWord(str) {
    let word = str.split(" ");
    return word[0];
}
console.log(firstWord("My name is Johnny 5!"));

// - Scrivere una funzione che prenda in ingresso un numero N e mi restituisca un array contenente N numeri casuali (compresi tra 1 e 10) ordinati in ordine crescente
console.log("Esercizio di riscaldamento 2");
function randomOrdered(n) {
    let numbers = [];
    for (let i = 0; i <= n; i++) {
        numbers.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    return numbers.sort((a, b) => a - b);
}
console.log(randomOrdered(8));

// - Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array solo con i numeri maggiori di 10
console.log("Esercizio di riscaldamento 3");
function moreThan10(arr) {
    return arr.filter((el) => {
        if (el >= 10) {
            return el;
        }
    });
}
console.log(moreThan10([1, 2, 34, 5, 67, 8, 90]));

// Esercizi intermedi:
// - Scrivere una funzione che prenda in ingresso un array di stringhe e mi restituisca un nuovo array con le stesse stringhe ma in Uppercase
console.log("Esercizio intermedi 1");
function makeUpperCase(str) {
    return str.map((el) => el.toUpperCase());
}
console.log(
    makeUpperCase([
        "Hi my name is",
        "what?",
        "my name is",
        "who?",
        "my name is",
        "slim shady",
    ])
);

// - Realizzare un oggetto che rappresenti una persona. Questo oggetto dovra' avere almeno 3 proprieta' che rappresentino un nome, un cognome e un'eta'. Realizzare un metodo che permetta alla persona di presentarsi.
// Es. Ciao! Il mio nome e' Matteo Sisto ed ho 36 anni
console.log("Esercizio intermedi 2");
let person = {
    nome: "Michael Dino",
    cognome: "Cotugno",
    eta: 39,
    // details: [{ nome: "Michael Dino", cognome: "Cotugno", eta: 39 }],
    intro: function () {
        console.log(
            `Ciao! Il mio nome è ${this.nome} ${this.cognome} ed ho ${this.eta} anni`
        );
        // return `Ciao! Il mio nome è ${this.nome} ${this.cognome} ed ho ${this.eta} anni`;
    },
};
person.intro();
// console.log(person.intro());

// - Scrivere una funzione che prenda in ingresso un array di dati e per ogni dato mi stampi in console il suo tipo
console.log("Esercizio intermedi 3");
function typeofPrinter(arr) {
    return arr.forEach((el) => console.log(typeof el));
}
typeofPrinter([3, "ciao", null, NaN, "ajh", 87]);

// Esercizi che si vabbe' ciaone proprio:
// - Realizzare un oggetto che rappresenti un astuccio di pennarelli. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di colori sotto forma di stringa. Aggiungere un metodo che ci permetta di rimuovere un colore ed un metodo che ci permetta di aggiungere un colore ma eviti le duplicazioni
// Es.1     colors : ['rosso', 'verde', 'blu']
//  astuccio.addColor('giallo')
//  colors : ['rosso', 'verde', 'blu', 'giallo]
// Es.2     colors : ['rosso', 'verde', 'blu']
//  astuccio.addColor('rosso')
//  Spiacente colore gia' presente nell'astuccio
console.log("Esercizi che si vabbe' ciaone proprio 1");
let astuccio = {
    colors: ["rosso", "verde", "blu"],
    addColor: function (color) {
        return this.colors.includes(color)
            ? console.log("This color is already in the list")
            : this.colors.push(color);
    },
    removeColor: function (color) {
        return this.colors.includes(color)
            ? this.colors.splice(this.colors.indexOf(color), 1)
            : console.log("This color is not in the list");
    },
};
astuccio.addColor("viola");
console.log(astuccio.colors);
astuccio.removeColor("viola");
console.log(astuccio.colors);

// - Scrivere una funzione che prenda in ingresso un array di oggetti, ciascun oggetto dovra' rappresentare un contatto telefonico con le proprieta' nome e numero. La funzione ci dovra' restituire un nuovo array con soltanto i nomi dei contatti
// Es.   input = [
//                          {name : 'Sidious' , number : 33333333} ,
//                          {name : 'Maul' , number : 33344444}
//                          }

//           output = ['Sidious', 'Maul']
console.log("Esercizi che si vabbe' ciaone proprio 2");
let contatti = [
    { name: "Sidious", number: 33333333 },
    { name: "Maul", number: 33344444 },
];

function onlyNames(arr) {
    return arr.map((el) => el.name);
    // .filter() only works on arrays, not objects
    // return arr.filter((el) => el.name);
}
console.log(contatti);
console.log(onlyNames(contatti));

//           Esercizi Manipolazione del DOM:
// - Scrivere un paragrafo con la scritta : 'Odio JavaScript' ed un bottone. Al click sul bottone la scritta dovrà essere sostituita con: 'Amo JavaScript!!!'
console.log("Esercizi Manipolazione del DOM 1");
let JSchng = document.querySelector(".JSchng");
let oddio = document.querySelector(".oddio");
JSchng.addEventListener("click", () => {
    oddio.innerHTML = "Amo JavaScript!!";
});

// - Dato un array di nomi, fare in modo di creare una ul contenente un li PER OGNI nome che mi permetta di visualizzarli da browser
console.log("Esercizi Manipolazione del DOM 2");

let names = ["Michael", "Nicola", "Laetitia", "Annalisa"];
let nameslist = document.querySelector(".nameslist");

names.forEach((name) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = name;
    nameslist.appendChild(listItem);
});

// - Realizzare 3 paragrafi e 3 bottoni in HTML. Intervenendo con JS fare in modo che cliccando sul primo bottone cambino i colori di tutti i paragrafi e tornino come prima, al click sul secondo bottone i paragrafi dovranno essere in grassetto e tornare normali e l'ultimo bottone dovra' far scomparire e riapparire i paragrafi
console.log("Esercizi Manipolazione del DOM 3");
let pToModify = document.querySelectorAll(".pToModify");
let btnTextColor = document.querySelector(".btnTextColor");
let btnBold = document.querySelector(".btnBold");
let btnDisappear = document.querySelector(".btnDisappear");

btnTextColor.addEventListener("click", () => {
    pToModify.forEach((parag) => {
        parag.classList.toggle("pTextColor");
    });
});
btnBold.addEventListener("click", () => {
    pToModify.forEach((parag) => {
        parag.classList.toggle("pBold");
    });
});
btnDisappear.addEventListener("click", () => {
    pToModify.forEach((parag) => {
        parag.classList.toggle("pDisappear");
    });
});

// Esercizio che si vabbe' Matteo ma tu ci vuoi male (usate quello che sapete dei colori in CSS):
// - Realizzare un div in HTML, dargli un'altezza di 300px, una width di 300px e un bordo 2px solid black in css. Sotto il div realizzare un button. Intervenendo con JS fare in modo che al click sul bottone il background del div cambi con un colore casuale
console.log("Esercizio che si vabbe' Matteo ma tu ci vuoi male");

let toFill = document.querySelector(".toFill");
let btnBackFill = document.querySelector(".btnBackFill");

btnBackFill.addEventListener("click", () => {
    toFill.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * (255 - 0) + 0
    )},${Math.floor(Math.random() * (255 - 0) + 0)},${Math.floor(
        Math.random() * (255 - 0) + 0
    )})`;
});
