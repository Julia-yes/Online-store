import {data} from '../assets/data/data';
import IFilter from './filter'

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
    this.getProductsMetadata();
  }

  getProducts(data: IProduct[]) {
    this.products = [];
    data.forEach((el: IProduct) => {

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

  getProductsMetadata() {
    for (const product of this.products) {
      if (this.priceRange.min === -1 || this.priceRange.min > product.price) this.priceRange.min = product.price;
      if (this.priceRange.min === -1 || this.priceRange.max < product.price) this.priceRange.max = product.price;

      if (!(product.brand in this.brands)) {
        this.brands[product.brand] = [product];
      } 
      else this.brands[product.brand].push(product);

      if (!(product.category in this.categories)) {
        this.categories[product.category] = [product];
      } 
      else this.categories[product.category].push(product);
    }
  }

  getProductById(id: number) {
    return this.products[id - 1];
  }

  applyFilter(filter: IFilter) {
    this.products = this.getProducts(data.products);
    this.brands = {};
    this.categories = {};
    this.priceRange = {
      min: -1,
      max: -1,
    };

    for (let ind = 0; ind < this.products.length; ind++) {
      const el = this.products[ind];


      const removeItem = () => {
        this.products.splice(ind, 1);
        ind--;
      }

      if (filter.category.length) {
        if (!(filter.category.includes(el.category))) {
          removeItem();
          continue;
        }
      }
      
      if (filter.brand.length) {
        if(!(filter.brand.includes(el.brand))) {
          removeItem();
          continue;
        }
      }

      if (filter.price.min !== -1 && el.price < filter.price.min) {
        removeItem();
        continue;
      }
      if (filter.price.max !== -1 && el.price > filter.price.max) {
        removeItem();
        continue;
      }

      if (filter.stock.min !== -1 && el.stock < filter.stock.min) {
        removeItem()
        continue;
      }
      if (filter.stock.max !== -1 && el.stock > filter.stock.max) {
        removeItem();
        continue;
      }
    }

    this.getProductsMetadata();
  }
}

const products = new Products(data.products);

export default products;
