// 1 - Scrivere un programma che simuli una sfida ai dadi tra due giocatori. Dichiarare una variabile che rappresenti un numero N, per ogni giocatore saranno effettuati N tiri di dato ed alla fine dovra' essere decretato il vincitore (oppure un pareggio)

//crea un numero casuale tra 5-10 per i lnumero di tiri di dado
console.log(`Esempio 1`);
let n = 6; // number of rolls
let player1 = 0; // player 1
let player2 = 0; // player 2

console.log(
    `Giocatore 1. Hai ${player1} punti. \nGiocatore 2. Hai ${player2} punti.`
);

// Math.floor(Math.random() * (10 - 5) + 5);
for (let i = 1; i <= n; i++) {
    let p1roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let p2roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    player1 += p1roll;
    player2 += p2roll;
    console.log(
        `Il giocatore 1 ha tirato un ${p1roll}!\nIl giocatore 2 ha tirato un ${p2roll}!`
    );

    if (i == 1) {
        if (player1 > player2) {
            console.log(
                `Dopo ${i} tiro, il giocatore 1 ha il vantaggio con ${player1} punti sul giocatore 2 che ne ha solo ${player2}.`
            );
        } else if (player1 < player2) {
            console.log(
                `Dopo ${i} tiro, il giocatore 2 ha il vantaggio con ${player2} punti sul giocatore 1 che ne ha solo ${player1}.`
            );
        } else if (player1 == player2) {
            console.log(`Dopo ${i} tiro, il puntegio è pari a ${player1}.`);
        }
        // console.log(
        //     `Dopo ${i} tiro, il giocatore 1 ha ${player1} punti e il giocatore 2 ha ${player2} punti.`
        // );
    } else if (i > 1) {
        if (player1 > player2) {
            console.log(
                `Dopo ${i} tiri, il giocatore 1 ha il vantaggio con ${player1} punti sul giocatore 2 che ne ha solo ${player2}.`
            );
        } else if (player1 < player2) {
            console.log(
                `Dopo ${i} tiri, il giocatore 2 ha il vantaggio con ${player2} punti sul giocatore 1 che ne ha solo ${player1}.`
            );
        } else if (player1 == player2) {
            console.log(`Dopo ${i} tiri, il puntegio è pari a ${player1}.`);
        }
        // console.log(
        //     `Dopo ${i} tiri, il giocatore 1 ha ${player1} punti e il giocatore 2 ha ${player2} punti.`
        // );
    }
}

if (player1 > player2) {
    console.log(
        `Congratulazioni Giocatore 1! Con un totale di ${player1}, hai vinto!`
    );
} else if (player2 > player1) {
    console.log(
        `Congratulazioni Giocatore 2! Con un totale di ${player2}, hai vinto!`
    );
} else if (player1 == player2) {
    console.log(`Che peccato. Con un totale di ${player1}, avete pareggiato!`);
} else {
    console.log(`Si è verificato un errore.`);
}

// 2 - Scrivere un programma che dato un numero N, se il numero e' pari lo divida per due, se e' dispari lo moltiplichi * 3 e sommi 1. Ripetere questa operazione finche' il risultato finale non sia 1

console.log(`\n\nEsempio 2`);
let numbern = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
console.log(numbern);

// for (let i = 1; numbern != 1; i++) {
while (numbern != 1) {
    if (numbern % 2 == 0) {
        numbern = numbern / 2;
    } else {
        numbern = numbern * 3 + 1;
    }
    console.log(numbern);
}
