import { products } from "./data-parser";

interface ICartProduct {
  id: number;
  amount: number;
}

export interface ICart {
  totalItems: number;
  totalPrice: number;
  products: ICartProduct[];

 addProduct(productId: number): void;
 removeProduct(productId: number): void;
 getCartProductId(productId: number) : number | undefined;
 clear() : void;
}

class Cart implements ICart{
  totalItems: number;
  totalPrice: number;
  products: ICartProduct[];

  constructor() {
    if (localStorage.cart) {
      const localStorageCart = JSON.parse(localStorage.cart);
      this.totalItems = localStorageCart.totalItems;
      this.totalPrice = localStorageCart.totalPrice;
      this.products = localStorageCart.products;
    } else {
      this.totalItems = 0;
      this.totalPrice = 0;
      this.products = [];
    }
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

  getCartProductId(productId: number) : number | undefined {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        return i;
      }
    }
    return undefined;
  }

  clear() : void {
    this.totalItems = 0;
    this.totalPrice = 0;
    this.products = [];
    localStorage.setItem('cart', '');
  }

  removeProductCompletely(id: number) {
    const cartProductId = this.getCartProductId(id);
    if (cartProductId !== undefined) {
      while (this.products[cartProductId] && this.products[cartProductId].id === id) {
        this.removeProduct(id);
      }
    }
  }
}

export const cart = new Cart();
export default cart;