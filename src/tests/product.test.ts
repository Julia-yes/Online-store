import products from "../scripts/data-parser";

describe('When initializing products,', () => {
  it('contains correct key', () => {
    const expectedKeys = ['brands', 'categories', 'priceRange', 'stockRange', 'products']
    expectedKeys.forEach(key => {
      expect(key in products).toBeTruthy();
    })
  })
})

describe('When getting product by id,', () => {
  it('return correct product', () => {
    const expectedProduct = {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    }

    const product = products.getProductById(1);
    expect(expectedProduct).toEqual(product);
  })
})

describe('When searching product by string,', () => {
  it(' then corresponding products are shown', () => {
    const searchString = 'iphone';
    let productsAmount = 0;
    products.products.forEach((el) => {
      expect(JSON.stringify(el).includes(searchString)).toBeTruthy;
      productsAmount++;
    })
    expect(productsAmount).toEqual(products.products.length);
  })
})
