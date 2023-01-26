'use strict';
/**
 * 

// Selecting a element
const data=document.querySelector('.between');
console.log(data.textContent);

// document.querySelector('.label-score').textContent='🎆Marks:';

// Manipulate values
document.querySelector('.number').textContent='13';
document.querySelector('.score').textContent='10';

const val=document.querySelector('.guess').value=27;
console.log(val);
 */
// Math : for math method, trunc : to avoid decimal numbers, random: mehthod to take any random value, +1: to add value one after trunc method.
let secretNumber = Math.trunc(Math.random() * 20) + 1; // for taking random value to guess actual number
let score = 20;
let highScore=0;
const displayMessage=function(message){
  document.querySelector('.message').textContent =message;
}
// Handling click events:
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'Not a Number🙄';
    displayMessage('Not a Number🙄');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Congratulations🤑';
    displayMessage('Congratulations🤑');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.backgroundColor='#FFFF00';
    document.querySelector('.number').textContent = secretNumber;
    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
    
    
  } else if (guess!= secretNumber) {
    
    //    let scoreDecrease= document.querySelector('.score').innerHTML-1;
    //    document.querySelector('.score').textContent=scoreDecrease;
    // score -= 1;
    if (score > 1) {
        // document.querySelector('.message').textContent = (guess>secretNumber)?'Number is high':'Number is low';
        displayMessage((guess>secretNumber)?'Number is high':'Number is low');
        document.querySelector('.score').textContent = score;
        score--;
      
    } else {
        document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = 'Lose the Game';
      displayMessage('Lose the Game');
      
    }
  }
//    else {
    
//     // let scoreDecrease= document.querySelector('.score').innerHTML-1;
//     // document.querySelector('.score').textContent=scoreDecrease;
//     score -= 1;
//     console.log(score);
//     if (score > 0) {
        
//         document.querySelector('.score').textContent = score;
//         document.querySelector('.message').textContent = 'Number is low';
//       } else {
//         document.querySelector('.score').textContent = score;
//         document.querySelector('.message').textContent = 'Lose the Game';
//       }
//   }
});
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/ 
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    document.querySelector('.number').innerHTML='?';
    document.querySelector('.score').textContent=score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.backgroundColor='#eee';
    document.querySelector('.guess').value='0';
})