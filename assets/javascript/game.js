window.onload = function () {
    // my variables
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guessesleft = 10;
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var guesses = [];

    function randomletter() {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    document.onkeypress = function (event) {
        var userGuess = event.key;
        console.log('user guess: ', userGuess);
        console.log('computer choice', computerChoice);
        if (userGuess === computerChoice) {
            wins++;
            guessesleft = 10;
            guesses = [];
            console.log('win!');
            computerChoice = randomletter();
        } else {
            guessesleft--;
        }

        if (guessesleft === 0) {
            losses++;
            guessesleft = 10;
            guesses = [];
            computerChoice = randomletter();
        }

        if (guesses.indexOf(userGuess) >= 0) {
            guesses = [];
        } else {
            guesses.push(userGuess);
            document.getElementById('guesses').innerHTML = guesses
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guessesleft').innerHTML = "Guesses left: " + guessesleft;
        document.getElementById('guesses').innerHTML = "Guesses: " + guesses;

    }


}