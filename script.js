// Array of possible choices for the game
const choices = ["rock", "papper", "scissors"];

// HTML elements to display game information
const playerDisplay = document.getElementById("playerDisplay"); // Displays the player's choice
const computerDisplay = document.getElementById("computerDisplay"); // Displays the computer's choice
const resultDisplay = document.getElementById("resultDisplay"); // Displays the game result (win, lose, or tie)
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); // Displays the player's score
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); // Displays the computer's score

// Variables to keep track of scores
let playerScore = 0; // Player's score
let computerScore = 0; // Computer's score

/**
 * Function to play the game when the player makes a choice.
 * @param {string} playerChoice - The choice made by the player ("rock", "papper", or "scissors").
 */
function playGame(playerChoice) {
    // Computer randomly selects a choice from the 'choices' array
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Initialize result to store the outcome of the game
    let result = "";

    // Compare player and computer choices to determine the result
    if (playerChoice === computerChoice) {
        // Case when both choices are the same
        result = "IT'S A TIE!";
    } else {
        // Determine the winner based on the rules of Rock-Paper-Scissors
        switch (playerChoice) {
            case "rock":
                // Rock beats scissors, loses to paper
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "papper":
                // Paper beats rock, loses to scissors
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                // Scissors beat paper, lose to rock
                result = (computerChoice === "papper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // Update the display with the player's and computer's choices
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`; // Show player's choice
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`; // Show computer's choice

    // Update the result display
    resultDisplay.textContent = result; // Show the game result
    resultDisplay.classList.remove("green", "red"); // Reset result color classes

    // Update scores and result display based on the outcome
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("green"); // Add green color for a win
            playerScore++; // Increment player's score
            playerScoreDisplay.textContent = playerScore; // Update player's score display
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("red"); // Add red color for a loss
            computerScore++; // Increment computer's score
            computerScoreDisplay.textContent = computerScore; // Update computer's score display
            break;
        // No changes to score for a tie
    }
}
