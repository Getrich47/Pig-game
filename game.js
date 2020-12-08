

// To start our Game
// STEP 1 - Things to learn Here
/*
1. How to create our fundamental game variables
2. How to generate a random number
3. How to manipulate the DOM
4. How to read the DOM
5. How to change CSS styles
*/

/* We create a variable for scores (most important in this Game)
var scores = [0,0];      //array
var roundScores = 0;      // but we can simplify this 
Note: 0 = 1st player and 1 = 2nd player
*/

                                                 // when we start our game, the game playing variable will be set as true
//1.)
var scores, roundScores, activePlayer, dice, gamePlaying;                   // We also need a variable to tell us the current active player
/*scores = [0,0];
roundScores = 0;
activePlayer = 0; */
init();                 // DRY PRINCIPLE    

/*2.)  Next is the DIce varible such that it will generate a random number, we first need to calculate a random number (like for tossing purpose)
//How to generate random numbers
Math.random();           // displays a random number btw 0 & 1    0.9784752799032965
// to generate a random no btween 1 & 6 for the die
Math.random() * 6;             // displays 4.19838015710557
// to remove the decimals, we make use of 'floor'
Math.floor(Math.random()* 6);         // this works well that is 0-6 , but however, we want btw 1 - 6 (we add + 1) as shown below
Math.floor(Math.random()* 6) + 1;       // displays random btw 1-6,, now we paste this in our JS code
*/

//dice = Math.floor(Math.random() * 6) + 1;                         

//3.) DOM MANIPULATION
// here we wish to manipulate line 16 using the id beside it "score 0" 
//document.querySelector('#current-0').textContent = dice;                 // displays the player 1's score according to dice random value

// We csn use the current variable to do various stuffs
//document.querySelector('#current-' + activePlayer).textContent = dice;
//another way to manipulate our DOM is through innerHTML (ensure the string is there) e.g below, lets add italic
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'    // player 2 (1) content becomes italized

//3.)  HOW TO READ THE DOM
// to use DOM to read only the element  i.e to read the text content below:
/*
var x = document.querySelector('#name-0').textContent;     
console.log(x);                 // displays "Player 1"  bcos thats the id it represents
*/

//4.) HOW TO CHANGE CSS STYLES
//e.g to use DOM CSS to hide the dice when a new game, we locate the dice class pg 39
//document.querySelector('.dice').style.display = 'none';        // outputs hides the dice logo


//EVENTS AND EVENT HANDLING ROLLING THE DICE
/* Things to learn here
1.) How to set up an event handler
2.) What a callback function is - (function that is called back into another function)
3.) what an anonymous function is (function that doesnt have a name and cannot be reused)
4.) Another way to select element by ID (NOTE: in this we dont use the '#',...just input direct)
5.) How to change the image in an <img> element

*/
//1.) To set up an event handler......in this case we want the button to listen to a click & on (the roll the dice button)

/*(document.querySelector('.btn-roll').addEventListener('click', btn());

// a function must accompany the event listener
function btn(){
    // do something here
} // to call our function
 btn();
*/


//4.) Another way to select element by ID = getElmentByID
// to set player 1&2, score 1&2 to  zero using JS rather than JS, to do this take note of their ID's
// lets try to get element by ID (because this one works for ID selectors only)
/*
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';     */


//we can also use an anonumous fuction (function that doesnt have a name and cannot be reused) below: 
// and we dont want to use the function below anywhere else

     
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
//here we define what happens as soon as we click a button
      
      //1. we need a random number as sson as the dice button is clicked
      var dice = Math.floor(Math.random() * 6) + 1;
      
      //2.) display the dice score , such that if you roll 1 =, it will display the dice-1 e.t.c....
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';            // event works! as you click the btn roll, the dice changes randomly

      //3.) Update the round score if the rolled number is not a 1 (qed)
      //below we learn what a ternary operator is and how to remove and toggle HTML classes
      // we use an if statement to achieve this.............note !== does not perform type coersion
      if (dice !== 1){           // then we add the result to our round score
          //add score
          roundScores += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScores;

      }else { 
        nextPlayer();  
    }
    };
      
        // here we use tenary operator
   /*    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;        // output allows 2nd players turn once 1st player hits zero
    // or we use the if statement below;
        /* if (activePlayer === 0){
            activePlayer = 1;
        }else activePlayer = 0
          //next player 
    
       // to enable the player score revert to 0 when he rolls a one without clicking the hold button
    // to do this we set the roundScore to zero
          roundScores = 0;
          document.getElementById('current-0').textContent = '0';           // player 1 score reverts to 0 and next player starts! 
          document.getElementById('current-1').textContent = '0';           // player 2 score reverts to 0 and next player starts!
    // to make the current player visible in the UI (when its his turn play) , to do this using HTML, we remove the "active" tag on line 15
    // to do this using javaScript;     line 15 & line 24
        //  document.querySelector('.player-0-panel').classList.remove('active');     // and we do similar for the next player
        //  document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');   // toggles perfectly when players turn is over
        
        // to add a method to hide the dice as soon as a players turn is over:
        document.querySelector('.dice').style.display = 'none';         //code works!
*/
      


});
// Ray  please always add "." or "#" before the classes & ID's Tag

//                     IMPLEMENTING OUR HOLD FUNCTION AND "DRY" PRINCIPLE, to do this we add an event listener to the hold button
    document.querySelector('.btn-hold').addEventListener('click', function(){             //we also use an anonymous function here......
     if (gamePlaying) {
//HOW TO ACHIEVE THIS     
     //1.)  we add the current score to the global score as soon as btn-hold is pressed
     scores[activePlayer] += roundScores;

     //2/) UPDATE THE UI..............this is updated from score class line 17 & 26
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];    // worked, player score gets updated in the UI
      // but so far the active player isn't isnt changing as we click our hold button, to correct this:
    

     //3.) CHECK IF PLAYER WON THE GAME    ( first player to reach 100) we use if conditions and use DOM to change line 16 & 25 to "player 1 or 2 wins!"
     if (scores[activePlayer] >= 20){
        //document.querySelector('.player-name').textContent = 'Player 1 Wins!'               //wrong!
        // correction
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';         // code shows winner as the any player reaches 100
        // tp hide the dice 
        document.querySelector('.dice').style.display = 'none'; //.......long/not ideal bcos it cant be used for bulky css
        //document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');  // it worked: why i dont know
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');   // worked
        gamePlaying = false;
    } else {     // if its not = 100, we want the next player to continue the game
     
        nextPlayer();
     }
     }
     
            
     
    });

    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScores = 0;
          document.getElementById('current-0').textContent = '0';           
          document.getElementById('current-1').textContent = '0';   
          document.querySelector('.player-0-panel').classList.toggle('active');     // active player class it is highlighted when its your turn
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none'; 
        
    }


//       INITIALIZING OUR GAME FUNCTION  i.e making the new game work
// to do this we create a dom that will listen to a click and add variable will reset to zero
/*
document.querySelector('.btn-new').addEventListener('click', function(){      // commented out bcos we need can also use anoda fxn below:
      
   /* scores = [0,0];
    activePlayer = 0;
    activePlayer = 0;   // but we should stick to DRY here, hence we use init() function
    init();                    //DRY PRINCIPLE   (function called when we want to play a new game) 
});    */

document.querySelector('.btn-new').addEventListener('click', init)    //notice, it is not immediately called 

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;  
    gamePlaying = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';            // all these can be called using init() for new game & 
// to restore a winner back to player 1 or 2  when 'btn-new' i.e new game button is clicked
    document.getElementById('name-0').textContent = 'Player 1';    //works!
    document.getElementById('name-1').textContent = 'Player 2';    //works

// problem: when a player wins & new game is clicked, the active class still shows instead of becoming blank. to solve this, we remove the winner class as shown below:
// referencing 
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');   // worked!
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');        // restores active (class styling) to player 


//LAST STEP:  to stop the dice from rolling and counting after any player has won
   /* First we learn about state variable, how and why we use it
    STATE VARIABLE: tells us the condition of a system and we need it when we need to remember something or the state of state of something
    In this case, we want to know if our game is playing or not playing
    
And we simply declare it in the global scope (that is outside the (variable) ) as gamePlaying
   */

}








/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/