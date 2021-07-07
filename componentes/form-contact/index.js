function contactForm(el) {
  const contactComponent = document.createElement("div");
  contactComponent.classList = "contact-component";
  contactComponent.innerHTML = `
    <h2 class="contact__title">
        Escribime
    </h2>
    <form class="form">
        <label class="form__label" for="name">NOMBRE
            <input name="name" type="text" class="form__input" id="name">
        </label>
        <label class="form__label" for="mail">EMAIL
            <input name="email" type="email" class="form__input" id="email">
        </label>
        <label class="form__label" for="message">MENSAJE
            <textarea name="message" class="form__input  form__area" id="message"></textarea>
        </label>
        <button class="form__button">Enviar</button>
    </form> 
    `;
  el.appendChild(contactComponent);
  formPreventDefault();
}

function formPreventDefault() {
  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensaje = formValues(formEl);

    postData("https://apx-api.vercel.app/api/utils/dwf", {
      to: "hcosin@gmail.com",
      message: mensaje,
    }).then((data) => {
      console.log(data);
    });

    formEl.reset();
  });
}

function formValues(form) {
  var formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const data = `
    "nombre": ${name}, "email": ${email}, "mensaje": ${message};
  `;

  return data;
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json();
}
