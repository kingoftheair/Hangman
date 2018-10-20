//List of words to use in game
var words = ["cowboy","rifle", "horse","gunslinger", "train","spurs","boots","bandit","cattle","tobacco", "plains","robbery","west","despair","law","gin","coffee", "outlaw"];

//List of variables used
var word;
var answer;
var wins = 0;
var losses = 0;
var lettersAlready = [];
var guesses;
var i = 0;
var wrongAnswer = [];

//resets the game back to beginning state
function resetGame(event) {

//Generates a rando word
word = words[Math.floor(Math.random() * words.length)];

answer = [];
lettersUsed = []
guesses = 10

console.log(word);
for (var i = 0; i < word.length; i++) {
    answer.push("_");

}


    document.getElementById("lettersAlready").textContent = wrongAnswer.join();
    document.getElementById("wins").textContent = wins;
    document.getElementById("currentWord").textContent = answer.join(" ");
    document.getElementById("guessRemain").textContent = guesses;
    document.getElementById("lettersAlready").textContent = lettersAlready.join(", ");
}


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    lettersAlready.push(" " + userGuess);
    
    
    var letterFound = false;
    for (var i = 0; i < word.length; i++) {

        if (word[i] === userGuess) {
            answer[i] = word[i];
            letterFound = true;

        }

    }

    if (letterFound === false && answer.includes(userGuess)) {
        lettersUsed.push(userGuess);
        guesses--;
    }

    if(word[i] !== userGuess) {
        wrongAnswer.push(" " + userGuess);
        document.getElementById("lettersAlready").textContent = wrongAnswer;
        guesses--;
        document.getElementById("guessRemain").textContent = guesses;
    }

    if (guesses === 0) {
        losses++;
        lettersAlready = [];
        document.getElementById("losses").textContent = losses;
        alert("You lost what you had in the Wild West");
        resetGame();
    }

    if (answer.join('') === word) {
        wins++;
        lettersAlready = [];
        alert("You Win in the Wild West");
        setTimeout(resetGame, 1200);
    
        while(i<word.length){

            console.log(word[i],userGuess)
            if (word[i]===userGuess){
              answer[i]===userGuess;
              document.getElementById("currentWord").textContent = answer;
              console.log("hi",answer);
            }
            i++ 
          }
    }


    document.getElementById("currentWord").textContent = answer.join(" ");
    document.getElementById("lettersAlready").textContent = lettersAlready.join(", ");
    document.getElementById("guessRemain").textContent = guesses;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    
     

}


document.addEventListener("DOMContentLoaded", resetGame);