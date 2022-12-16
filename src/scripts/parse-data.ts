import {data} from '../assets/data/data';

console.log(data);

interface IProducts {
  products: IProduct[];
  addProduct(data: IProduct): void;
  getProductById(id: number): IProduct;
}

interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

class Products implements IProducts {
  products: IProduct[] = [];

  constructor() {
    this.products = [];
  }

  addProduct(product: IProduct) {
    this.products.push(product);
  }

  getProductById(id: number) {
    return this.products[id - 1];
  }

  filterProducts() {
    
  }
}

class Product implements IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  
  constructor(brand: string, category: string, description: string, discountPercentage: number, id: number, 
    images: string[], price: number, rating: number, stock: number, thumbnail: string, title: string) {
    this.brand = brand;
    this.category = category;
    this.description = description;
    this.discountPercentage = discountPercentage;
    this.id = id;
    this.images = images;
    this.price = price;
    this.rating = rating;
    this.stock = stock;
    this.thumbnail = thumbnail;
    this.title = title;
  }
}

const products = new Products();

data.products.forEach(el => {
  products.addProduct(new Product(el.brand, el.category, el.description, el.discountPercentage, el.id, el.images, 
    el.price, el.rating, el.stock, el.thumbnail, el.title));
  })


export default products;
