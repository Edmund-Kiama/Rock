---

# Rock-Paper-Scissors Game

A simple yet interactive **Rock-Paper-Scissors** game built with JavaScript, HTML, and CSS. This project showcases JavaScript fundamentals, including conditional logic, DOM manipulation, and basic functions, while providing an engaging user experience.

---

## **Features**

- **Play the classic game**: Rock, Paper, Scissors against a computer opponent.
- **Dynamic score tracking**: Player and computer scores are updated in real-time.
- **Random computer choices**: The computer selects its move randomly each round.
- **Feedback for results**: Win, lose, or tie results are displayed with clear visual indicators (color-coded messages).
- **Responsive design**: Works well across various screen sizes.

---

## **How It Works**

### **Game Rules**
- **Rock beats Scissors** but loses to Paper.
- **Paper beats Rock** but loses to Scissors.
- **Scissors beat Paper** but lose to Rock.
- If both the player and the computer choose the same item, it's a tie.

---

### **Code Overview**

#### **1. HTML Elements**
The game uses the following key elements:
- **Player and Computer Choices**: Displays what each player picked.
- **Result Display**: Indicates if the player won, lost, or tied the round.
- **Score Display**: Tracks and shows the scores of the player and computer.

#### **2. JavaScript Logic**

1. **Array of Choices**:
   ```javascript
   const choices = ["rock", "papper", "scissors"];
   ```
   - Contains the possible moves: "rock", "papper", and "scissors".

2. **DOM Elements**:
   ```javascript
   const playerDisplay = document.getElementById("playerDisplay");
   const computerDisplay = document.getElementById("computerDisplay");
   const resultDisplay = document.getElementById("resultDisplay");
   const playerScoreDisplay = document.getElementById("playerScoreDisplay");
   const computerScoreDisplay = document.getElementById("computerScoreDisplay");
   ```
   - These elements dynamically display the game's choices, results, and scores.

3. **Player's Choice Functionality**:
   ```javascript
   function playGame(playerChoice) {
       const computerChoice = choices[Math.floor(Math.random() * 3)];
       ...
   }
   ```
   - **Input**: The player selects "rock", "papper", or "scissors".
   - **Output**: The computer generates a random move, and the game determines the result.

4. **Game Logic**:
   ```javascript
   if (playerChoice === computerChoice) {
       result = "IT'S A TIE!";
   } else {
       switch (playerChoice) {
           case "rock":
               result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
               break;
           case "papper":
               result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
               break;
           case "scissors":
               result = (computerChoice === "papper") ? "YOU WIN!" : "YOU LOSE!";
               break;
       }
   }
   ```
   - Compares the player's choice with the computer's choice to determine the outcome.

5. **Result Display**:
   ```javascript
   resultDisplay.textContent = result;
   resultDisplay.classList.remove("green", "red");

   switch (result) {
       case "YOU WIN!":
           resultDisplay.classList.add("green");
           playerScore++;
           break;
       case "YOU LOSE!":
           resultDisplay.classList.add("red");
           computerScore++;
           break;
   }
   ```
   - Updates the display dynamically and applies color-coded feedback:
     - Green for a win.
     - Red for a loss.

---


## **Technologies Used**
- **HTML**: For structuring the web page.
- **CSS**: For styling the UI and making it visually appealing.
- **JavaScript**: For implementing the game logic and interactivity.

---

## **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/Davincii254/Rock.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Rock
   ```

3. Open the `index.html` file in a browser:
   - Double-click `index.html` in your file explorer, or
   - Use a live server extension in your code editor (e.g., Visual Studio Code).

---

## **File Structure**

```
Rock-Paper-Scissors/
│
├── index.html       # The main HTML file
├── style.css        # Styling for the game
├── script.js        # Game logic written in JavaScript
└── README.md        # Project documentation
```

---

## **Future Enhancements**
- Add a "Best of 5" or "Best of 10" mode.
- Include sound effects for each round.
- Create animations for player and computer choices.

---

## **Author**
- **Victor Kuria**
- **[GitHub Profile](https://github.com/Davincii254)**

---
