const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const reset_button = document.getElementById("reset");
const scissorsSound = new Audio("assets/SoundEffects/Scissors.wav");
const rockSound = new Audio("assets/SoundEffects/Rock.wav");
const paperSound = new Audio("assets/SoundEffects/Paper.mp3");
const winSound = new Audio("assets/SoundEffects/Win.wav");
const loseSound = new Audio("assets/SoundEffects/Lose.wav");

rockSound.volume = 0.5; // 50% volume
paperSound.volume = 0.5;
scissorsSound.volume = 0.5;
winSound.volume = 0.2;
loseSound.volume = 0.3;

const choices = {
  r: {
    element: document.getElementById("r"),
    name: "Rock",
    image: "/rock/assets/rock.png",
    sound: rockSound,
  },
  p: {
    element: document.getElementById("p"),
    name: "Paper",
    image: "/rock/assets/paper.png",
    sound: paperSound,
  },
  s: {
    element: document.getElementById("s"),
    name: "Scissors",
    image: "/rock/assets/scissors.png",
    sound: scissorsSound,
  },
};

const computerChoiceImage = document.getElementById("computerChoiceImage");
let userScore = 0;
let computerScore = 0;

Object.values(choices).forEach((choice) => {
  choice.element.addEventListener("click", () => game(choice));
});

reset_button.addEventListener("click", reset);

function game(userChoice) {
  userChoice.sound.play(); // Play the sound for the user's choice immediately

  setTimeout(() => {
    const computerChoice = getComputerChoice();
    computerChoiceImage.src = computerChoice.image;
    const outcome = determineOutcome(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, outcome);
  }, 1000); // 1000 milliseconds (1 second) delay
}

function reset() {
  userScore = computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = "Let's play!";
}

function getComputerChoice() {
  const choiceKeys = Object.keys(choices);
  return choices[choiceKeys[Math.floor(Math.random() * choiceKeys.length)]];
}

function determineOutcome(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  const userKey = getKeyByValue(choices, userChoice);
  const compKey = getKeyByValue(choices, computerChoice);
  if (
    (userKey === "r" && compKey === "s") ||
    (userKey === "p" && compKey === "r") ||
    (userKey === "s" && compKey === "p")
  )
    return "win";
  return "lose";
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
function updateUI(userChoice, computerChoice, outcome) {
  let message;
  switch (outcome) {
    case "win":
      userScore++;
      userScore_span.textContent = userScore;
      message = `${userChoice.name} beats ${computerChoice.name}. You won!`;
      winSound.play();
      break;
    case "lose":
      computerScore++;
      computerScore_span.textContent = computerScore;
      message = `${userChoice.name} loses to ${computerChoice.name}. You lost!`;
      loseSound.play();
      break;
    default:
      message = `${userChoice.name} equals ${computerChoice.name}. It's a draw!`;
  }
  result_p.textContent = message;
}
function adjustVolume(value) {
  const volumeLevel = parseFloat(value); // Convert string to float
  rockSound.volume = volumeLevel;
  paperSound.volume = volumeLevel;
  scissorsSound.volume = volumeLevel;
  winSound.volume = volumeLevel;
  loseSound.volume = volumeLevel;
}
