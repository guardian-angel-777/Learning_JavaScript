const para = document.querySelector('p');

//innerText is the property name
console.log(para.innerText);
//replaces the first p text with the message below  
para.innerText = 'God so loved the world he gave his only beloved son'

//This replaces the all the html text to XXXXXXXXXXXXXX
const paras = document.querySelectorAll('p');
paras.forEach(para=> {
    console.log(para.innerText);
    para.innerText = 'XXXXXXXXXXXXXX'
});

//Takes the content class HTML and changes it
const content = document.querySelector('.content');
console.log(content.innerHTML);

//it overwrites the content
content.innerHTML += '<h2> THIS IS THE NEW REPLACEMENT CONTENT </h2>';

const people = ['Anto','Nick','Sri','Aneez'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});