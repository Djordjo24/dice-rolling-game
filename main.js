const mainView = document.querySelector("#mainView");
const startBtn = document.querySelector("#startBtn");

const gameView = document.querySelector("#gameView");
const heading = document.querySelector("#heading");

const pl1Div = document.querySelector("#pl1Div");
const pl2Div = document.querySelector("#pl2Div");

const counter1 = document.querySelector("#counter1");
const counter2 = document.querySelector("#counter2");

const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

const rolle1Btn = document.querySelector("#rolle1Btn");
const rolle2Btn = document.querySelector("#rolle2Btn");

const footer = document.querySelector("#footer");

let gameState = {
  scorePl1: 0,
  scorePl2: 0,
  count1: 0,
  count2: 0,
};

startBtn.addEventListener("click", startGame);
rolle1Btn.addEventListener("click", () => rollDice(1));
rolle2Btn.addEventListener("click", () => rollDice(2));
footer.addEventListener("click", resetGame);

function startGame() {
  const player1 = prompt("Enter player 1") || "Player 1";
  const player2 = prompt("Enter player 2") || "Player 2";

  name1.innerText = player1;
  name2.innerText = player2;

  resetGame();
  mainView.style.display = "none";
  gameView.style.display = "block";
}

function rollDice(player) {
  const dice = Math.ceil(Math.random() * 6);
  const isPlayer1 = player === 1;

  if (isPlayer1) {
    gameState.scorePl1 += dice;
    gameState.count1++;
    score1.innerText = dice;
    counter1.innerText = gameState.count1;
  } else {
    gameState.scorePl2 += dice;
    gameState.count2++;
    score2.innerText = dice;
    counter2.innerText = gameState.count2;
  }

  updateUI();
  checkEndGame();
}

function updateUI() {
  heading.innerHTML = `Total score: ${gameState.scorePl1} : ${gameState.scorePl2}`;
  toggleButtons();
}

function toggleButtons() {
  const isPlayer1Turn = gameState.count1 === gameState.count2;

  rolle1Btn.disabled = !isPlayer1Turn;
  rolle2Btn.disabled = isPlayer1Turn;
  rolle1Btn.className = isPlayer1Turn ? "" : "btnDisabled";
  rolle2Btn.className = !isPlayer1Turn ? "" : "btnDisabled";
}

function checkEndGame() {
  if (gameState.count1 === 5 && gameState.count2 === 5) {
    declareWinner();
    footer.style.display = "block";
  }
}

function declareWinner() {
  rolle1Btn.disabled = true;
  rolle2Btn.disabled = true;
  rolle1Btn.className = "btnDisabled";
  rolle2Btn.className = "btnDisabled";

  if (gameState.scorePl1 > gameState.scorePl2) {
    pl1Div.style.background = "rgb(12, 156, 12)";
    heading.innerHTML += `<br>${name1.innerText} wins! 🎉`;
  } else if (gameState.scorePl2 > gameState.scorePl1) {
    pl2Div.style.background = "rgb(12, 156, 12)";
    heading.innerHTML += `<br>${name2.innerText} wins! 🎉`;
  } else {
    pl1Div.style.background = "tomato";
    pl2Div.style.background = "tomato";
    heading.innerHTML += "<br>It's a tie! 🤝";
  }
}

function resetGame() {
  gameState = { scorePl1: 0, scorePl2: 0, count1: 0, count2: 0 };

  mainView.style.display = "block";
  gameView.style.display = "none";
  footer.style.display = "none";

  score1.innerText = 0;
  score2.innerText = 0;
  counter1.innerText = 0;
  counter2.innerText = 0;
  heading.innerHTML = `Total score: 0 : 0`;

  pl1Div.style.background = "transparent";
  pl2Div.style.background = "transparent";

  toggleButtons();
}
