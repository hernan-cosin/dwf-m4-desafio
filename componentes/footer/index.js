function footer(el) {
  const footerComponent = document.createElement("div");
  footerComponent.classList = "footer-component";
  footerComponent.innerHTML = `
    <div class="logo-container">
    </div>
    <div class="footer__social-media-container">
        <ul>
            <li><a href="">Instagram<i class="fab fa-instagram"></i></a></li>
            <li><a href="">LinkedIn<i class="fab fa-linkedin"></i></a></li>
            <li><a href="">Github<i class="fab fa-github"></i></a></li>
        </ul>
    </div>
    `;
  const logoContainer = footerComponent.querySelector(".logo-container");
  logo(logoContainer);

  el.appendChild(footerComponent);
}
