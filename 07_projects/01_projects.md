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