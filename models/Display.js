class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
    // When we add an event to our class with 'this' handler,
    // we have to set the handler's name to handleEvent() and this
    // function has been known by JavaScript by default.
  }

  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCart(product, qty);
    });

    this.calculateTotalPrice();
  }

  createCart(data, qty) {
    const cartEle = document.createElement("div");

    cartEle.innerHTML = this.productImg(data);
    cartEle.innerHTML += this.productInfo(data);

    if (this.constructor.name === "Cart") {
      cartEle.innerHTML += this.productControl(data, qty);
    }

    this.parent.appendChild(cartEle);
  }

  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src=${image} alt=${alt} />`;
    return imgJSX;
  }
}

export default Display;
