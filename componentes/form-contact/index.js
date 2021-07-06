function contactForm(el) {
  //   const contactContainer = document.querySelector(".contact-container");
  const contactComponent = document.createElement("div");
  contactComponent.classList = "contact-component";
  contactComponent.innerHTML = `
    <h2 class="contact__title">
        Escribime
    </h2>
    <form class="form">
        <label class="form__label" for="name">NOMBRE
            <input type="text" class="form__input" id="name">
        </label>
        <label class="form__label" for="mail">EMAIL
            <input type="email" class="form__input" id="email">
        </label>
        <label class="form__label" for="message">MENSAJE
            <textarea id="message" class="form__input  form__area"></textarea>
        </label>
        <button class="form__button">Enviar</button>
    </form> 
    `;
  el.appendChild(contactComponent);
}
