//Getting reference to parent "article"

 const article = document.querySelector('article');

// console.log(article.children);
// converting a collection into an array
// console.log(Array.from(article.children));

Array.from(article.children).forEach(child=>{
    //adding a class to each child
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children);