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
class Hand extends Card{
    constructor(cards){
        this.cards = [cards[0],cards[1]];
    }
}
const suits = ["hearts","diamonds","spades","clubs"];
const values = ["ace",2,3,4,5,6,7,8,9,10,"kings","queen","jack"];
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
        i++;
        //for every value per suit
        //create a card for every value per suit
        cards.push( new Card(value,suit,i));
             
    }
}
return cards;
}

class Player {
    constructor(hand,wallet){
        this.wallet = wallet;
        this.hand = [];
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


function hit(cards){
var rndmCard = cards[Math.floor(Math.random() * cards.length)];
cards.pop(rndmCard);
var rndmCard2 = cards[Math.floor(Math.random() * cards.length)];
cards.pop(rndCard2);
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
        //hits the

    }
    
    stand(){

    }
}

//creates the deck of cards, gives player his hand, updates the deck of cards, returns the 



//creating player, giving cards 



//give player two cards, start the game


//game loop, exits when player exits game 






