//defining Variables
let min = 1,
    max = 10,
    winningNum = number(min, max),
    guesses = 3;

//dom extraction

const gameWrap = document.querySelector('#game'),
  minimumValue = document.querySelector('#min-val'),
  maximumValue = document.querySelector('#max-val'),
  numberInput = document.querySelector('#g-input'),
  subBtn = document.querySelector('#btn'),
  message = document.querySelector('.msg');

//defining the random winning number function.

function number(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//add values to the minimum and maximum

minimumValue.textContent = min;
maximumValue.textContent = max;

//add event listeners to the submit btn

subBtn.addEventListener('click', guessedResults);

//add a play again event listener
gameWrap.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();

  }
})

//define guessed results function

function guessedResults() {
  let guess = parseInt(numberInput.value);

  //validating the number
  if (isNaN(guess) || guess < min || guess > max) {
    resultsDisplay(`${guess} is not valid, please enter a No between ${min} and ${max}`, 'red');
    numberInput.value = ''
  }
  else {

    if (guess === winningNum) {
    numberInput.disabled = true;
    gameOver(true, `${winningNum} was the correct number you win`)
  } 

  else {
    guesses -= 1

    if (guesses === 0) {
      numberInput.disabled = true;
      gameOver(false, `Game over you lost, ${winningNum} was the correct guess`)
    }
    else {
      numberInput.value = ''
      resultsDisplay(`Wrong you have got ${guesses} guesses left, try again`, 'red')
    }
  } 
  }
}

//define results display function
function resultsDisplay(msg, color) {
  message.textContent = msg;
  message.style.color = color; 
}
     
// define the gameover function
function gameOver(win, msg) {
  let color;

  win ? color = 'green' : color ='red'

  message.textContent = msg;
  message.style.color = color
  numberInput.style.borderColor = color
  
  subBtn.value = 'Play Again'
  subBtn.className = 'play-again'
}



