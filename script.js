const req = document.querySelectorAll('[required]')
const btn = document.querySelector('button')

// Check if each required field is invalid on button press
btn.addEventListener('click', () => {
    req.forEach((item) => {
        if (!item.checkValidity()) {
            item.classList.add('error')
        } else {
            item.classList.remove('error')
        }
    })
})
