/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_i4ohad4', 'template_p0143lv', '#contact-form', 'uIoy6CEHIFyEy4iTr')
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensagem não enviada, erro no serviço ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)