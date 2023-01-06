import { insertParam } from "./routing";

export function addListenerForView() {
  const buttonsView = document.querySelectorAll('.view__button_img');
  buttonsView.forEach (button => {button.addEventListener('click', (event) => {
  changeView(event);
  insertParam("view", (event.currentTarget as HTMLElement).dataset.view  as string);
})});
}



function changeView(ev: Event) {
  const buttonsView = document.querySelectorAll('.view__button_img');
  buttonsView.forEach(button => {
    button.classList.remove('view__button_active');
  });
  let activeButton = ev.currentTarget;
  (activeButton as HTMLElement).classList.add('view__button_active');

  const goodsArea = document.querySelector('.goods__area');
  goodsArea?.classList.toggle('goods__area_many');
  const goodsButtons = document.querySelectorAll('.card__button');
  goodsButtons.forEach(button => {
    button.classList.toggle('card__button_small')
  })  
}

export function applyView(prop: string) {
  const goodsArea = document.querySelector('.goods__area');
  const buttonMany =document.querySelector(".view__button_many");
  const buttonFew =document.querySelector(".view__button_few");
  if (prop == "many") {
    goodsArea?.classList.add('goods__area_many');
    buttonFew?.classList.remove("view__button_active");
    buttonMany?.classList.add("view__button_active");

  }
}