let player = {
    name: "Yowe",
    chips: 150
}
let cards = []
let totalScore = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerInfoEl = document.querySelector(".playerInfo")

playerInfoEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randomCard = Math.floor(Math.random() *13) + 1 
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    totalScore = firstcard + secondcard
    renderGame() 
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let c = 0; c < cards.length; c++) {
        cardsEl.textContent += cards[c] + " "
    }
    sumEl.textContent = "Sum: " + totalScore
    if (totalScore <= 20) {
        message  = "Do you want to draw a new card?"
    } else if (totalScore === 21) {
        message  = "You've got Backjack!!!"
        hasBlackjack = true
    } else {
        message  = "You lose"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let additionalCard = getRandomCard()
        cards.push(additionalCard)
        totalScore += additionalCard
        renderGame()
    }
}