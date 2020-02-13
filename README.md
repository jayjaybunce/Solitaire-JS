# Solitaire in native JS
## Building classic solitaire in HTML,CSS and vanilla JS. 

### It's been a goal of mine to write a browser game in native JavaScript for several years, now my skill-set allows for that. This small project was an incredible amount of fun to plan, work through and improve on. Version one contaiend two listeners, one to track the clicks of all cards NOT in the left face up deck, and one to to track the cards in the left deck. After attempting to squash several bugs, I realized that these two listeners were operating in a way I didnt expect. After several hours of trying to remedy the issues caused by my lack of experience, I decided to rewrite the listeners all together into one more planned, setup and smooth listener. After taking time to plan out every rule, and decide on an order, I got to work on the new listener and logic base. I finished up and that was Version 2, but it didnt FEEL lik solitaire. I decided to then implement drag-and-drop, which was a bit of a beast in my mind, but after the conversion took a little over an hour, I realized I had made it a monster. 
</p>

## Take a look below for some previews of what to expect in Solitaire V3.0: 
![alt text](gameboard.png)
![alt text](gameboardstarted.png)
![alt text](gameboardprogress.png)
![alt text](gamewin.png)



## How To Play:
#### If you aren't well experienced in classic Solitaire, the main objective is to get all of the cards, face up in stacks starting with King on the very bottom, followed by Queen, Jack, 10 and so on. You can't just get all the cards in any order, the color of the card must be opposite the one below it. IE, placing a Queen of Hearts on a King of Diamonds would not work. The suite decks on the right can be used to move cards of the same order in ascending order (Ace down first, then 2, 3 and so on.) to free up space for other cards.


# You can play here: https://jayjaybunce.github.io/Solitaire-JS/ 
## Enjoy and please report any bugs or issues you have with the game





# Planned Features
* ### Improve King drag and drop, sometimes the column area won't accept the intended King Placement
* ### More theme options, including more cardbacks and backgrounds
* ### Change the theme of the card style
* ### Add Auto-Complete, when all cards are face-up, shuffle them over to the right-hand decks
* ### Add undo button, to undo the previous move!
<hr>
<hr>

## Planning - Wireframe and Psuedocode
![alt text](wireframe.png)
1. Define required constants - and create card objects based on information found in array using class CARDS
    * 1 Using suite, color, value , a qunique name and unique id, create objects for later comparison
        * 1 For exampls, when using this method. I can finda match between Black Queen of Spades by assigning it a vlaye of 12, because the Red Jask of Diamonds will have a value of -11. I will subtract the absolute value of card a from the absolute value of card b, and check to see i the reults has an absolute value of 1.
2. Define required state variables - arrays will begin as empty, but hold the card information for each card, asd well as its placement on the board
    * 1 Let columnOneCards = [] We can then access the last card on the array, for example when checking for matches by: columneOneCards = [columnOneCards.length -1]
    * 2 Create a deck array, that will store the remaining cards
3. Upon loading, the app should do the following
    * 1 Initialize start variables
        * 1 Take cards array, and shuffle the order - Used before to shuffle cards for memory game
        * 2 Create objects using class CARDS
    * 2 Render gameboard ('div#gameBoard')
    * 3 Use created objects to render a decreasing number of cards in each column array
    * 4 Find the last card in each colum array, and set to active and re-render those to be face-up - changing their inner html using interpolation and the name of the card.
        * 1 I can set each img outside the game, so I can predict the name of the img, and inject it or remove it as necessary
    * 5 Check all face up cards for any possible matches (any cards that have a lower value, and an opposite color)
    * 6 Wait fro the player to click something
4. When a player clicks a card
    * 1 On the first click, do nothing
    * 2 On the second click, move the card to the array where the match has been found. Array.pop and array.push to update colum arrays as neccesary
    * 3 Render the page given the information in the column arrays.
    * Upon the case where a column, is empty. Any card can be placed in the empty column. By using pop and push, we will be updating the arrays after every move. 



