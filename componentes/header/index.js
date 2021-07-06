function header(el) {
  const headerSection = document.createElement("section");
  headerSection.classList = "header";

  headerSection.innerHTML = `
  <div class="header__logo-container"></div>
    <nav class="header__nav"> 
        <div class="header__hamburger-close">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul>
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
        <div class="header__hamburger-open">
            <div class="line one"></div>
            <div class="line two"></div>
        </div>
    </nav>
  `;

  const headerLogoContainer = headerSection.querySelector(
    ".header__logo-container"
  );
  logo(headerLogoContainer);
  el.appendChild(headerSection);

  const headerHamburgerClose = document.querySelector(
    ".header__hamburger-close"
  );
  const headerNavUl = document.querySelector(".header__nav ul");
  const headerHamburgerOpen = document.querySelector(".header__hamburger-open");

  headerHamburgerClose.addEventListener("click", () => {
    headerHamburgerClose.style.display = "none";
    headerNavUl.style.display = "inherit";
    headerHamburgerOpen.style.display = "flex";
  });

  headerHamburgerOpen.addEventListener("click", () => {
    headerHamburgerClose.style.display = "flex";
    headerNavUl.style.display = "";
    headerHamburgerOpen.style.display = "none";
  });
}
