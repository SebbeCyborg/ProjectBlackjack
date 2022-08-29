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
  
  }
}

class Player {
  constructor(wallet) {
    this.wallet = wallet;
    this.score = 0;
    this.hand = new Array();
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
      
      }
      else if (this.score >= 11) {
  
        this.score = this.score + 1;
        
      }
    }

  }

  getScore() {
    this.printHand();
    if (this.score === 21) {
      console.log("=WINNER!=");
      
    }

    if (this.score > 21) {
      console.log("You lost!");
     
    }

    console.log("SCORE : " + this.score);
  }
  
  printHand(){
    for( const card of this.hand){
        //card.printCard();
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

//DOM VARIABLES
document.getElementById('buttonStart').addEventListener("click", startGame);


function startGame(){
    console.log("Start game!");
    
}
//INITIALIZE GAME VARIABLES
var roundCounter = 0;
var outOfMoney = false;
var wallet = 1000;
var wallet2 = 99999999;

var deck = createDeckOfCards();
shuffle(deck);

var player = new Player(wallet);
var dealer = new Player(wallet2);

player.addToHand(getRandomCard(deck));
player.addToHand(getRandomCard(deck));


const gameStats = document.getElementById('gameStats');

if(gameStats === null){
    console.log("NULL TRY AGAIN");
}






//making a switch case for when player presses the buttons
// - hit
// - split 
// - stand
// - submit

