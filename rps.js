let userChoice = "";

const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const outcomeDisplay = document.getElementById("outcome");

document.getElementById("rock").addEventListener("click", () => {
  userChoice = "rock";
  playGame();
});

document.getElementById("paper").addEventListener("click", () => {
  userChoice = "paper";
  playGame();
});

document.getElementById("scissors").addEventListener("click", () => {
  userChoice = "scissors";
  playGame();
});

function playGame() {
  userChoiceDisplay.innerHTML = "You chose: " + userChoice;
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.innerHTML = "Computer chose: " + computerChoice;
  const result = getResult(userChoice, computerChoice);
  outcomeDisplay.innerHTML = result;
  handleImage(result);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function handleImage(result) {
  const imageContainer = document.getElementsByClassName("result")[0];

  // Remove any existing image
  const existingImage = document.getElementById("win-image");
  if (existingImage) {
    existingImage.remove();
  }

  if (result === "You win!") {
    const oImg = document.createElement("img");
    oImg.setAttribute("id", "win-image");
    oImg.setAttribute(
      "src",
      "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-neon-you-win-game-png-image_2966654.jpg"
    );
    oImg.setAttribute("alt", "you win image");
    oImg.setAttribute("height", "50px");
    oImg.setAttribute("width", "50px");
    imageContainer.appendChild(oImg);
  }
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
}
