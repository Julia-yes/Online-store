interface IFilter {
  category: string[];
  brand: string[];
  price: { min: number; max: number; };
  stock: { min: number; max: number; };

  switchCategory(item: string): void;
  switchBrand(item: string): void;
  setPrice(parameter: 'min' | 'max', value: number): void;
  setStock(parameter: 'min' | 'max', value: number): void;
}

class Filter implements IFilter{
  category: string[];
  brand: string[];
  price: { min: number; max: number; };
  stock: { min: number; max: number; };
  constructor() {
    this.category = [];
    this.brand = [];
    this.price = {
      min: -1,
      max: -1,
    };
    this.stock = {
      min: -1,
      max: -1,
    };
  }

  switchCategory(item: string) {
    if (this.category.includes(item)) this.category = this.category.filter(el => el !== item);
    else this.category.push(item);
  }

  switchBrand(item: string) {
    if (this.brand.includes(item)) this.brand = this.brand.filter(el => el !== item);
    else this.brand.push(item);
  }

  setPrice(parameter: 'min' | 'max', value: number) {
    if (parameter === 'min') this.price.min = value;
    else this.price.max = value;
  }

  setStock(parameter: 'min' | 'max', value: number) {
    if (parameter === 'min') this.stock.min = value;
    else this.stock.max = value;
  }
}

export default Filter;