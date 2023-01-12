import Filter from "../scripts/filter";

describe('When creating filter,', () => {
  it('it contains expected properties', () => {
    const filter = new Filter();

    const expected = {
      category: [],
      brand: [],
      price: {
        min: -1,
        max: -1,
      },
      stock: {
        min: -1,
        max: -1,
      },
      stringSearch: '',
    }
    expect(filter).toEqual(expected);
  })
})

describe('When adding category,', () => {
  it('then category is added', () => {
    const filter = new Filter();
    filter.switchCategory('laptops');
    const expected = ['laptops'];
    expect(filter.category).toEqual(expected);
  })
})

describe('When adding brand,', () => {
  it('then brand is added', () => {
    const filter = new Filter();
    filter.switchBrand('Apple');
    const expected = ['Apple'];
    expect(filter.brand).toEqual(expected);
  })
})

describe('When setting min price,', () => {
  it('then min price is set', () => {
    const filter = new Filter();
    filter.setPrice('min', 100);
    const expected = 100;
    expect(filter.price.min).toEqual(expected);
  })
})

describe('When setting max stock,', () => {
  it('then max stock is set', () => {
    const filter = new Filter();
    filter.setStock('max', 1000);
    const expected = 1000;
    expect(filter.stock.max).toEqual(expected);
  })
})

describe('When setting string search,', () => {
  it('then string search is set', () => {
    const filter = new Filter();
    filter.setStringSearch('iphone');
    const expected = 'iphone';
    expect(filter.stringSearch).toEqual(expected);
  })
})
