const form  = document.querySelector('.signup-form');

//const username = document.querySelector('#username');
form.addEventListener('submit',e => {
    e.preventDefault();
  //  console.log(username.value);
    const name = form.username.value;
    const pattern = /[a-z]{7,}/;
    let result = pattern.test(name);
    console.log(result);
});


if(result){
  console.log('regex test passed :)');  
}
 