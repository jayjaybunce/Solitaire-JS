let allCardEls = document.querySelectorAll('.card')


let purpleCardBacks = document.querySelector('#card-back-controller-purple')
purpleCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/purple_back.jpg')`
            return currentBackground = `url('../card_images/purple_back.jpg')`
            
        })
    })    
})

let greyCardBacks = document.querySelector('#card-back-controller-grey')
greyCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/Gray_back.jpg')`
            return currentBackground = `url('../card_images/Grey_back.jpg')`
            
        })
    })    
})
let redCardBacks = document.querySelector('#card-back-controller-red')
redCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/Red_back.jpg')`
            return currentBackground = `url('../card_images/Red_back.jpg')`
            
        })
    })    
})
let yellowCardBacks = document.querySelector('#card-back-controller-yellow')
yellowCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/Yellow_back.jpg')`
            return currentBackground = `url('../card_images/Yellow_back.jpg')`
            
        })
    })    
})
let greenCardBacks = document.querySelector('#card-back-controller-green')
greenCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/Green_back.jpg')`
            return currentBackground = `url('../card_images/Green_back.jpg')`
            
        })
    })    
})
let willowCardBacks = document.querySelector('#card-back-controller-willow')
willowCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/willow.jpg')`
            return currentBackground = `url('../card_images/willow.jpg')`
            
        })
    })    
})
let lyraCardBacks = document.querySelector('#card-back-controller-lyra')
lyraCardBacks.addEventListener('click',evt=>{
    let faceDowns = [];
    cards.forEach(el=>{
        let tempEl = el
        if(el.faceup === false){
            faceDowns.push(tempEl)
        }
        faceDowns.forEach(card=>{
            let cEl = document.querySelector(`[data-card='${card.card}']`)
            cEl.style.backgroundImage = `url('../card_images/lyra.jpg')`
            return currentBackground = `url('../card_images/lyra.jpg')`
            
        })
    })    
})












// CLASSES,LETS,VARS and CONSTS HERE
////// LISTENER REBUILD IN PROGRESSS - NOT A WORKING VERSION
let currentBackground = `url("../card_images/blue_back.jpg")`
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
let suiteDecks = ['deck-spades','deck-hearts','deck-diamonds','deck-clubs']
let columnChecker = ['column1','column2','column3','column4','column5','column6','column7']
let restrictedElementIds = ['play-btn','deck','themes-controller-wrapper']
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
let movesHeader = document.querySelector('#moves')
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
function findSuite(string){
    // console.log(`Finding suite of ${string}`)
    string = string.split('')
    let suiteBuilder =[]
    for(let i = string.length-1;i >= 0;i--){
        if(string[i] ===" "){
        break;
        }else{
        suiteBuilder.push(string[i])
        }
    }
    return suiteBuilder = suiteBuilder.reverse('').join('')
}
    
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
bodyEl.style.backgroundColor = 'white'
darkModeBtnEl.addEventListener('click',function(evt){
    if(bodyEl.style.backgroundColor === 'white'){
        bodyEl.style.backgroundColor = 'black'
        movesHeader.style.color = 'white'
        console.log('Initiating dark mode')
    }else{
        movesHeader.style.color = 'black'
        bodyEl.style.backgroundColor = 'white'
    }
})


bodyEl.addEventListener('click',evt=>{
        let tarEl = evt.target
        let tarParEl = evt.target.parentElement
        if(tarEl.getAttribute('class')==='slider round' || tarEl.getAttribute('id') ==='dark-mode-btn'){
            return;
        }
        /// (a.1) --this code processes the clicking of the deck and moving of cards to the faceUpDeckEl and reseting the deck
        if(tarEl.getAttribute('class')==='card'){
            if(tarEl.getAttribute('data-card').includes('King')){
                if(column1El.children.lenghth === 0){
                    column1El.appendChild(tarEl)
                }else if(column2El.children.length === 0){
                    column2El.appendChild(tarEl)
                }else if(column3El.children.length === 0){
                    column3El.appendChild(tarEl)
                }else if(column4El.children.length === 0){
                    column4El.appendChild(tarEl)
                }else if(column5El.children.length === 0){
                    column5El.appendChild(tarEl)
                }else if(column6El.children.length === 0){
                    column6El.appendChild(tarEl)
                }else if(column7El.children.length === 0){
                    column7El.appendChild(tarEl)
                }
            }
        }
        if(tarParEl.getAttribute('id') === 'deck' || tarEl.getAttribute('id') === 'deck'){
            console.log('processing, now inside bodyEl Event Listener')
            if(deckEl.children.length> 0){
                let cardId = tarEl.getAttribute('data-card')
                let idx = cards.findIndex(card=>{
                    return card.card === cardId
                })
                cards[idx].faceup = true;
                tarEl.style.backgroundImage = `url('${cards[idx].url}')`
                faceUpDeckEl.appendChild(tarEl)
            }else if(deckEl.children.length === 0){
                let inc = 24
                // console.log('Processing Swap')
                while (inc > 0){
                    let swapElement = faceUpDeckEl.lastChild
                    let cardId = swapElement.getAttribute('data-card')
                    let idx = cards.findIndex(card=>{
                        return card.card === cardId
                    })
                    cards[idx].faceup = false;
                    swapElement.style.backgroundImage = currentBackground
                    deckEl.appendChild(swapElement)
                    inc--
                }
            }     
        }
        ////////////////////////////// See above code segment for details -- (a.1)
        let cardId = tarEl.getAttribute('data-card')
        let idx = cards.findIndex(card=>{
            return card.card === cardId
        })
        if(tarEl.getAttribute('id')=== 'body-element'){
            console.log('we have restricted that element')
            return;
        }
        if(columnChecker.includes(tarEl.getAttribute('id'))){
            console.log('columns cannot be selected')
            return ;
        }
        if(restrictedElementIds.includes(tarEl.getAttribute('id')) || restrictedElementIds.includes(tarParEl.getAttribute('id'))){
            console.log(`we've restricted that element`)
            return ;
        }
        try{
            
            if(cards[idx].faceup === false){
                console.log('Not face up!')
                return;
            }
        }catch(error){
            console.log('Deck clicked, but its okay. We caught it')
        }
        clickedElements.push(tarEl)
        
        if(clickedElements.length === 2){
            let objOne = clickedElements[0];
            let objOneId = objOne.getAttribute('data-card')
            let objOneIdx = cards.findIndex(card=>{
                return card.card === objOneId
            })
            let objTwo = clickedElements[1];
            let objTwoId = objTwo.getAttribute('id')
            let objTwoValue = objTwo.getAttribute('data-card')
            let objTwoIdx = cards.findIndex(card=>{
                return card.card === objTwoValue
            })
            if(suiteDecks.includes(clickedElements[1].getAttribute('id'))){
                if(objOneId.includes('A')){
                    if(objOne.getAttribute('data-card').includes('Hearts') && objTwo.getAttribute('id').includes('hearts')){
                        console.log('Passed')
                        objOne.style.marginTop = '0'
                        heartsDeckEl.appendChild(objOne)
                        renderFaceUps()
                        return clickedElements = [];
                    }else if(objOne.getAttribute('data-card').includes('Diamonds') && objTwo.getAttribute('id').includes('diamonds')){
                        console.log('Passed')
                        objOne.style.marginTop = '0'
                        diamondsDeckEl.appendChild(objOne)
                        renderFaceUps()
                        return clickedElements = [];
                    }else if(objOne.getAttribute('data-card').includes('Clubs') && objTwo.getAttribute('id').includes('clubs')){
                        console.log('Passed')
                        objOne.style.marginTop = '0'
                        clubsDeckEl.appendChild(objOne)
                        renderFaceUps()
                        return clickedElements = [];
                    }else if(objOne.getAttribute('data-card').includes('Spades') && objTwo.getAttribute('id').includes('spades')){
                        console.log('Passed')
                        objOne.style.marginTop = '0'
                        spadesDeckEl.appendChild(objOne)
                        renderFaceUps()
                        return clickedElements = [];
                    }else{
                        return clickedElements = [];
                    }
                }
            }else if(findSuite(objOne.getAttribute('data-card')) === findSuite(objTwo.getAttribute('data-card'))){
                if(suiteDecks.includes(objTwo.parentElement.getAttribute('id'))){
                    console.log(cards[objOneIdx].value,cards[objTwoIdx].value)
                    a = cards[objOneIdx].value
                    b = cards[objTwoIdx].value
                    console.log(a-b)
                    if(a-b === -1){
                        if(findSuite(objOne.getAttribute('data-card')) === 'Hearts'){
                            console.log(`appending ${objOneId} to hearts deck`)
                            objOne.style.marginTop = '0'
                            heartsDeckEl.appendChild(objOne)
                            renderFaceUps();
                            return clickedElements = [];
                        }else if(findSuite(objOne.getAttribute('data-card')) === 'Diamonds'){
                            console.log(`appending ${objOneId} to diamonds deck`)
                            objOne.style.marginTop = '0'
                            diamondsDeckEl.appendChild(objOne)
                            renderFaceUps();
                            return clickedElements = [];
                        }else{
                            console.log(`Failed to place card with data ${objOneId} in a red deck`)
                        }
                    }else if(a-b ===1){
                        if(findSuite(objOne.getAttribute('data-card')) === 'Clubs'){
                            console.log(`appending ${objOneId} to hearts clubs`)
                            objOne.style.marginTop = '0'
                            clubsDeckEl.appendChild(objOne)
                            renderFaceUps();
                            return clickedElements = [];
                        }else if(findSuite(objOne.getAttribute('data-card')) === 'Spades'){
                            console.log(`appending ${objOneId} to spades deck`)
                            objOne.style.marginTop = '0'
                            spadesDeckEl.appendChild(objOne)
                            renderFaceUps();
                            return clickedElements = [];
                        }else{
                            console.log(`Failed to place card with data ${objOneId} in a black deck`)
                        }
                    }
                }
            }else if(findSuite(objOne.getAttribute('data-card')) !== findSuite(objTwo.getAttribute('data-card'))){
                a = cards[objOneIdx].value
                b = cards[objTwoIdx].value
                if(objTwo.parentElement.getAttribute('id') === 'face-up-deck'){
                    return clickedElements = [];
                }
                if(findSuite(objOne.getAttribute('data-card'))==='Hearts' || findSuite(objOne.getAttribute('data-card'))==='Diamonds'){
                    console.log(`${objOneId} with value ${a} + ${objTwoValue} with value ${b} = ${a+b}`)
                    if(a+b===1){
                        objOne.style.marginTop = '-70px'
                        objTwo.parentElement.appendChild(objOne);
                        renderFaceUps();
                        return clickedElements = [];
                    }else{
                        return clickedElements = [];
                    }
                }else if(findSuite(objOne.getAttribute('data-card'))==='Clubs' || findSuite(objOne.getAttribute('data-card'))==='Spades'){
                    if(a+b===-1){
                        objOne.style.marginTop = '-70px'
                        objTwo.parentElement.appendChild(objOne);
                        renderFaceUps();
                        return clickedElements = [];
                    }else{
                        return clickedElements = [];
                    }
                }

                return clickedElements = [];
            }
        }
        
    
    
    console.log(clickedElements)
//     console.log(tarEl.getAttribute('data-card'))
//     if(suiteDecks.includes(clickedElements[1].getAttribute('id'))){
//         console.log(tarEl.getAttribute('id'))
// }

        
})    
    
    