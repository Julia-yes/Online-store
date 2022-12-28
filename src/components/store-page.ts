import products from "../scripts/data-parser";

export function renderStorePage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = `
    <article class='store__page store'>
      <div class='store__search search'>
        <div class='search__block'>
          <img alt='search' class='search__img' src='../src/assets/img/search3.png'>
          <input type='search' class='search__input' placeholder ='Search product'></input> 
        </div>
      </div>
      <div class='store__main'>
        <aside class='store__filters filter'>
          <div class='filter__item filter__category'>
            <div class='filter__title'>Category</div>
            <div class='filter__area filter__category_area'></div>
          </div>
          <div class='filter__item filter__brand'>
            <div class='filter__title'>Brand</div>
            <div class='filter__area filter__brand_area'></div>
          </div>
          <div class='filter__item filter__price'>
            <div class='filter__title'>Price</div>
            <div class='filter__area filter__area_range filter__range_price'></div>
          </div>
          <div class='filter__item filter__stock'>
            <div class='filter__title'>Stock</div>
            <div class='filter__area filter__area_range filter__range_stock'></div>
          </div>
          <div class='filter__item filter__buttons'>
            <button class='filter__button filter__button_reset button'>Reset filters</button>
            <button class='filter__button filter__button_save button'>Save filters</button>
          </div>
        </aside>
        <section class='store__goods goods'>
          <div class='goods__options'>
            <div class='goods__sorters sorters'>
              <button class='button sorters__button sorters__price sorters__price_low' data-option = "price" data-direction="min">price &#8595;</button>
              <button class='button sorters__button sorters__price sorters__price_high' data-option = "price" data-direction="max">price &#8593;</button>
              <button class='button sorters__button sorters__rating sorters__rating_low' data-option = "rating" data-direction="min">rating &#8595;</button>
              <button class='button sorters__button sorters__rating sorters__rating_high' data-option = "rating" data-direction="max">rating &#8593;</button>
            </div>
            <h2 class='goods__title'>Found: <span class='goods__quantity'>${products.products.length}</span></h2>
            <div class='goods__view view'>
              <div class='view__button'><img alt='grid' class='view__button_img view__button_many' src='../src/assets/img/003-grid-1.png' data-view = "many"></div>
              <div class='view__button'><img alt='grid' class='view__button_active view__button_img view__button_few' src='../src/assets/img/004-menu-1.png' data-view = "few"></div>
            </div>
          </div>
          <div class='goods__area'>
          </div>
        </section>
      </div>
    </article>`
  }
}

export function renderGoodsQuantity() {
  const goodsquantity = document.querySelector('.goods__quantity');
  if (goodsquantity) {
    goodsquantity.innerHTML = `${products.products.length}`;
  }
}