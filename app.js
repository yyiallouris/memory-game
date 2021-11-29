  document.addEventListener('DOMContentLoaded', () => {  

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i< cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard)
            grid.appendChild(card);

        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        console.log(optionOneId)
        const optionTwoId = cardsChosenId[1]
        console.log(optionTwoId)
        console.log(cardsChosen)
        if(cardsChosen[0] == cardsChosen[1]){
            alert('You found a match!!!')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cards[optionOneId].removeEventListener("click", flipCard); 
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry:( try again')

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length/2){
            resultDisplay.textContent = "Congrats dude!!!!!!"
        }
    }


    

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) 
        console.log(cardId)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch,500)
        }

    }


    createBoard();

}) 
