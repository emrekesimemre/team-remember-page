let body = document.querySelector('body');
console.log(body);
let button = document.getElementById('switch');

button.addEventListener('click', () => {
  body.classList.toggle('body');
});
