function footer(el) {
  const footerComponent = document.createElement("div");
  footerComponent.classList = "footer-component";
  footerComponent.innerHTML = `
    <div class="logo-container">
    </div>
    <div class="footer__social-media-container">
        <ul>
            <li><a href="https://www.instagram.com/hernan_cosin/" target="_blank" >Instagram<i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/hernan-cosin/" target="_blank" >LinkedIn<i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/hernan-cosin" target="_blank" >Github<i class="fab fa-github"></i></a></li>
        </ul>
    </div>
    `;
  const logoContainer = footerComponent.querySelector(".logo-container");
  logo(logoContainer);

  el.appendChild(footerComponent);
}
