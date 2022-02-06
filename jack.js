let cards = [];
let sum = 0;
let winner = false;
let isAlive = false;
let message = " ";
let mess_ = document.getElementById("mes");
let sum_El = document.getElementById("sumEl");
let card_El = document.getElementById("cardEl");

let player = {
  name: "Winner",
  points: 150,
};
let playerEl = document.getElementById("playerName");
playerEl.textContent = player.name + " :$" + player.points;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  sum_El.textContent = "Sum :" + sum;
  card_El.textContent = "Cards :";

  for (let i = 0; i < cards.length; i++) {
    card_El.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you one to draw one more card, then click on New Card";
  } else if (sum === 21) {
    message = " You've got black jacks, Hurray!!!!";
    winner = true;
  } else {
    message = "Your out of game, Better luck next time";
    isAlive = false;
  }
  mess_.textContent = message;
}
function newCard() {
  if (isAlive === true && winner === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
