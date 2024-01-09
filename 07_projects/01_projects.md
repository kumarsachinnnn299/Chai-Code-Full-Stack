# Projects related to DOM
## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1  : Color Changer

```JavaScript
const buttons=document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) //ye e jo h event ka object h
  {
    
    console.log(e);
    console.log(e.target);
    //use this small code

    body.style.backgroundColor = e.target.id;

    //or this coditional code which is also same ,just long
    /*
    if(e.target.id=='grey')
    {
       body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='white')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='purple')
    {
      body.style.backgroundColor=e.target.id
    }
    */
  });
});

```

## Project 2  : BMI Calculator
``` Javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); //ye submit button k default behaviour ko rokega

  //agar hum ye height and weight form k bahar lenge to page load hote hi ye values le lenge or tab form m kch bhi values n hone se inme empty value aa jayegi
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please Enter a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please Enter a valid weight';
  } else {
    const BMI = ((weight * 10000) / (height * height)).toFixed(2);

    //showing result
    let bodytype = '';
    if (BMI < 18.6) bodytype = 'Underweight';
    else if (BMI >= 18.6 && BMI <= 24.9) bodytype = 'Normal';
    else bodytype = 'Overweight';
    result.innerHTML = `<span> Your BMI is ${BMI}</span> <br>
    <span> You are ${bodytype}</span>`;
  }
});


```

## Project 3  : Digital Clock

```JavaScript
  const clockbody = document.querySelector('#clock');
//for conitunously runnig of clock
setInterval(function () {
  let dateObj = new Date();
  let time = dateObj.toLocaleTimeString();
  console.log(time);
  clockbody.innerHTML = `<span>${time}</span>`;
}, 1000); //ye ek method lega use ek interval pe continuously chlata rhega, 1000 millisecond h that is 1 second
```

## Project 4  : Number Guessing Game

```JavaScript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a positive number');
  } else if (guess > 100) {
    alert('Please Enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      checkGuess(guess);
      displayMessage(`Game Over!!! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < randomNumber) {
    displayMessage(`Your Guess is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guess is too high`);
  } else {
    displayMessage(`You guessed it right!! The number was : ${randomNumber}`);
    endGame();
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message + ''}</h2>  `;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); //to disable input field
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5  : Color Changer Game
```JavaScript
//Generate random color

const randomColor = function () {
  const hexCode = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangeColor = function () {
  console.log('Inside colorchange start fn');
  if (!intervalId) intervalId = setInterval(changecolor, 500);
  function changecolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log('Inside colorchange stop fn');
};

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);

```
