const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
const errorMsg = document.querySelector('.error-msg')

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

btn.addEventListener('click', () => {
    if (!validateEmail(input.value)) {
        input.classList.add('error')
        errorMsg.classList.add('active')
    } else {
        input.value = ''
    }
    
})