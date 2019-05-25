//Game values
let min = 1,
  max = 10,
  winningNum = 2, //winning number will change w/ JS function
  guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assigning UI min and max. # value gets called from let vars and selected w/ querySelector
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value); //wrap in parseInt b/c we want a # value, not string value

  //validate - checking that number guessed is between 1-10 & a # is inputted
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!`, 'green');
  } else {
    //if guess wrong #
    guessesLeft -= 1; //same as, guessesLeft = guessesLeft -1
    //checking for the amount of guesses left
    if (guessesLeft === 0) {
      //game over - lost

      gameOver(false, `Game over! Correct number was ${winningNum}`, 'red');
    } else {
      //game continues

      //change border color
      guessInput.style.borderColor = 'red';

      //clear input
      guessInput.value = '';

      //tells user # of guesses left
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

//game over function
//won will take T/F
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red'); //ternary operator, simpliar version of if

  //disable input
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = color;
  //text color
  message.style.color = color;
  //set message
  setMessage(msg);
}

//Setting message and text color
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
