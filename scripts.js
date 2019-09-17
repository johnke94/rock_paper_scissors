/*function game() {
        
    var p1score = 0;
    var p2score = 0;
    var round = 0;
    var playerSelection;
    var computerSelection;

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

    function playRound (playerSelection, computerSelection) {
        var p1 = playerSelection.toLowerCase();
        var p2 = computerSelection;

        if (p1 == null) {
            return ("No player selection");
        } else if (p2 == null) {
            return ("No computer selection");
        } else if (p1 === p2) {
            return ("It's a tie!")
        } else if (p1 === "rock") {
            if (p2 === "paper") {
                p2score++;
                return ("You lose! Paper beats Rock");
            } else if (p2 === "scissors") {
                p1score++;
                return ("You win! Rock beats Scissors");
            }
        } else if (p1 === "paper") {
            if (p2 === "scissors") {
                p2score++;
                return ("You lose! Scissors beats Paper");
            } else if (p2 === "rock") {
                p1score++;
                return ("You win! Paper beats Rock");
            }
        } else if (p1 === "scissors") {
            if (p2 === "rock") {
                p2score++;
                return ("You lose! Rock beats Scissors");
            } else if (p2 === "paper") {
                p1score++;
                return ("You win! Scissors beats Paper");
            }
        }                
    }

    if (p1score > p2score) {
        return ("You win " + p1score + " to " + p2score + " !");
    } else if (p2score > p1score) {
        return ("Computer wins " + p2score + " to " + p1score + " !");
    } else {
        return ("It's a tie " + p2score + " to " + p1score + " !");
    }   

} */

var p1score = 0;
var p2score = 0;
var playerScore = document.querySelector("#playerScore");
var computerScore = document.querySelector("#computerScore");
var gameMessage = document.querySelector("#announcement");
var scoreMessage = document.querySelector("#scoreMessage");

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

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', playGame);
});



