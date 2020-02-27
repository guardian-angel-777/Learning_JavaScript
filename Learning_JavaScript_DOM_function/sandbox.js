//Working with DOM querySelector
const para = document.querySelector('p');
console.log(para);

const paraTwo = document.querySelector('.error');
console.log(paraTwo);
const paraThree = document.querySelector('div.error');
console.log(paraThree);



//DOM querrySelectorAll

const paras = document.querySelectorAll('p');

console.log(paras);
console.log(paras[2]);

paras.forEach(para=>{
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);


// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get element by their class name
const err= document.getElementsByClassName('error');
console.log(err);
console.log(err[0]);
// get elemene by their tag name
const p = document.getElementsByTagName('p');
console.log(p);
console.log(p[1]);


