function getDataPortfolio() {
  fetch(
    "https://cdn.contentful.com/spaces/pf2bymbjat56/environments/master/entries?access_token=k8KcxLMhYxYxhX27hNbM6jAh98Yk6YBmz9xdX3URhyo&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      cloneAndDisplayPortfolio(res);
    });
}

function cloneAndDisplayPortfolio(data) {
  for (const p of data.items) {
    const portfolioContainer = document.querySelector(".portfolio-container");
    const portfolioTemplate = document.querySelector(
      "#portfolio-card__template"
    );

    const clone = portfolioTemplate.content.cloneNode(true);
    const portfolioCardImg = clone.querySelector(".portfolio-card__img");
    const portfolioCardTitle = clone.querySelector(".portfolio-card__title");
    const portfolioCardDescription = clone.querySelector(
      ".portfolio-card__description"
    );
    const portfolioCardLink = clone.querySelector(".portfolio-card__link");

    portfolioCardImg.src = getImg(data, p.fields.portfolioImg.sys.id);
    portfolioCardTitle.textContent = p.fields.portfolioTitle;
    portfolioCardDescription.textContent = p.fields.portfolioDescription;
    portfolioCardLink.href = p.fields.portfolioLink;
    portfolioCardLink.textContent = p.fields.portfolioLink;

    portfolioContainer.appendChild(clone);
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
  getDataPortfolio();
}

main();
