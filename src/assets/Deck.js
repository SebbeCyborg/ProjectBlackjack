class Deck extends Card {
  numberOfCards = 51;
  
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    suits.forEach((suits) => createCard(values));
  }

  createDecks(){
    deck = [];

    for (let i = 0; i < numberOfCards; i++) {

      for( let j = values.length; j<= values.length; j++){
        this.deck.push(values[j] + suits[i]);
        

      }

    }
    console.log(deck);
  }
}
