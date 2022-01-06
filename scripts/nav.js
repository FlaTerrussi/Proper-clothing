const CreateNav = () => {
  let nav = document.getElementById("nav");

  nav.innerHTML = ` 
                <div class="nav">
                <img src="/img/proper-logo_Mesa de trabajo 1.png" class="brand-logo" alt="Proper Clothes">
                <div class="nav-items">
                <i class="fas fa-search" id="search-icon"></i>
                <div class="search display-none ">
                    <input type="text"  class="search-box" placeholder="search brand, product">
                    <button class="search-btn"><a class="search-a" href="/pages/search.html">search</a> </button> 
                </div>
                    <a class="user-img">
                    <i class="fas fa-user"></i>
                    <div class="pop-up">
                    <button id="login"> Log In</button>
                    <p> or </p>
                    <button id="signin">Sign In</button>
                    </div>
                    </a>  
                <a href="" class="cart-img"><i class="fas fa-shopping-cart"></i></a> 
                </div>
            </div>

            <input type="checkbox" hidden name="menu" id="menu">
                <label for="menu" class="menu"><i class="fas fa-bars" id="menu-icon"></i></label>
            <ul class="links-container">
                

                <li class="link-item"><a href="home.html" class="link">home</a></li>
                <li class="link-item"><a href="404.html" class="link">woman</a></li>
                <li class="link-item"><a href="404.html" class="link">man</a></li>
                <li class="link-item"><a href="404.html" class="link">kids</a></li>
                <li class="link-item"><a href="404.html" class="link">accesories</a></li>
            </ul>

    `;
};

CreateNav();


//  pop up 

const user = document.querySelector(".user-img");
const popUp = document.querySelector(".pop-up");
const logIn = document.querySelector("#login");
const signIn = document.querySelector("#signin");

user.addEventListener('click', () =>{
    popUp.classList.toggle('toggle');

});

logIn.addEventListener('click', () => {
    window.location.href = "/pages/login.html";
});

signIn.addEventListener('click', () => {
    window.location.href = "/pages/sigup.html";
});