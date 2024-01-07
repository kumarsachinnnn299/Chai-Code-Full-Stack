# Projects related to DOM
## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1

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