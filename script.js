let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const icons = document.querySelectorAll(".icons");

const userchoicepara = document.querySelector("#user-score");
const computerchoicepara = document.querySelector("#computer-score");
const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userchoicepara.innerText = userScore;
    msg.innerText = `You Win!${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.textAlign = "center";
  } else {
    computerScore++;
    computerchoicepara.innerText = computerScore;
    msg.innerText = `You Lose!${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  let userWin = true;
  if (userChoice == computerChoice) {
    msg.innerText = "Match is draw!Play again";
    msg.style.backgroundColor = "rgb(30,5,252)";
  } else if (userChoice === "rock") {
    //paper,scissors
    userWin = computerChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    //rock,scissors
    userWin = computerChoice === "rock" ? true : false;
  } else {
    //userChoice="scissors"
    //rock,paper
    userWin = computerChoice === "rock" ? false : true;
  }
  showWinner(userWin, userChoice, computerChoice);
};

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const userChoice = icon.getAttribute("id");
    playGame(userChoice);
  });
});
