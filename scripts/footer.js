const createFooter = () => {
  let footer = document.querySelector("#footer");

  footer.innerHTML = `
    <div class="footer-content">
          <img src="/img/proper-logo_Mesa de trabajo 1.png" class="logo" alt="">
          <div class="footer-ul-container">
            <ul class="category">
              <li class="category-title">men</li>
              <li><a href="/pages/product.html" class="category-link">t-shirts</a></li>
              <li><a href="" class="category-link">sweatshirts</a></li>
              <li><a href="" class="category-link">jeans</a></li>
              <li><a href="" class="category-link">shoes</a></li>
              <li><a href="" class="category-link">trousers</a></li>
              <li><a href="" class="category-link">casuals</a></li>
              <li><a href="" class="category-link">formals</a></li>
              <li><a href="" class="category-link">sport</a></li>
              <li><a href="" class="category-link">watch</a></li>
            </ul>

            <ul class="category">
              <li class="category-title">women</li>
              <li><a href="" class="category-link">t-shirts</a></li>
              <li><a href="" class="category-link">sweatshirts</a></li>
              <li><a href="" class="category-link">jeans</a></li>
              <li><a href="" class="category-link">shoes</a></li>
              <li><a href="" class="category-link">trousers</a></li>
              <li><a href="" class="category-link">casuals</a></li>
              <li><a href="" class="category-link">formals</a></li>
              <li><a href="" class="category-link">sport</a></li>
              <li><a href="" class="category-link">watch</a></li>
            </ul>

          </div>
        </div>

        <p class="footer-about">about company</p>
        <p class="footer-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="footer-info">support emails - help@proper.com, customersupport@proper.com</p>
        <p class="footer-info"> telephone: 180 00 00 001, 180 00 00 002</p>
      
        <div class="social-links-container">
          <div class="links">
            <a href="#">terms & services</a>
            <a href="#">privacy page</a>
          </div>
          <div class="social">
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-facebook"></i></a>
          </div>

        </div>
        <p class="footer-credit">Proper, Best Apparels Online Clothes Store © </p>
    `;
};

createFooter();
