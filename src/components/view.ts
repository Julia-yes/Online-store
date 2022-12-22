const buttonsView = document.querySelectorAll('.view__button_img');
buttonsView.forEach (button => {button.addEventListener('click', (event) => {changeView(event)})});

function changeView(ev: Event) {
  buttonsView.forEach(button => {
    button.classList.remove('view__button_active');
  });
  let activeButton = ev.currentTarget;
  (activeButton as HTMLElement).classList.add('view__button_active');

  const goodsArea = document.querySelector('.goods__wrapper');
  goodsArea?.classList.toggle('goods__wrapper_many');
  
}