const url = 'https://script.google.com/macros/s/AKfycbxkW8kKw2JOYSNoqimI9tolLbHAsisdOywxQ03C8wQ3J256sqZjwDDIJjNnp6rMSSrnfA/exec';
const form = document.querySelector('form');
const btn = document.querySelector('button');
const email = document.getElementById("email");
const phoneNumber = document.getElementById("email");
form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Submitting...";
    console.log(form);
    fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response => { 
        btn.disabled = false;
        btn.innerHTML = "Submit";
        email.innerHTML = "";
    phoneNumber.innerHTML = "";
        alert('Thanks to your commitment to our cause!', response)})
    .catch(error => alert('Error!', error.message))
})
