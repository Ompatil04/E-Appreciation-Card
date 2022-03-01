const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Server = require('./serverModel')

const userSchema = new Schema({
    userMail: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
    cardsUsed: {
        type: Number,
        default: 0
    },
    cards: {
        details: [
            {
                sentTo: { type: String },
                type: { type: String },
                date: { type: Number, default: Date.now }
            }
        ]
    }
});

userSchema.methods.addCard = function (sentTo, cardType) {
    let cardDetails = {
        sentTo, cardType
    }
    console.log(cardDetails)
    this.cardsUsed += 1;

    const allCards = [...this.cards.details];
    allCards.push(cardDetails);
    this.cards.details = allCards
    return this.save();
}

module.exports = mongoose.model("User", userSchema);
