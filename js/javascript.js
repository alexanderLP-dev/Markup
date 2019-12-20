"use strict";

class Product {
  constructor(name) {
    this.name = name;
    this.src = "";
    this.price = "";
    this.button = "заказать";
  }

  addToShop() {
    let shop = document.querySelector(".shop");
    let showcase = document.createElement("ul");
    let showcaseLi = document.createElement("li");
    // let h3 = document.createElement("h3");
    // let p = document.createElement("p");
    let showcaseBlock = document.createElement("div");
    showcaseBlock.setAttribute("class", "showcase");
    let imgShop = document.createElement("img");
    let button = document.createElement("button");
    imgShop.setAttribute("src", this.src);

    showcaseBlock.appendChild(imgShop);
    imgShop.innerHTML;
    shop.appendChild(showcaseBlock);
    showcaseBlock.appendChild(showcase);

    showcase.appendChild(showcaseLi);
    showcaseLi.innerText = `${this.name} 
     ${this.price}`;

    showcaseBlock.appendChild(button);
    button.innerHTML = this.button;
    console.log(shop);
  }
}

class Major extends Product {
  constructor(name) {
    super(name);
    this.price = "1790 " + " грн.";
    this.src = "./img/major.png";
  }
}

class Mpde extends Product {
  constructor(name) {
    super(name);
    this.src = "./img/mpde_eq.png";
    this.price = "1350 " + " грн.";
  }
}

class Kburn extends Product {
  constructor(name) {
    super(name);
    this.src = "./img/killburn.png";
    this.price = "960 " + " грн.";
  }
}

let major = new Major("MAJOR II");
let mpde = new Mpde("MPDE");
let kburn = new Kburn("KILBURN");

mpde.addToShop();
kburn.addToShop();
major.addToShop();

// let shopItem = document.querySelector("shop");

// shopItem = [mpde, kburn, major];

// for (let i = 0; i < shopItem.length; i++) {
//   shopItem[i].addToShop();
// }

// console.log(shopItem);
