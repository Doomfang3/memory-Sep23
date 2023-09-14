class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(array) {
    if (typeof array === 'undefined' || typeof this.cards === 'undefined') {
      return
    }
    // ... write your code here
    const newArray = structuredClone(this.cards) // Create a copy of the original array

    newArray.forEach((_, index) => {
      const randomIndex = Math.floor(Math.random() * (index + 1))

      // Swap newArray[index] and newArray[randomIndex] without destructuring
      const temp = newArray[index]
      newArray[index] = newArray[randomIndex]
      newArray[randomIndex] = temp
    })
    this.cards = newArray
    return newArray // Return the shuffled copy
  }

  checkIfPair(cardName1, cardName2) {
    // ... write your code here
    this.pairsClicked += 1
    if (typeof cardName1 !== 'string' && typeof cardName2 !== 'string') {
      throw new TypeError('Arguments should be strings')
    }
    if (cardName1 === cardName2) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true
    } else {
      return false
    }
  }
}
