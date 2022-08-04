//const form = document.getElementById("contact_form");

function redirectCall() {
    document.getElementById("submit").addEventListener("submit", function(event) {
      event.preventDefault()
    });
    document.getElementById("contact_form").addEventListener("submit", function(e) {
      if(!isValid) {
        alert("Something Happened!");
      } else {
        window.location.href = "index.html";
      }
    });
    /*document.querySelector('#contact_form')
  .addEventListener('submit', () => {
  window.location.href = 'contact-form-thank-you.html';
  });*/
}
