function logo(el) {
  const logoContainer = document.createElement("div");
  logoContainer.classList = "logo";
  logoContainer.innerHTML = `
    <a href="./index.html"><img class="logo__img" src="./media/logo.svg" alt="logo"></a>
    `;
  el.appendChild(logoContainer);
}
