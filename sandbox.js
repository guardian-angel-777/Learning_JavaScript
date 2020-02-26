// JavaScript Basics

//creating variables
const title = 'GOD is Good';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called'+ title +'has'+author+'has'+likes+'likes';

console.log(result);

let result1 = `The blog called ${title} by ${author} has  ${likes} likes`;

console.log(result1);

let html = `
    <h2>${title}</h2>
    <P> ${author}</P>
    <span>This is a Blog has ${likes} likes</span>`;
    console.log(html);

    let ninjas = ['Love','Peace','Forgiveness'];

    console.log(ninjas[1]);

    let random = ['Love', 'Joy', 77 ,88];

    console.log(random);

    let result2 = ninjas.pop();
    console.log(result2);

    let age=null;

    console.log(age,age+3,`the age is ${age}`);
console.log(true, false,"true","false");

let email = `meaedasds.com`;

let res = email.includes('@');
console.log(res);
a = 25;
console.log(a == 25);
console.log(a == 30);
console.log(a != 50);
console.log(a >=  25);


let score = '100';

 score = Number(score);
console.log(score + 1);
console.log(typeof score);
let num;
for (let i = 0; i<=5;i++){
    num=10*i; 
}
console.log(`Number = ${num}`);

const na = ['God','is','good'];

for (let j=0 ;j< na.length ;j++){
    console.log(na[j]);
}

let m = 0;

while(m<5){
    console.log(`in loop ${m}`);
    m++;
}

const abc = ['Love', 'Peace','Hope', 'Joy','Grace'];
let t=0;
while(t<abc.length){
    console.log(abc[t]);
    t++;
}

let p = 3;

do {
    console.log('val of i is:', p);
    p++;
}while(p<3);
const ag = 20 ;
if (ag > 18){
    console.log('You can Vote');
}

const nin = ['Love','Peace','Joy','Hope'];

if(nin.length>3){
    console.log("True Values");
}




//A program to check how strong a password is and provide comments 
const password = 'sasa@ad';

if (password.length >= 12 && password.includes('@')){
    console.log('That password is mighty strong');
} else if (password.length >= 8 || password.includes('@')){
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough');
}
let user = false;
if(!user){
console.log("True")
}

user = !user;
console.log(user);

//Display if the score is equal to 100
const scores = [30,32,32,53,100,32,20];

for(let i= 0; i<scores.length; i++){
    if(scores[i] === 0){
  continue;
    }
    console.log('Your Score', scores[i]);

    if(scores[i] === 100){
        console.log("Congrats, you got the score!");
        break;
    }
}

// function declaration 
function hello(){
    console.log('God is Good');
}
//function expression
const salut = function(){
    console.log('good Day');
};

hello();
salut();

// function to calculate area of a circle
const calc = function(radius){
    return 3.14 * radius**2;
};

console.log(`area =`,calc(2));
console.log(`area =`,calc(10));


// arrow function 

const areaCalc = (radius)=> {
    return 3.14 * radius**2;
}

console.log(`Area of Circle = ` , areaCalc(5.2));

// arrow function in a single line

const circleArea = (radius) => 3.14 * radius**2;
console.log(`Area of Circle = ` , circleArea(20));


// call back Function 
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});


const Cali = (fire)=> {
    let value = "Liquid Nitrogen";
    fire(value);
};

Cali(value => {
    //do something
    console.log(value);
});



//Foreach method 
let Spirit = ['Love','Joy','Peace','Meekness','Faith','Kindness'];

Spirit.forEach(gift => {
console.log(gift);
});

let Friends = ['Aneez','Nick','Sai','Anto'];
const perlog = (person, index) => {
    console.log(index+" - "+`Hello `,person);
}
Friends.forEach(perlog);
/*
// Using foreach and callback to display on the browser

const u1 = document.querySelector('.people');

const people = ['Love','Peace','Joy','Happiness','meekness'];

let html2 = ``;

people.forEach(person=>{
    //creates html template
    html2 += `<li style="color: purple">${person}</li>`;
});
console.log(html2);
u1.innerHTML = html2;
*/

//object literals

let userdata = {
    name: 'melvin',
    age: 22,
    email: 'melvin@javascript.co.in',
    location: 'India',
    blogs: ['Javascript Learning','React js is the best'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user is logged out');
    },
 
    
};

console.log(userdata);
console.log(userdata.name);

user.age = 18;
console.log(userdata.age);

console.log(userdata['location'])
userdata['name'] = 'aneez';
console.log(userdata['name']);

console.log(typeof(userdata));

userdata.login();
userdata.logout();


// Understanding this Keyword

let Book = {
    name: 'The Alchemist',
    author: 'Paulo Coelho',
    rating: 9.5,
    feedback: 'Excelent',
    Links: ['Online Book Store','Kindle'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user is logged out');
        console.log(this);
        //Shows the object inside which it is called
        this.Links.forEach(link=>{
            console.log(link);
        });
    },
 
    
};

Book.logout();
// shows the window object
console.log(this);



//Objects in arrays 

const posts = [
    {title: "JavaScript a must learn language", likes:50},
    {title: "Tricks and tips For JavaScript", likes:70}
];
console.log(posts);


// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 8.8;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const ran = Math.random();
console.log(ran);
console.log(Math.round(ran));
console.log(Math.trunc(ran*100));




// Premitive and Reference datatypes
// Premitive Type (values are stored in two different locations)
let scoreOne = 100;
let scoreTwo = score;
scoreTwo = 88;
console.log(`scoreOne : ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//Reference type both the values point to the same object 
const userOne = {name: 'guardian', age: 22};
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.name = "Nick";
console.log(userOne,userTwo);
