function getDataServices() {
  fetch(
    "https://cdn.contentful.com/spaces/pf2bymbjat56/environments/master/entries?access_token=k8KcxLMhYxYxhX27hNbM6jAh98Yk6YBmz9xdX3URhyo&content_type=service"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      cloneAndDisplayServices(res);
    });
}

function cloneAndDisplayServices(data) {
  for (const s of data.items) {
    const servicesContainer = document.querySelector(".services-container");
    const servicesTemplate = document.querySelector("#services-card__template");

    const clone = servicesTemplate.content.cloneNode(true);
    const servicesCardImg = clone.querySelector(".services-card__img");
    const servicesCardTitle = clone.querySelector(".services-card__title");
    const servicesCardDescription = clone.querySelector(
      ".services-card__description"
    );
    const servicesCardLink = clone.querySelector(".services-card__link");

    servicesCardImg.src = getImg(data, s.fields.img.sys.id);
    servicesCardTitle.textContent = s.fields.title;
    servicesCardDescription.textContent = s.fields.description;

    servicesContainer.appendChild(clone);
  }
}

function getImg(data, id) {
  const sEl = data.includes.Asset.find((s) => {
    return s.sys.id == id;
  });
  return sEl.fields.file.url;
}

function main() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);

  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);
  getDataServices();
}

main();
