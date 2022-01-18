const sortByPriceClickable = document.querySelector('.sort-by-price-wrapper')
const sortByAgeClickable = document.querySelector('.sort-by-age-wrapper')
const mainContent = document.querySelector('.main-content')
const cards = document.querySelectorAll('.card')

const cardsData = []

class CardData {
  constructor(index, price, age) {
    this._index = index;
    this._price = price;
    this._age = age;
  }

  get index() {
    return this._index;
  }

  get price() {
    return this._price;
  }

  get age() {
    return this._age;
  }
}

loadCardsData()

sortByPriceClickable.addEventListener('click', () =>
  sortCardsDataAndRenderSortedCards(sortByPriceClickable))
sortByAgeClickable.addEventListener('click', () =>
  sortCardsDataAndRenderSortedCards(sortByAgeClickable))

function loadCardsData() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]

    let cardPrice = parseInt(card
      .querySelector('.cat-price')
      .querySelector('span')
      .innerHTML.replace(' ', '')
    )
    let cardAge = getCardAge()

    cardsData.push(new CardData(i, cardPrice, cardAge))

    function getCardAge() {
      let age = card.querySelector('.cat-age')
        .querySelector('.cat-info-value').innerHTML

      let splitAge = age.split(' ')
      let ageNumber = splitAge[0]
      let ageSuffix = splitAge[1]

      let ageMultiplier = 0
      if (ageSuffix.includes('мес')) {
        ageMultiplier = 1
      } else if (ageSuffix.includes('год')) {
        ageMultiplier = 12
      }

      return parseInt(ageNumber) * ageMultiplier
    }
  }
}

function reverseOrder(element) {
  if (getOrder(element) === 'desc') {
    element.setAttribute('data-sort-by', 'asc')
  } else if (getOrder(element) === 'asc') {
    element.setAttribute('data-sort-by', 'desc')
  }
}

function sortCardsDataAndRenderSortedCards(element) {
  rotateArrow(element)
  sortCardsData(element)
  renderSortedCards()
  reverseOrder(element)
}

// sorting by price is a higher priority
function sortCardsData(element) {
  cardsData.sort(function (o1, o2) {
    if (element === sortByPriceClickable) {
      if (getOrder(element) === 'desc') {
        if (o1.price < o2.price) return 1;
        if (o1.price > o2.price) return -1;
      } else if (getOrder(sortByPriceClickable) === 'asc') {
        if (o1.price < o2.price) return -1;
        if (o1.price > o2.price) return 1;
      }
    } else {
      if (getOrder(element) === 'desc') {
        if (o1.age < o2.age) return 1;
        if (o1.age > o2.age) return -1;
      } else if (getOrder(sortByAgeClickable) === 'asc') {
        if (o1.age < o2.age) return -1;
        if (o1.age > o2.age) return 1;
      }
    }
    return 0;
  })
}

function getOrder(element) {
  return element.getAttribute('data-sort-by')
}

function renderSortedCards() {
  addCards()
}

function addCards() {
  for (const cardData of cardsData) {
    mainContent.append(cards[cardData.index])
  }
}

function rotateArrow(element) {
  const arrow = element.querySelector('.arrow')

  if (!arrow.classList.contains('arrow-up')) {
    arrow.classList.add('arrow-up')
  } else {
    arrow.classList.remove('arrow-up')
  }
}
