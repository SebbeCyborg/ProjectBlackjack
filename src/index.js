const suits = ["hearts","diamonds","spades","clubs"];
const values = ["ace",2,3,4,5,6,7,8,9,10,"kings","queen","jack"];
class Card {
    constructor(value,suit,id){
        this.value = value;
        this.suit = suit;
        this.id = id;
    }
    printCard(){
        console.log("Card ID:"+ this.id);
        console.log("Card Value:"+this.value);
        console.log("Card Suit:"+(this.suit));
        console.log("___________________________\n");
    }

}
class Hand {
    //a hand is just two cards
    constructor(){
        this.length = 0;
        this.listOfCards = new Array();
    }
    firstCard(){
        return listOfCards[0];
    }
    lastCard(){
        return listOfCards[length];
    }
    length(){
        return this.length;
    }
    addCard(card){
        this.length++;
        this.listOfCards.push(card);
    }

}

/*  */
function createDeckOfCards(){

const deckSize = 51;
var cards=[];
var i = 0

for(j = 0; j <= 3;j++){
    var suit = suits[j];
    //for every suit in the deck

    for(k = 0; k <= 12; k++){
        
        var value = values[k];
       
        //for every value per suit
        //create a card for every value per suit
        cards.push( new Card(value,suit,i));
        cards[i].printCard();
        i++;
             
    }
}

return cards;
}



class Player {
    constructor(hand,wallet){
        this.wallet = wallet;
        this.hand = new Array();
    }

    printHand(){
        
        console.log(this.hand.firstCard());
        console.log(this.hand.secondCard());
    }
   
}

class gameController{
    constructor(playerList){
        this.playerList = [];
        this.gameOn = true;
    }
        
    isOver21(i){
        return (i===21);
    }

    checkHands(){
        for(i = 0 ; i < this.playerList.length(); i++){
            isOver21(playerList[i].Player.hand);
        }
    }
}

//pick 2 random cards from deck
function hit(deck){
var rndmCard = deck[Math.floor(Math.random() * cards.length)];
var firstCard = deck.pop(rndmCard);
var rndmCard2 = deck[Math.floor(Math.random() * cards.length)];
var secondCard = deck.pop(rndCard2);
twoCards = new Array();

twoCards.push(rndmCard);
twoCards.push(rndmCard2);

return twoCards;
}



class Dealer{
    constructor(player,deck){
        this.player = player;
        this.deck =deck;
    }
    

    hit(){
        //hits the player with
        this.player.hand.push(deck.pop());

    }
    
    stand(){
        //does not distribute cards, 

    }
}
class  Wallet {
    constructor(balance){

        this.balance =balance; 
    }
 
    withdraw(amount){
        this.balance = this.balance - amount;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

}

function shuffle(deckOfCards){

    let cardsDeck = deckOfCards;

    let shuffledDeck = cardsDeck.sort(function () {
      return Math.random() - 0.5;
    });

    return shuffledDeck;

}


//INITIALIZATION
var roundCounter = 0;
var outOfMoney = false;
var wallet = new Wallet(100);
var deck = createDeckOfCards();
shuffle(deck);





//TODO LIST
//create player and create Dealer

//give player two cards, start the game

//game loop, exit when player exit game 

//give player multiple choices - HIT / STAND / SPLIT 
//catch errors if player choice is invalid/not according to rules

//player chose HIT 

//player chose STAND

//player chost SPLIT

//player chose to exit game






