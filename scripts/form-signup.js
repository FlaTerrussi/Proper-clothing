
const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('#submit-btn');
const inputName = document.querySelector("#name");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('.terms-and-cond');
const notification = document.querySelector('.mails_input');
const logo = document.querySelector('.logo');


logo.addEventListener('click', () => {
    window.location.href = "/index.html";
});


submitBtn.addEventListener('click', () => {
    if(inputName.value.length < 3) {
        showAlert('Name must be 3 letters long');
    } else if (!email.value.length) {
        showAlert('Enter your email');

    } else if (password.value.length < 8) {
        showAlert('Password must be 8 letters long')

    } else if (username.value.length < 3) {
        showAlert('Username must be 3 letters long');

    } else if (!number.value.length) {
        showAlert('Enter your phone number');

    } else if (!Number(number.value) || number.value.length < 10)  {
        showAlert('Invalid number, please enter valid one');
    } else if (!tac.checked) {
        showAlert('you must agree to ours terms and conditions');
    } else {
        // submit form
        loader.style.display= 'block';
        setTimeout(() => {
            loader.style.display= 'none';
        }, 3000);
    }
});

// alert function 
const showAlert = (msg) => {
    let alertBox = document.querySelector(".alert_container");
    let alertMsg = document.querySelector("#alert_msg");
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);

}
