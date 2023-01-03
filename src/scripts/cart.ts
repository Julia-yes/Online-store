import { IProduct } from "./data-parser";

// interface IProductCart extends IProduct {
//   amount: number;
// }

interface ICartItem {
  product: IProduct;
  id: number;
  amount: number;
}

interface ICart {
  products: ICartItem[];
}

class Cart implements ICart{
  products: ICartItem[];

  constructor() {
    this.products = [];
  }

  addProduct(product: IProduct | undefined) {
    if (product) {
      const productId = this._getCartProductId(product);
      if (productId !== undefined) {
        this.products[productId].amount += 1;
        return;
      }
      const cartProduct = {
        product: product,
        amount: 1,
        id: product.id,
      };
      this.products.push(cartProduct);
    }
  }

  removeProduct(product: IProduct | undefined) {
    if (product) {
      const productId = this._getCartProductId(product);
      if (productId !== undefined) {
        if (this.products[productId].amount > 1) this.products[productId].amount--;
        else this.products.splice(productId, 1);
      }
    }
  }

  _getCartProductId(product: IProduct | undefined) {
    if (product) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          return i;
        }
      }
    }
    return undefined;
  }
}

const cart = new Cart();
export default cart;