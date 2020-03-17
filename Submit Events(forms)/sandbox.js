const form  = document.querySelector('.signup-form');

//const username = document.querySelector('#username');
form.addEventListener('submit',e => {
  // prevents Default action of the event
    e.preventDefault();
  //  console.log(username.value);
  // logs out the username entered in the form
    console.log(form.username.value);
    
});
