const suits = ["hearts", "diamonds", "spades", "clubs"];
const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "kings", "queen", "jack"];

class Card {
  constructor(value, suit, id) {
    this.value = value;
    this.suit = suit;
    this.id = id;
  }

  printCard() {

    console.log("Card ID:" + this.id);
    console.log("Card Value:" + this.value);
    console.log("Card Suit:" + this.suit);
    console.log("______________________");
  }
}

class Player {
  constructor(wallet,name) {
    this.wallet = wallet;
    this.score = 0;
    this.hand = new Array();
    this.hiddenHand = new Array();
    this.name=name;
  }

  addToHand(card) {
    this.hand.push(card);

    if (
      card.value != "kings" &&
      card.value != "queen" &&
      card.value != "jack" &&
      card.value != "ace"
    ) {
      this.score = this.score + card.value;
    }

    if (
      card.value === "kings" ||
      card.value === "queen" ||
      card.value === "jack"
    ) {
      this.score = this.score + 10;
    }

    if (card.value === "ace") {
      if (this.score < 11) {
        this.score = this.score + 11;
      } else if (this.score >= 11) {
        this.score = this.score + 1;
      }
    }
  }
  addToHidden(card){
    this.hiddenHand.push(card);
  }

  getScore() {
    if (this.score === 21) {
      console.log(this.name+" WIN!");
   
    }

    if (this.score > 21) {
      console.log(this.name+"BUSTED");
    }
    return this.score;
  }
  printHand() {
    for (var i = 0; i < this.hand.length; i++) {
      this.hand[i].printCard();
    }
  }
}

/*  */
function createDeckOfCards() {
  const deckSize = 51;
  var cards = [];
  var i = 0;

  for (j = 0; j <= 3; j++) {
    var suit = suits[j];
    for (k = 0; k <= 12; k++) {
      var value = values[k];
      cards.push(new Card(value, suit, i));
      i++;
    }
  }

  return cards;
}

function getRandomCard(deck) {
  var rndmCard = deck[Math.floor(Math.random() * deck.length)];
  return deck.pop(rndmCard);
}

function shuffle(deckOfCards) {
  let cardsDeck = deckOfCards;
  let shuffledDeck = cardsDeck.sort(function () {
    return Math.random() - 0.5;
  });

  return shuffledDeck;
}

//INITIALIZE GAME VARIABLES

var outOfMoney = false;
var wallet = 1000;
var wallet2 = 99999999;
var deck = createDeckOfCards();
shuffle(deck);
var player = new Player(wallet,"player");
var dealer = new Player(wallet2,"dealer");

//DOM VARIABLES
document.getElementById("buttonStart").addEventListener("click", startGame);
document.getElementById("exit").addEventListener("click", exitGame);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);
document.getElementById("split").addEventListener("click", split);
document.getElementById("gameStats").style.visibility = "hidden";


 function updateScoreBoard(){
  document.getElementById("playerScore").innerHTML =
  "PLAYER SCORE: " + player.getScore();
document.getElementById("dealerScore").innerHTML =
  "DEALER SCORE: " + dealer.getScore();
 }


function hit() {

  console.log("..Pressed hit..\n");
  var card = getRandomCard(deck);
  console.log("Card is:"+card.value+"of"+card.suit);
  player.addToHand(card);
  updateScoreBoard();
  if(player.score >21 ){
    updateScoreBoard();
    alert("Bust! you lose");
  }
  if(player.score === 21){
    updateScoreBoard();
    alert("You win!");
  }
  updateScoreBoard();
 
}

function stand() {
  
  console.log("..Pressed stand..\n");

  if(dealer.score > 16){
    //SHOW HIDDEN DEALER CARD
  }
  if(dealer.score <= 16){
    dealer.addToHand(getRandomCard(deck));
    if(dealer.score > 21){
      updateScoreBoard();
      alert("You win!");
    }
    if(dealer.score > 16 && player.score > dealer.score){
      updateScoreBoard();
      alert("You win!");
    }
    if(dealer.score === 21){
      updateScoreBoard();
      alert("You bust!");
    }

  }
  updateScoreBoard();
}

function split() {
  console.log("..Pressed split..\n");
  // can split 2 cards with the same value, 
  //check if player has ability to split
  //then split.
}

function playerHasWon(){
  return (player.score === 21 && ( dealer.score < 21 || dealer.score >21))

}

//starts the game by giving 2 cards to player.
//and 2 cards to dealer (where 1 card is hidden to the player);
function startGame() {
  document.getElementById("buttonStart").style.visibility = "hidden";
  player.addToHand(getRandomCard(deck));
  player.addToHand(getRandomCard(deck));
  dealer.addToHand(getRandomCard(deck));
  dealer.addToHidden(getRandomCard(deck));
 
  console.log("Starting game ...\nGiven starting cards:");
  player.printHand();
  console.log("You get a starting score of : " + player.getScore() + " hit / stand / split?\n");
  document.getElementById("gameStats").style.visibility = "visible";
  updateScoreBoard();
}

function exitGame() {
  console.log("Exit game");
  document.getElementById("gameStats").style.visibility = "hidden";
  location.reload(); //reloads the page when game exits
  document.getElementById("buttonStart").style.visibility = "visible";
}

//making a switch case for when player presses the buttons
// - hit
// - split
// - stand
// - submit
