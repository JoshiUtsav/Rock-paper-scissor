let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_board_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const Paper_div = document.getElementById("p");
const Scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToward(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function Win(user, Computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToward(
    user
  )}${smallUserWord}  beats   ${convertToward(
    Computer
  )}${smallCompWord}  .YOU WIN `;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}

function Lose(user, Computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToward(
    user
  )}${smallUserWord}  loses to   ${convertToward(
    Computer
  )}${smallCompWord}  .You Lost... `;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}

function Draw(user, Computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToward(
    user
  )}${smallUserWord}  Nobody Wins   ${convertToward(
    Computer
  )}${smallCompWord}  . Draw `;
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      Win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      Lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      Draw(userChoice, ComputerChoice);
      break;
  }
}

game("c");

function main() {
  rock_div.addEventListener("click", () => game("r"));
  Paper_div.addEventListener("click", () => game("p"));
  Scissors_div.addEventListener("click", () => game("s"));
}

main();
