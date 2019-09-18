/* Script to run rock, paper, scissors (RPS) */

var p1score = 0;
var p2score = 0;
var playerScore = document.querySelector("#playerScore");
var computerScore = document.querySelector("#computerScore");
var scoreMessage = document.querySelector("#scoreMessage");

/* Function to play a round of RPS with two inputs */

function playRound (playerSelection, computerSelection) {
    var p1 = playerSelection.toLowerCase();
    var p2 = computerSelection;
    

    if (p1 == null) {
        scoreMessage.textContent = "No player selection";
    } else if (p2 == null) {
        scoreMessage.textContent = "No computer selection";
    } else if (p1 === p2) {
        scoreMessage.textContent = "It's a tie!";
    } else if (p1 === "rock") {
        if (p2 === "paper") {
            p2score++;
            scoreMessage.textContent = "You lose! Paper beats Rock";
            computerScore.textContent = "Computer's score is " + p2score;
        } else if (p2 === "scissors") {
            p1score++;
            scoreMessage.textContent = "You win! Rock beats Scissors";
            playerScore.textContent = "Player's score is " + p1score;
        }
    } else if (p1 === "paper") {
        if (p2 === "scissors") {
            p2score++;
            scoreMessage.textContent = "You lose! Scissors beats Paper";
            computerScore.textContent = "Computer's score is " + p2score
        } else if (p2 === "rock") {
            p1score++;
            scoreMessage.textContent = "You win! Paper beats Rock";
            playerScore.textContent = "Player's score is " + p1score;
        }
    } else if (p1 === "scissors") {
        if (p2 === "rock") {
            p2score++;
            scoreMessage.textContent = "You lose! Rock beats Scissors";
            computerScore.textContent = "Computer's score is " + p2score
        } else if (p2 === "paper") {
            p1score++;
            scoreMessage.textContent = "You win! Scissors beats Paper";
            playerScore.textContent = "Player's score is " + p1score;            
        }
    }                
}

/* Function uses random number to choose rock, paper, scissors */

function computerPlay () {
    var rand = Math.floor(Math.random() * 3)

    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

/* Function to play a game with user input. 
Game displays a winner when one player reaches 5 points. */


function playGame(e) {
    let player = e.path[0].id;
    let computer = computerPlay();
      
    playRound(player, computer);

    if (p1score == 5 || p2score == 5) {
        if (p1score > p2score) {
            scoreMessage.textContent = "Congratulations, you won!";
        } else {
            scoreMessage.textContent = "Sorry, the computer won."
        }
    }

}

/* Function playGame is run when a button is click */

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', playGame);
});



