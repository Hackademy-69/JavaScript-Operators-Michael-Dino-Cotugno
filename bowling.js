// Voglio creare un applicativo che simuli una sala da bowling e che mi permetta di effettuare una partita tra piu' giocatori. Sfruttero', quindi, un oggetto che abbia delle proprieta' e dei metodi. La proprieta' principale sara' quella di avere un elenco di giocatori. I metodi, invece, dovranno consentirmi di calcolare il punteggio di ogni giocatore su 10 tiri e di decretare il vincitore della partita.

let bowling = {
    players: [],

    setFinalScore: function () {
        this.players.forEach((giocatore) => {
            giocatore.finalScore = giocatore.scores.reduce((acc, n) => acc + n);
        });
    },

    addPlayer: function (nome, cognome) {
        this.players.push({ name: nome, surname: cognome, scores: [] });
    },

    setScores: function () {
        this.players.forEach((giocatore) => {
            for (let i = 1; i <= 10; i++) {
                giocatore.scores.push(
                    Math.floor(Math.random() * (10 - 0 + 1) + 0)
                );
            }
        });
    },

    setWinner: function () {
        this.setScores();
        this.setFinalScore();
        this.players.sort((a, b) => b.finalScore - a.finalScore);
        let winner = this.players[0];
        if (winner.finalScore > this.players[1].finalScore) {
            console.log(
                `Il vincitore della partita e' ${winner.name} ${winner.surname} che ha totalizzato un punteggio finale di: ${winner.finalScore}`
            );
        } else {
            console.log(
                `Questa partita non ha vincitori perche' i primi due giocatori hanno pareggiato!`
            );
        }
    },
};

bowling.addPlayer("Alin", "Draghia");
bowling.addPlayer("Cristian", "Fasano");
bowling.addPlayer("Carmine", "Armenante");
bowling.addPlayer("Badr", "Chaouki");
bowling.addPlayer("Patrizio", "Lepore");
bowling.addPlayer("Serena", "Donadio");
bowling.setWinner();
console.log(bowling);
