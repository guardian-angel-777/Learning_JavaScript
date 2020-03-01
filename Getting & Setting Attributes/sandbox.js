const link = document.querySelector('a');
// getAttributes gets the attribute of the html
console.log(link.getAttribute('href'));
// sets the atribute a value
link.setAttribute('href','https://www.facebook.com');
link.innerText = 'FaceBook website';
//getting the class of tag
const message = document.querySelector('p');
console.log(message.getAttribute('class'));
//changing the class of the tag 
message.setAttribute('class','success');
message.setAttribute('style','color: yellow;');

