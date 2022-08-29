const suits = ["hearts","diamonds","spades","clubs"];
const values = ["ace",2,3,4,5,6,7,8,9,10,"kings","queen","jack"];


//This class contains the value/suit of a card, and a unique ID.
class Card {
    constructor(value,suit,id){
        this.value = value;
        this.suit = suit;
        this.id = id;
        
    }
    //debugger function
    printCard(){
        console.log("Card ID:"+ this.id);
        console.log("Card Value:"+this.value);
        console.log("Card Suit:"+(this.suit));
        console.log("___________________________\n");
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
class Player {
    constructor(wallet){
        this.wallet = wallet;
        this.score = 0;
        this.hand = new Array();
     
    }
    addToHand(card){
        this.hand.push(card);

        if(card.value ==="kings" || card.value === "queen" || card.value === "jack"){
            this.score = this.score + 10;
        }
        
        if(card.value === "ace"){
            if(this.score <= 10){
                this.score = this.score +11;
            }
            if(this.score >=10){
                this.score = this.score + 1;
            }
        }
        if(card.value != "kings" && card.value != "queen" && card.value != "jack" && card.value != "ace"){
            this.score = this.score + card.value;

        }
        
        
    }


    getScore(){
        if(this.score === 21){
            console.log("YOU WIN!");
        }

        if(this.score > 21){
            console.log("You lost!");

        }

        console.log("SCORE : "+this.score);
    }

   
}

/*  */
function createDeckOfCards(){

    const deckSize = 51;
    var cards=[];
    var i = 0
    
    for(j = 0; j <= 3;j++){
        var suit = suits[j];
        for(k = 0; k <= 12; k++){
            var value = values[k];
            cards.push( new Card(value,suit,i));
            i++;
        }
    }
    
    return cards;
}

    
//pick 1 rabdin card from deck and return
function hit(deck){
var rndmCard = deck[Math.floor(Math.random() * deck.length)];
return deck.pop(rndmCard);;
}

function shuffle(deckOfCards){
    let cardsDeck = deckOfCards;
    let shuffledDeck = cardsDeck.sort(function () {
      return Math.random() - 0.5;
    });

    return shuffledDeck;

}

function stand(deckOfCards){
    let cardsDeck = deckOfCards;
    //stand logic
}

function split(deckOfCards){
    //split logic

}

function checkScore(handOfCards){

    //do stuff
    //calculate the score of the hand of cards provided as argument
    //return true if over 21, false if under, true if it is 21.
    return isOver21;
}

//INITIALIZATION
var roundCounter = 0;
var outOfMoney = false;
var wallet = new Wallet(1000);
var deck = createDeckOfCards();




shuffle(deck);
var cardFirst = hit(deck);
var cardSecond = hit(deck);


var player = new Player(wallet);
player.addToHand(cardFirst);
player.addToHand(cardSecond);
player.getScore();

/* var cardSecond = hit(deck);
p = new Player(cardFirst,cardSecond,wallet); */






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






