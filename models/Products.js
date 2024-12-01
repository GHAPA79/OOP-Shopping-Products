import Display from "./Display.js";

class Product extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    const cardEle = document.createElement("div");

    cardEle.innerHTML = this.productImg(data);
    cardEle.innerHTML += this.productInfo(data);

    this.parent.appendChild(cardEle);
  }

  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `
        <div id="product-info">
            <h3>${name}</h3>
            <div>
            <span>$ ${price}</span>
            <button data-id=${id}>+</buttton>
            </div>
        </div>
    `;
    return infoJSX;
  }

  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }

  addToCart(id) {
    const product = this.products.find((item) => item.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Product;
