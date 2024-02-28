const arrayProds = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "controle playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const divPaints = document.querySelector("#containerPaintings");
const divActions = document.querySelector("#containerActions");

function createItem(divX, element) {
  console.log({ element });
  const divContainer = document.createElement("div");
  divContainer.className = "divContainer";
  divX.appendChild(divContainer);

  const divImg = document.createElement("div");
  divImg.className = "divImg";
  divContainer.appendChild(divImg);

  const img = document.createElement("img");
  img.className = "img";
  img.src = element.image;
  divImg.appendChild(img);

  const divTxt = document.createElement("div");
  divTxt.className = "divTxt";
  divContainer.appendChild(divTxt);

  const pName = document.createElement("p");
  pName.className = "pName";
  pName.textContent = element.name;
  divTxt.appendChild(pName);

  const pPrice = document.createElement("p");
  pPrice.className = "pPrice";
  pPrice.textContent = element.price;
  divTxt.appendChild(pPrice);
}

function newListProds() {
  for (let index = 0; index < arrayProds.length; index++) {
    const element = arrayProds[index];

    const type = element.type;

    if (type === "Paintings") {
      createItem(divPaints, element);
    }
    if (type === "Action Figures") {
      createItem(divActions, element);
    }
  }
}
newListProds();
