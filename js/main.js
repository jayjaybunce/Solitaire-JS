let allCardEls = document.querySelectorAll('.card')


let purpleCardBacks = document.querySelector('#card-back-controller-purple')
purpleCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        console.log(faceUpArray)
    })    
})




























// CLASSES,LETS,VARS and CONSTS HERE
////// LISTENER REBUILD IN PROGRESSS - NOT A WORKING VERSION
class CARD {
    constructor(suite,color,face,value,name){
        this.suite = suite;
        this.color = color;
        this.face = face;
        this.value = value;
        this.name = name;
        this.faceUp = false;
        this.active = false;
    
    }
    activate(){
        this.active = true;
    }
}
let deck = [];
let faceUpDeck = []

let columnChecker = ['column1','column2','column3','column4','column5','column6','column7','deck-spades','deck-hearts','deck-clubs','deck-diamonds','gameBoard']

let cards = [
    {card:'King Hearts',value: -13,faceup:false,active:false,url: '../card_images/KH.jpg'},
    {card:'King Clubs',value: 13,faceup:false,active:false,url: '../card_images/KC.jpg'},
    {card:'King Spades',value: 13,faceup:false,active:false,url: '../card_images/KS.jpg'},
    {card:'King Diamonds',value: -13,faceup:false,active:false,url: '../card_images/KD.jpg'},
    {card:'Queen Hearts',value: -12,faceup:false,active:false,url: '../card_images/QH.jpg'},
    {card:'Queen Clubs',value: 12,faceup:false,active:false,url: '../card_images/QC.jpg'},
    {card:'Queen Spades',value: 12,faceup:false,active:false,url: '../card_images/QS.jpg'},
    {card:'Queen Diamonds',value: -12,faceup:false,active:false,url: '../card_images/QD.jpg'},
    {card:'Jack Hearts',value: -11,faceup:false,active:false,url: '../card_images/JH.jpg'},
    {card:'Jack Clubs',value: 11,faceup:false,active:false,url: '../card_images/JC.jpg'},
    {card:'Jack Spades',value: 11,faceup:false,active:false,url: '../card_images/JS.jpg'},
    {card:'Jack Diamonds',value: -11,faceup:false,active:false,url: '../card_images/JD.jpg'},
    {card:'10 Hearts',value: -10,faceup:false,active:false,url: '../card_images/10H.jpg'},
    {card:'10 Clubs',value: 10,faceup:false,active:false,url: '../card_images/10C.jpg'},
    {card:'10 Spades',value: 10,faceup:false,active:false,url: '../card_images/10S.jpg'},
    {card:'10 Diamonds',value: -10,faceup:false,active:false,url: '../card_images/10D.jpg'},
    {card:'9 Hearts',value: -9,faceup:false,active:false,url: '../card_images/9H.jpg'},
    {card:'9 Clubs',value: 9,faceup:false,active:false,url: '../card_images/9C.jpg'},
    {card:'9 Spades',value: 9,faceup:false,active:false,url: '../card_images/9S.jpg'},
    {card:'9 Diamonds',value: -9,faceup:false,active:false,url: '../card_images/9D.jpg'},
    {card:'8 Hearts',value: -8,faceup:false,active:false,url: '../card_images/8H.jpg'},
    {card:'8 Clubs',value: 8,faceup:false,active:false,url: '../card_images/8C.jpg'},
    {card:'8 Spades',value: 8,faceup:false,active:false,url: '../card_images/8S.jpg'},
    {card:'8 Diamonds',value: -8,faceup:false,active:false,url: '../card_images/8D.jpg'},
    {card:'7 Hearts',value: -7,faceup:false,active:false,url: '../card_images/7H.jpg'},
    {card:'7 Clubs',value: 7,faceup:false,active:false,url: '../card_images/7C.jpg'},
    {card:'7 Spades',value: 7,faceup:false,active:false,url: '../card_images/7S.jpg'},
    {card:'7 Diamonds',value: -7,faceup:false,active:false,url: '../card_images/7D.jpg'},
    {card:'6 Hearts',value: -6,faceup:false,active:false,url: '../card_images/6H.jpg'},
    {card:'6 Clubs',value: 6,faceup:false,active:false,url: '../card_images/6C.jpg'},
    {card:'6 Spades',value: 6,faceup:false,active:false,url: '../card_images/6S.jpg'},
    {card:'6 Diamonds',value: -6,faceup:false,active:false,url: '../card_images/6D.jpg'},
    {card:'5 Hearts',value: -5,faceup:false,active:false,url: '../card_images/5H.jpg'},
    {card:'5 Clubs',value: 5,faceup:false,active:false,url: '../card_images/5C.jpg'},
    {card:'5 Spades',value: 5,faceup:false,active:false,url: '../card_images/5S.jpg'},
    {card:'5 Diamonds',value: -5,faceup:false,active:false,url: '../card_images/5D.jpg'},
    {card:'4 Hearts',value: -4,faceup:false,active:false,url: '../card_images/4H.jpg'},
    {card:'4 Clubs',value: 4,faceup:false,active:false,url: '../card_images/4C.jpg'},
    {card:'4 Spades',value: 4,faceup:false,active:false,url: '../card_images/4S.jpg'},
    {card:'4 Diamonds',value: -4,faceup:false,active:false,url: '../card_images/4D.jpg'},
    {card:'3 Hearts',value: -3,faceup:false,active:false,url: '../card_images/3H.jpg'},
    {card:'3 Clubs',value: 3,faceup:false,active:false,url: '../card_images/3C.jpg'},
    {card:'3 Spades',value: 3,faceup:false,active:false,url: '../card_images/3S.jpg'},
    {card:'3 Diamonds',value: -3,faceup:false,active:false,url: '../card_images/3D.jpg'},
    {card:'2 Hearts',value: -2,faceup:false,active:false,url: '../card_images/2H.jpg'},
    {card:'2 Clubs',value: 2,faceup:false,active:false,url: '../card_images/2C.jpg'},
    {card:'2 Spades',value: 2,faceup:false,active:false,url: '../card_images/2S.jpg'},
    {card:'2 Diamonds',value: -2,faceup:false,active:false,url: '../card_images/2D.jpg'},
    {card:'A Hearts',value: -1,faceup:false,active:false,url: '../card_images/AH.jpg'},
    {card:'A Clubs',value: 1,faceup:false,active:false,url: '../card_images/AC.jpg'},
    {card:'A Diamonds',value: -1,faceup:false,active:false,url: '../card_images/AceD.jpg'},
    {card:'A Spades',value: 1,faceup:false,active:false,url: '../card_images/AS.jpg'},
]
///////////////////////////////////////////////
// CACHED ELEMENTS HERE
const bodyEl = document.querySelector('body')
let moves = 0;
let movesEl = document.querySelector('#moves h3')
let column7El;
let column6El;
let column5El;
let column4El;
let column3El;
let column2El;
let column1El;
let clicked = [];
let allColumns = document.querySelectorAll('#column7,#column6,#column5,#column4,#column3,#column2,#column1,#deck-spades,#deck-hearts,#deck-diamonds,#deck-clubs')
let gameBoardEl = document.querySelector('#gameBoard')
let playBtnEl = document.querySelector('#play-btn')
let clickedElements =[];
let deckEl = document.querySelector('#deck')
let faceUpDeckEl = document.querySelector('#face-up-deck')
let placeHolderEls = document.querySelectorAll('.card-placeholder')
let suiteDeckEls = document.querySelectorAll('#deck-diamonds,#deck-hearts,#deck-spades,#deck-clubs')
let spadesDeckEl = document.querySelector('#deck-spades')
let heartsDeckEl = document.querySelector('#deck-hearts')
let diamondsDeckEl = document.querySelector('#deck-diamonds')
let clubsDeckEl = document.querySelector('#deck-clubs')
let darkModeBtnEl = document.querySelector('#dark-mode-btn')
//EVENT LISTENERS
playBtnEl.addEventListener('click',function(evt){
    playBtnEl.style.visibility = 'hidden'
    setTimeout(function(){

        placeHolderEls.forEach(el=>{
            el.style.marginTop = '-30px'
            el.style.visibility = 'visible'
        })
        renderSuitePiles();
    },2000)
    renderColumn7();
    renderColumn6();
    renderColumn5();
    renderColumn4();
    renderColumn3();
    renderColumn2();
    renderColumn1();
    renderDeck();
    expandColums();
    setTimeout(function(){
        renderFaceUps();
    },2000)

    
})


    
    
    /// FUNCTION EXPRESSIONS
const createCard = (varname,dataId,name) => {
    varName = document.createElement('div');
    varName.setAttribute('data-id',dataId);
    varName.textContent = name;
    console.dir(varName)
    bodyEl.appendChild(varName);
}

    ////////////////////////
    /////LEFT OFF HERE//////
    ///////////////////////
    // FUNCTION DECLARATIONS
function renderFaceUps(){
    if(column7El.children.length > 0){
        let lastCol7 = column7El.lastChild.getAttribute('data-card')
        let indexLastCard7 = cards.findIndex(el=>{
        return (el.card === lastCol7)
        })
    cards[indexLastCard7].faceup = true;
    }

    if(column6El.children.length >0){
        let lastCol6 = column6El.lastChild.getAttribute('data-card')
        let indexLastCard6 = cards.findIndex(el=>{
            return (el.card === lastCol6)
        })
        cards[indexLastCard6].faceup = true;

    }
    if(column5El.children.length>0){
        let lastCol5 = column5El.lastChild.getAttribute('data-card')
        let indexLastCard5 = cards.findIndex(el=>{
            return (el.card === lastCol5)
        })
        cards[indexLastCard5].faceup = true;

    }
    if(column4El.children.length>0){
        let lastCol4 = column4El.lastChild.getAttribute('data-card')
        let indexLastCard4 = cards.findIndex(el=>{
            return (el.card === lastCol4)
        })
        cards[indexLastCard4].faceup = true;

    }
    if(column3El.children.length>0){
        let lastCol3 = column3El.lastChild.getAttribute('data-card')
        let indexLastCard3 = cards.findIndex(el=>{
            return (el.card === lastCol3)
        })
        cards[indexLastCard3].faceup = true;
    }
    if(column2El.children.length>0){
        let lastCol2 = column2El.lastChild.getAttribute('data-card')
        let indexLastCard2 = cards.findIndex(el=>{
            return (el.card === lastCol2)
        })
        cards[indexLastCard2].faceup = true;

    }
    if(column1El.children.length>0){
        let lastCol1 = column1El.lastChild.getAttribute('data-card')
        let indexLastCard1 = cards.findIndex(el=>{
            return (el.card === lastCol1)
        })
        cards[indexLastCard1].faceup = true;

    }
    
    // movesEl.textContent = `Moves: ${moves}`

    
    cards.forEach(c=>{
        if(c.faceup === true){
            let cardEl = document.querySelectorAll(`[data-card="${c.card}"]`)
            cardEl.forEach(el=>{
                let ref = `${c.url}`
                el.style.backgroundImage = `url(${c.url})`
            })
        }      
    })
    movesEl.style.visibility = 'visible'
    movesEl.style.opacity = '1'
    movesEl.textContent = `Moves: ${moves}`
};
function getColumnEls(){
    column7El = document.querySelector('#column7')
    column6El = document.querySelector('#column6')
    column5El = document.querySelector('#column5')
    column4El = document.querySelector('#column4')
    column3El = document.querySelector('#column3')
    column2El = document.querySelector('#column2')
    column1El = document.querySelector('#column1')  
};
function expandColums(){
    let cardEls;
    let cols = document.querySelectorAll('#column7,#column6,#column5,#column4,#column3,#column2,#column1')
    cardEls = document.querySelectorAll('#column7 .card,#column6 .card,#column5 .card,#column4 .card,#column3 .card,#column2 .card,#column1 .card')
    cols.forEach(col=>{
        col.style.marginTop = '30px'
        col.style.tranition = '0s ease-in-out'
    })
    setTimeout(function(){

        cardEls.forEach(card=>{
            
            card.style.marginTop = '-30px'
        })
    },1000)

}


function renderDeck(){
    let inc = 24;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        
        deckEl.appendChild(cardToMove)
    inc--
    }
};




function renderSuitePiles(){
    suiteDeckEls.forEach(deck=>{
        deck.style.visibility = 'visible'
    })
}
function renderColumn7(){
    let inc = 7;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        window.getComputedStyle(cardToMove)
        column7El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn6(){
    let inc = 6;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column6El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn5(){
    let inc = 5;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column5El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn4(){
    let inc = 4;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column4El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn3(){
    let inc = 3;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column3El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn2(){
    let inc = 2;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column2El.appendChild(cardToMove)
    inc--
    }
};
function renderColumn1(){
    let inc = 1;
    while(inc > 0){
        let lastIndex = document.querySelectorAll('#gameBoard .card').length -1
        let cardToMove = document.querySelectorAll('#gameBoard .card')[lastIndex]
        column1El.appendChild(cardToMove)
    inc--
    }
};



function renderCards(dataSet){
    dataSet.forEach(element=>{
        cardEl = document.createElement('div')
        cardEl.setAttribute('data-card',element.card)
        cardEl.setAttribute('class','card')
        gameBoardEl.appendChild(cardEl)
    })
}

getColumnEls();
render();
renderCards(cards);














function shuffleCards(cardsArray){
    for(let i = cardsArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = cardsArray[i]
        cardsArray[i] = cardsArray[j]
        cardsArray[j] = temp
        }
}


function render(){
    shuffleCards(cards)


}

// console.log(cards)




let testObj = [
    {card:'A Hearts',value: -1,faceup:false,active:false},
    {card:'A Clubs',value: 1,faceup:false,active:false},
    {card:'A Spades',value: 1,faceup:false,active:false},
    {card:'A Diamonds',value: -1,faceup:false,active:false},
]



// findMatch(-13,12)
// findMatch(-12,11)
// findMatch(11,-12)
// findMatch(9,-10)
// findMatch(8,-7)
// findMatch(-7,8)
// findMatch(1,-2)









bodyEl.style.backgroundColor = 'white'

darkModeBtnEl.addEventListener('click',function(evt){
    if(bodyEl.style.backgroundColor === 'white'){
        bodyEl.style.backgroundColor = 'black'
        console.log('Initiating dark mode')
    }else{
        bodyEl.style.backgroundColor = 'white'
    }
})