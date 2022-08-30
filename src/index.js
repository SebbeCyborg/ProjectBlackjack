/*
* An implementation of the game of BlackJack
* limitations: not working properly, 
* winning condition is checked and spread out throughout the code
* there is no image on screen to show the cards, also the hidden card
* the dealer is supposed to have is not implemented.
*
* known bugs: when both have score over 16, 'stand' does nothing,
* when restarting the game, it prints out the previous cards from last round,
* making it hard to follow/debug with the console.
* issues: code is badly written, duplicate code 

* 
*/


const suits = ["hearts", "diamonds", "spades", "clubs"];
const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "kings", "queen", "jack"];

/**
 * card class holds information 
 * about the value, suit and id of a card.
 * method printCard only shows the value of card
 */
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

/**
 * class player repreesnts a player and dealer
 * it has a wallet, score and an array of cards
 * method addToHand() adds a card to the array
 * method printHand() prints the whole hand in console.
 * method getScore() returns the score.
 */
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

/**
 * creates a whole deck of cards
 * @returns the array of cards
 * 
 */
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

/**
 * this function gets a random card from the deck
 * @param {the deck of cards, which is a global variable} deck 
 * @returns the specific card
 */
function getRandomCard(deck) {
  var rndmCard = deck[Math.floor(Math.random() * deck.length)];
  return deck.pop(rndmCard);
}

/**
 * shuffles the deck of cards
 * @param {the deck } deckOfCards 
 * @returns the shuffled deck
 */
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


/**
 * updates scoreboard in browser
 */
 function updateScoreBoard(){
  document.getElementById("playerScore").innerHTML =
  "PLAYER SCORE: " + player.getScore();
document.getElementById("dealerScore").innerHTML =
  "DEALER SCORE: " + dealer.getScore();
 }

 /*
 *hit()
 * gives a card to the player, and checks winning conditions
 * 
 */
function hit() {

  console.log("..Pressed hit..\n");
  var card = getRandomCard(deck);
  console.log("Card is:"+card.value+"of"+card.suit);
  player.addToHand(card);
  updateScoreBoard();
  if(player.score >21 ){
    updateScoreBoard();
    alert("Bust! you lose");
    player.score = 0;
    dealer.score= 0;
    startGame();
    
  }
  if(player.score === 21){
    updateScoreBoard();
    alert("You win!");
    player.score = 0;
    dealer.score= 0;
    startGame();
  
  }
  updateScoreBoard();
 
}
/*
 * stand() 
 * this function is executed when player
 * choses to stand, it checks for winning conditions
 * and adds a card to the dealers hand if conditions are met.
 */
function stand (){
  
  console.log("..Pressed stand..\n");

  if(dealer.score > 16){
    //SHOW HIDDEN DEALER CARD
    //
    //
  }
  if(dealer.score <= 16){
    dealer.addToHand(getRandomCard(deck));
    if(dealer.score > 21){
      updateScoreBoard();
      alert("You win!");
      player.score = 0;
      dealer.score= 0;
      startGame();
    }
    if(dealer.score > 16 && player.score > dealer.score && player.score <= 21){
      updateScoreBoard();
      alert("You win!");
      player.score = 0;
      dealer.score= 0;
      startGame();
    }
    if(dealer.score === 21){
      updateScoreBoard();
      alert("You bust!");
      player.score = 0;
      dealer.score= 0;
      startGame();
      
    }

  }
  updateScoreBoard();
}
/*
*split()
* this function is supposed to 
* split the hand into two separate hands.
*/
function split() {
  console.log("..Pressed split..\n");
  // can split 2 cards with the same value, 
  //check if player has ability to split
  //then split.
}
/*
*playerHasWon()
*output: returns true if the player 
*has a score of 21 and the dealer has lower or higher
*/
function playerHasWon(){
  return (player.score === 21 && ( dealer.score < 21 || dealer.score >21))

}

//starts the game by giving 2 cards to player.
//and 2 cards to dealer (where 1 card is hidden to the player inside dealer);
function startGame() {
  console.log("===========NEW ROUND=======\n\n");
  document.getElementById("buttonStart").style.visibility = "hidden";
  player.addToHand(getRandomCard(deck));
  player.addToHand(getRandomCard(deck));
  dealer.addToHand(getRandomCard(deck));
  dealer.addToHidden(getRandomCard(deck));// --------------------ADDS HIDDEN CARD IN DEALER---------------
 
  console.log("Starting game ...\nGiven starting cards:");
  player.printHand();
  console.log("You get a starting score of : " + player.getScore() + " hit / stand / split?\n");
  document.getElementById("gameStats").style.visibility = "visible";
  updateScoreBoard();
}
/**
 * is executed when player presses exit,
 * this function reloads the browser, resets score
 */
function exitGame() {
  console.log("Exit game");
  document.getElementById("gameStats").style.visibility = "hidden";
  location.reload(); 
  document.getElementById("buttonStart").style.visibility = "visible";
}

//making a switch case for when player presses the buttons
// - hit
// - split
// - stand
// - submit
