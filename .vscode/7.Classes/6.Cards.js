(function () {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    }
    class Card {
        constructor(face, suit) {
            this.innerFace = face;
            this.innerSuit = suit;
        }

        get face() {
            return this.innerFace;
        }

        get suit() {
            return this.innerSuit;
        }

        set face() {

        }
    }
})();