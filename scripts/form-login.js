const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const loader = document.querySelector('.loader');
const logo = document.querySelector('.logo');


logo.addEventListener('click', () => {
    window.location.href = "/pages/home.html";
});

submitBtn.addEventListener('click', () => {
     if (username.value.length < 3) {
        showAlert('Username must be 3 letters long')

    } else if (password.value.length < 8) {
        showAlert('Password must be 8 letters long');

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