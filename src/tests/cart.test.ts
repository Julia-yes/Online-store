// import {expect, jest, test} from '@jest/globals';
// import cart from "../scripts/cart";
// import products from "../scripts/data-parser";
// import type {Config} from 'jest';

// class LocalStorageMock {
//   store: {};
//   constructor() {
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key: string) {
//     return this.store[key] || null;
//   }

//   setItem(key, value) {
//     this.store[key] = String(value);
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// }

// global.localStorage = new LocalStorageMock;


// // const config: Config = {
// //   verbose: true,
// // };

// // export default config;

// // test('My first test', () => {
// //   expect(Math.max(1, 5, 10)).toBe(10);
// // });

// cart.clear();

// const productId = 1;

// describe('When adding item to cart,', () => {
//   it('contains added item', () => {
//     cart.addProduct(productId);
//     const product = products.getProductById(1);
//     const expected = {
//       totalItems: 1,
//       totalPrice: 549,
//       cartProductId: 1,
//       cartProductAmount: 2
//     }
//     expect(expected.totalItems).toEqual(expected.totalItems);
//   })
// })