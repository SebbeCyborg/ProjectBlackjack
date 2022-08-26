class Deck extends Card {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    suits.forEach((suits) => createCard(values));
  }
}
