import { products } from "./data-parser";

interface ICartProduct {
  id: number;
  amount: number;
}

interface ICart {
  totalItems: number;
  totalPrice: number;
  products: ICartProduct[];

 addProduct(productId: number): void;
 removeProduct(productId: number): void;
}

class Cart implements ICart{
  totalItems: number;
  totalPrice: number;
  products: ICartProduct[];

  constructor() {
    this.totalItems = 0;
    this.totalPrice = 0;
    this.products = [];
  }

  addProduct(productId: number) : void {
    this.totalItems++;
    const productPrice = products.getProductById(productId)?.price;
    if (productPrice) this.totalPrice += productPrice;

    const cartProductId = this.getCartProductId(productId);
    if (cartProductId !== undefined) {
      this.products[cartProductId].amount++;
    } else {
        this.products.push({
        id: productId,
        amount: 1,
      })
    }
    localStorage.setItem('cart', JSON.stringify(this));
  }

  removeProduct(productId: number) : void {
    this.totalItems--;
    const productPrice = products.getProductById(productId)?.price;
    if (productPrice) this.totalPrice -= productPrice;

    const cartProductId = this.getCartProductId(productId);
    if (cartProductId) {
      this.products[cartProductId].amount--;
    }

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        if (this.products[i].amount > 1) {
          this.products[i].amount--;
        } else {
          this.products.splice(i, 1);
        }
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(this));
  }

  getCartProductId(productId: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        return i;
      }
    }
    return undefined;
  }

  clear() {
    this.totalItems = 0;
    this.totalPrice = 0;
    this.products = [];
    localStorage.setItem('cart', JSON.stringify(this));
  }
}

const cart = new Cart();
export default cart;