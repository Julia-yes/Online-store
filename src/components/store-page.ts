export function renderStorePage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = `
    <article class='store__page store'>
      <div class='store__search search'>
        <div class='search__block'>
          <img alt='search' class='search__img' src='../img/search3.png'>
          <input type='search' class='search__input' placeholder ='Search product'></input> 
        </div>
      </div>
      <div class='store__main'>
        <aside class='store__filters filter'>
          <div class='filter__item filter__category'>
            <div class='filter__title'>Category</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__brend'>
            <div class='filter__title'>Brend</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__price'>
            <div class='filter__title'>Price</div>
            <div class='filter__range'></div>
          </div>
          <div class='filter__item filter__stock'>
            <div class='filter__title'>Stock</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__buttons'>
            <button class='filter__button button'>Reset filters</button>
            <button class='filter__button button'>Save filters</button>
          </div>
        </aside>
        <section class='store__goods goods'>
          <h2 class='goods__title'>Found: <span class='goods__quantity'></span>
          </h2>
          <div class='goods__options'>
            <div class='goods__sorters sorters'>
              <button class='sorters__button sorters__price sorters__price_low'>price &#8595;</button>
              <button class='sorters__button sorters__price sorters__price_high'>price &#8593;</button>
              <button class='sorters__button sorters__rating sorters__rating_low'>rating &#8595;</button>
              <button class='sorters__button sorters__rating sorters__rating_high'>rating &#8593;</button>
            </div>
            <div class='goods__view view'>
              <div class='view__button view__button_many'></div>
              <div class='view__button view__button_few'></div>
            </div>
          </div>
          <div class='goods__area'>
          </div>
        </section>
      </div>
    </article>
  `
  }  
}