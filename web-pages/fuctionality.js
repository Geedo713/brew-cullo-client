const form = document.getElementById("contactForm");

function redirectCall() {
    document.getElementById("submit").addEventListener("submit", function(event) {
      event.preventDefault()
    });
window.location.href = "contact-form-thank-you.html";
}
