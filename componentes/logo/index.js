function logo(el) {
  const logoContainer = document.createElement("div");
  logoContainer.classList = "logo";
  logoContainer.innerHTML = `
    <img class="logo__img" src="./media/logo.svg" alt="logo">
    `;
  el.appendChild(logoContainer);
}
