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
// Handling click events:

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='Not a Number🙄'
    }else{
        document.querySelector('.message').textContent='Start guessing number'
    }
})
