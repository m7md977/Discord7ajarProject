/** @format */

// Cache DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const reset_button = document.getElementById("reset");
const choices_div = {
  r: document.getElementById("r"),
  p: document.getElementById("p"),
  s: document.getElementById("s"),
};
const computerChoiceImage = document.getElementById("computerChoiceImage");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Event Listeners
choices_div.r.addEventListener("click", () => game("r"));
choices_div.p.addEventListener("click", () => game("p"));
choices_div.s.addEventListener("click", () => game("s"));
reset_button.addEventListener("click", reset);

function game(userChoice) {
  const computerChoice = getComputerChoice();
  setComputerChoiceImage(computerChoice); // Add this line to set the image for computer's choice
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}

function reset() {
  userScore = computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = "Let's play!";
}
function setComputerChoiceImage(choice) {
  const images = {
    r: "/assets/rock.png",
    p: "/assets/paper.png",
    s: "/assets/scissors.png",
  };
  computerChoiceImage.src = images[choice];
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
  return { r: "Rock", p: "Paper", s: "Scissors" }[letter];
}

function displayResult(userChoice, computerChoice, message) {
  const smallUserWord = '<sub"> </sub>';
  const smallCompWord = '<sub"> </sub>';
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} ${message} ${convertToWord(
    computerChoice
  )}${smallCompWord}.`;
  choices_div[userChoice].classList.add(
    message === "beats"
      ? "green-glow"
      : message === "loses to"
      ? "red-glow"
      : "gray-glow"
  );
  setTimeout(
    () =>
      choices_div[userChoice].classList.remove(
        message === "beats"
          ? "green-glow"
          : message === "loses to"
          ? "red-glow"
          : "gray-glow"
      ),
    300
  );
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.textContent = userScore;
  displayResult(userChoice, computerChoice, "beats");
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.textContent = computerScore;
  displayResult(userChoice, computerChoice, "loses to");
}

function draw(userChoice, computerChoice) {
  displayResult(userChoice, computerChoice, "equals");
}
