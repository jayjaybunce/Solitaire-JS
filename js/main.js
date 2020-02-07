// CLASSES,LETS,VARS and CONSTS HERE

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

let cards = [
    {card:'King Hearts',value: -13,faceup:false,active:false},
    {card:'King Clubs',value: 13,faceup:false,active:false},
    {card:'King Spades',value: 13,faceup:false,active:false},
    {card:'King Diamonds',value: -13,faceup:false,active:false},
    {card:'Queen Hearts',value: -12,faceup:false,active:false},
    {card:'Queen Clubs',value: 12,faceup:false,active:false},
    {card:'Queen Spades',value: 12,faceup:false,active:false},
    {card:'Queen Diamonds',value: -12,faceup:false,active:false},
    {card:'Jack Hearts',value: -11,faceup:false,active:false},
    {card:'Jack Clubs',value: 11,faceup:false,active:false},
    {card:'Jack Spades',value: 11,faceup:false,active:false},
    {card:'Jack Diamonds',value: -11,faceup:false,active:false},
    {card:'10 Hearts',value: -10,faceup:false,active:false},
    {card:'10 Clubs',value: 10,faceup:false,active:false},
    {card:'10 Spades',value: 10,faceup:false,active:false},
    {card:'10 Diamonds',value: -10,faceup:false,active:false},
    {card:'9 Hearts',value: -9,faceup:false,active:false},
    {card:'9 Clubs',value: 9,faceup:false,active:false},
    {card:'9 Spades',value: 9,faceup:false,active:false},
    {card:'9 Diamonds',value: -9,faceup:false,active:false},
    {card:'8 Hearts',value: -8,faceup:false,active:false},
    {card:'8 Clubs',value: 8,faceup:false,active:false},
    {card:'8 Spades',value: 8,faceup:false,active:false},
    {card:'8 Diamonds',value: -8,faceup:false,active:false},
    {card:'7 Hearts',value: -7,faceup:false,active:false},
    {card:'7 Clubs',value: 7,faceup:false,active:false},
    {card:'7 Spades',value: 7,faceup:false,active:false},
    {card:'7 Diamonds',value: -7,faceup:false,active:false},
    {card:'6 Hearts',value: -6,faceup:false,active:false},
    {card:'6 Clubs',value: 6,faceup:false,active:false},
    {card:'6 Spades',value: 6,faceup:false,active:false},
    {card:'6 Diamonds',value: -6,faceup:false,active:false},
    {card:'5 Hearts',value: -5,faceup:false,active:false},
    {card:'5 Clubs',value: 5,faceup:false,active:false},
    {card:'5 Spades',value: 5,faceup:false,active:false},
    {card:'5 Diamonds',value: -5,faceup:false,active:false},
    {card:'4 Hearts',value: -4,faceup:false,active:false},
    {card:'4 Clubs',value: 4,faceup:false,active:false},
    {card:'4 Spades',value: 4,faceup:false,active:false},
    {card:'4 Diamonds',value: -4,faceup:false,active:false},
    {card:'3 Hearts',value: -3,faceup:false,active:false},
    {card:'3 Clubs',value: 3,faceup:false,active:false},
    {card:'3 Spades',value: 3,faceup:false,active:false},
    {card:'3 Diamonds',value: -3,faceup:false,active:false},
    {card:'2 Hearts',value: -2,faceup:false,active:false},
    {card:'2 Clubs',value: 2,faceup:false,active:false},
    {card:'2 Spades',value: 2,faceup:false,active:false},
    {card:'2 Diamonds',value: -2,faceup:false,active:false},
    {card:'A Hearts',value: -1,faceup:false,active:false},
    {card:'A Clubs',value: 1,faceup:false,active:false},
    {card:'A Spades',value: 1,faceup:false,active:false},
    {card:'A Diamonds',value: -1,faceup:false,active:false},
]
///////////////////////////////////////////////
// CACHED ELEMENTS HERE
const bodyEl = document.querySelector('body')
const column7El = document.querySelector('#column7')
const allCardEls = document.querySelectorAll('.card')
const gameBoardEl = document.querySelector('#gameBoard')
//EVENT LISTENERS
gameBoardEl.addEventListener('click',function(evt){
    let tarEl = evt.target
    if(tarEl.className !== 'card'){
        return;
    }  
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
function assignCardValues(dataSet){
    dataSet.forEach(card=>{
        console.log(card)
        card.style.backgroundColor = 'red'
    })

}
function shuffleCards(cardsArray){
    for(let i = cardsArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = cardsArray[i]
        cardsArray[i] = cardsArray[j]
        cardsArray[j] = temp
        }
}
function setCards(){
    setTimeout(function(){
    allCardEls.forEach(cardEl => {
        cardEl.style.marginTop = '-30px'
    })
},1000)
}

function render(){
    shuffleCards(cards)
    setCards();

}

// console.log(cards)

render();

