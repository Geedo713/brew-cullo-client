function sendEmail() {
Email.send({
    Host : "smtp.gmail.com",
    Username : "language.rugs@gmail.com",
    Password : "Mujahideen#!187",
    To : 'webdeveloperplug@gmail.com',
    From : document.getElementById("name").value,
    Subject : "Contact Form Test",
    Body : "Name: " + document.getElementById("name").value 
    + "<br> Email: " + document.getElementById("email").value
}).then(
  message => alert("Message Sent Successfully!")
);
}