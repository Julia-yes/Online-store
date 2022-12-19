import {data} from '../assets/data/data';

interface IProducts {
  products: IProduct[];
  getProducts(data: IProduct[]): void;
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
  brands: {[key: string]: IProduct[]};
  categories: {[key: string]: IProduct[]};
  priceRange : {min: number, max: number};

  constructor(data: IProduct[]) {
    this.brands = {};
    this.categories = {};
    this.priceRange = {
      min: -1,
      max: -1,
    };
    this.products = this.getProducts(data);
    this.getBrands();
    this.getCategories();
  }

  getProducts(data: IProduct[]) {
    data.forEach((el: IProduct) => {
      if (this.priceRange.min === -1 || this.priceRange.min > el.price) this.priceRange.min = el.price;
      if (this.priceRange.min === -1 || this.priceRange.max < el.price) this.priceRange.max = el.price;

      this.products.push({
        brand: el.brand,
        category: el.category,
        description: el.description,
        discountPercentage: el.discountPercentage,
        id: el.id,
        images: el.images,
        price: el.price,
        rating: el.rating,
        stock: el.stock,
        thumbnail: el.thumbnail,
        title: el.title
      });
    })
    return this.products;
  }

  getProductById(id: number) {
    return this.products[id - 1];
  }

  getBrands() {
    for (const product of this.products) {
      if (!(product.brand in this.brands)) {
        this.brands[product.brand] = [product];
        continue;
      }
      this.brands[product.brand].push(product);
    }
    return this.brands;
  }

  getCategories() {
    for (const product of this.products) {
      if (!(product.category in this.categories)) {
        this.categories[product.category] = [];
      }
      this.categories[product.category].push(product);
    }
    return this.categories;
  }
}

const products = new Products(data.products);

export default products;
