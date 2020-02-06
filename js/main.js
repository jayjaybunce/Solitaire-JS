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
// FUNCTION EXPRESSIONS // 
const createCard = (varname,dataId,name) => {
    varName = document.createElement('div');
    varName.setAttribute('data-id',dataId);
    varName.textContent = name;
    console.dir(varName)
    bodyEl.appendChild(varName);
}


// CACHED ELEMENTS HERE
const bodyEl = document.querySelector('body')


// FORMAT objects in cardArray as follows
// {suite: "clubs",color:"black",face:"Jack",value:"10",name:'bjclubsten'},
let cardArray = [
    {suite: "clubs",color:"black",face:"Jack",value:10,name:'blackjackclubs'},
    {suite: "hearts",color:"red",face:"King",value:10,name:'redheartsking'},
    {suite: "clubs",color:"black",face:"Queen",value:10,name:'blackqueenclubs'},
    {suite: "clubs",color:"black",face:"10",value:10,name:'blacktenclubs'},
    {suite: "hearts",color:'red', face: '2',value: -2,name:'redtwohearts'}
]


cardArray.forEach(function(card,index){
    window[card.name] = new CARD(card.suite,card.color,card.face,card.value,card.name);
    createCard(window[card.name],card.value,card.name)
    
})


// match based on the absolute value of each matchup; Red Cards have 
// negative values, matching with a black card, whose value is positive
// will result in a -1. A black card matching with a lower value red card 
// will result in a positive 1. If we check for absolute value === 1
// we will find matches
//
// how do we relate that and take further steps?

let objs = [
    {card:'King Hearts',value: -13},
    {card:'King Clubs',value: 13},
    {card:'King Spades',value: 13},
    {card:'King Diamonds',value: -13},
    {card:'Queen Hearts',value: -12},
    {card:'Queen Clubs',value: 12},
    {card:'Queen Spades',value: 12},
    {card:'Queen Diamonds',value: -12},
    {card:'Jack Hearts',value: -11},
    {card:'Jack Clubs',value: 11},
    {card:'Jack Spades',value: 11},
    {card:'Jack Diamonds',value: -11},
    {card:'10 Hearts',value: -10},
    {card:'10 Clubs',value: 10},
    {card:'10 Spades',value: 10},
    {card:'10 Diamonds',value: -10},
    {card:'9 Hearts',value: -9},
    {card:'9 Clubs',value: 9},
    {card:'9 Spades',value: 9},
    {card:'9 Diamonds',value: -9},
    {card:'8 Hearts',value: -8},
    {card:'8 Clubs',value: 8},
    {card:'8 Spades',value: 8},
    {card:'8 Diamonds',value: -8},
    {card:'7 Hearts',value: -7},
    {card:'7 Clubs',value: 7},
    {card:'7 Spades',value: 7},
    {card:'7 Diamonds',value: -7},
    {card:'6 Hearts',value: -6},
    {card:'6 Clubs',value: 6},
    {card:'6 Spades',value: 6},
    {card:'6 Diamonds',value: -6},
    {card:'5 Hearts',value: -5},
    {card:'5 Clubs',value: 5},
    {card:'5 Spades',value: 5},
    {card:'5 Diamonds',value: -5},
    {card:'4 Hearts',value: -4},
    {card:'4 Clubs',value: 4},
    {card:'4 Spades',value: 4},
    {card:'4 Diamonds',value: -4},
    {card:'3 Hearts',value: -3},
    {card:'3 Clubs',value: 3},
    {card:'3 Spades',value: 3},
    {card:'3 Diamonds',value: -3},
    {card:'2 Hearts',value: -2},
    {card:'2 Clubs',value: 2},
    {card:'2 Spades',value: 2},
    {card:'2 Diamonds',value: -2},
    {card:'A Hearts',value: -1},
    {card:'A Clubs',value: 1},
    {card:'A Spades',value: 1},
    {card:'A Diamonds',value: -1},
]



