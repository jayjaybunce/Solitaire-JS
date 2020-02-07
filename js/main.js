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
const column6El = document.querySelector('#column6')
const column5El = document.querySelector('#column5')
const column4El = document.querySelector('#column4')
const column3El = document.querySelector('#column3')
const column2El = document.querySelector('#column2')
const column1El = document.querySelector('#column1')
const gameBoardEl = document.querySelector('#gameBoard')
const playBtnEl = document.querySelector('#play-btn')
//EVENT LISTENERS
playBtnEl.addEventListener('click',function(evt){
    renderColumn7();
    renderColumn6();
    renderColumn5();
    renderColumn4();
    renderColumn3();
    renderColumn2();
    renderColumn1();
    expandColums();
})
    
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

    function expandColums(){
        let cardEls;
        let cols = document.querySelectorAll('#column7,#column6,#column5,#column4,#column3,#column2,#column1')
        cardEls = document.querySelectorAll('#column7 .card,#column6 .card,#column5 .card,#column4 .card,#column3 .card,#column2 .card,#column1 .card')
        cols.forEach(col=>{
            col.style.marginTop = '30px'
        })
        setTimeout(function(){

            cardEls.forEach(card=>{
                
                card.style.marginTop = '-30px'
            })
        },1000)
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
    
    
    render();
    renderCards(cards);
    
    
    
    const allCardEls = document.querySelectorAll('.card')
    









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
        // cardEl.style.marginTop = '-30px'
    })
},1000)
}

function render(){
    shuffleCards(cards)
    setCards();

}

// console.log(cards)




let testObj = [
    {card:'A Hearts',value: -1,faceup:false,active:false},
    {card:'A Clubs',value: 1,faceup:false,active:false},
    {card:'A Spades',value: 1,faceup:false,active:false},
    {card:'A Diamonds',value: -1,faceup:false,active:false},
]
