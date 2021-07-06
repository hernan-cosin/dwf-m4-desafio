function getDataWellcome() {
  fetch(
    "https://cdn.contentful.com/spaces/pf2bymbjat56/environments/master/entries?access_token=k8KcxLMhYxYxhX27hNbM6jAh98Yk6YBmz9xdX3URhyo&content_type=wellcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cloneAndDisplayWellcome(res);
    });
}

function cloneAndDisplayWellcome(data) {
  for (const w of data.items) {
    const wellcomeTemplate = document.querySelector("#wellcome__template");
    const wellcomeHgroupContainer = document.querySelector(".wellcome__hgroup");

    let clone = wellcomeTemplate.content.cloneNode(true);
    const hgroupTitle = clone.querySelector(".wellcome__hgroup__title");
    const hgroupSubtitle = clone.querySelector(".wellcome__hgroup__subtitle");
    hgroupTitle.textContent = w.fields.wellcomeTitle;
    hgroupSubtitle.textContent = w.fields.wellcomeSubtitle;
    wellcomeHgroupContainer.appendChild(clone);
  }
}

function getDataAbout() {
  fetch(
    "https://cdn.contentful.com/spaces/pf2bymbjat56/environments/master/entries?access_token=k8KcxLMhYxYxhX27hNbM6jAh98Yk6YBmz9xdX3URhyo&content_type=about"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cloneAndDisplayAbout(res);
    });
}

function cloneAndDisplayAbout(data) {
  for (const a of data.items) {
    const aboutContainer = document.querySelector(".about");
    const aboutTemplate = document.querySelector("#about__template");
    let clone = aboutTemplate.content.cloneNode(true);
    const aboutImg = clone.querySelector(".about__img");
    const aboutTitle = clone.querySelector(".about__title");
    const aboutText = clone.querySelector(".about__text");
    aboutImg.src = getImg(data, a.fields.aboutImg.sys.id);
    aboutTitle.textContent = a.fields.aboutTitle;
    aboutText.textContent = a.fields.aboutText;
    aboutContainer.appendChild(clone);
  }
}

function getDataServices() {
  fetch(
    "https://cdn.contentful.com/spaces/pf2bymbjat56/environments/master/entries?access_token=k8KcxLMhYxYxhX27hNbM6jAh98Yk6YBmz9xdX3URhyo&content_type=service"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cloneAndDisplayServices(res);
    });
}

function cloneAndDisplayServices(data) {
  for (const s of data.items) {
    const servicesContainer = document.querySelector(".services__container");
    const serviceTemplate = document.querySelector("#service-template");
    let clone = serviceTemplate.content.cloneNode(true);
    const serviceImg = clone.querySelector(".service__img");
    const serviceTitle = clone.querySelector(".service__title");
    const serviceText = clone.querySelector(".service__text");
    serviceImg.src = getImg(data, s.fields.img.sys.id);
    serviceTitle.textContent = s.fields.title;
    serviceText.textContent = s.fields.description;

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
  const headerContainer = document.querySelector(".header__container");
  header(headerContainer);
  const contactContainer = document.querySelector(".contact-container");
  contactForm(contactContainer);
  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);

  getDataWellcome();
  getDataServices();
  getDataAbout();
}

main();
