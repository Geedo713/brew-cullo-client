const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzBi86FgtMDh3Zftm-vPRIsOyjeeZdUMstVxNq_k4rg3XQhJLY_C6nTR4U83nhAvEc/exec'

   form.addEventListener('submit', e => {
     submitBtn.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitBtn.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitBtn.disabled = false
    }
       )
       form.reset();
   })
  console.log("these nuts fam");
