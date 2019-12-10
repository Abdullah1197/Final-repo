/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
   if (gamePlaying) {

       //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
   var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3. update the round score if the rolled number was not a 1
    if (dice !== 1) {
        //Add score
       
        // roundScore = roundScore + dice; // roundScore += dice; these both commands are same.
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    } else {
        //Next Player
        nextPlayer();
    }
   }
            
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    // Add current score to the global
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >= 100) {

document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        gamePlaying = false;  
    
    } else {
    //Next Player
    nextPlayer();        
    }        
  }      
});


function nextPlayer() {
    //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

document.querySelector('.player-0-panel').classList.toggle('active');

document.querySelector('.player-1-panel').classList.toggle('active');
   
 document.querySelector('.dice').style.display = 'none';

            
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
 scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';

document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');

document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');       

document.querySelector('.player-0-panel').classList.add('active');
 
    
}


// Maths.random gives us some randome numbers
// between 0 to 1 and these numbers will be in
// points.
// we want the numbers 1 to 6 so we multiply
// those randome numbers with 6.
// now it gives us some numbers between 0 to 5.
// bbut we want numbers from 1 to 6 
// so we add 1 in math.random.
// even now math.random gives us numbers from 
// 1 to 6 but in points.
// to end up with points, math.floor. 
// this command is used to convert the numbers 
// into whole numbers so finally we get 
// whole numbers from 1 to 6 which we want.

//dice = Math.floor(Math.random() * 6) + 1;


// sector
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

// getter
//var x = document.querySelector('#score-0').textContent;
      
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');


