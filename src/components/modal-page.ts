import cart from "../scripts/cart";

export function renderModalPage() {
  const main = document.querySelector('.main');
  const modalPage = document.createElement("section");
  modalPage.className = "modal-page";
  modalPage.innerHTML = `<form class="modal-page__wrapper">
    <h1 class="modal-page__title">Personal information</h1>
    <div class="modal-page__info">
      <label>
        <input type="text" data-name="name" class="modal-page__input modal-page__input_name" placeholder="Name and surname" required>
        <span class="modal-page__error modal-page__error_name"></span>
      </label>
      <label>
        <input type="tel" data-name="tel" class="modal-page__input modal-page__input_tel" placeholder="Phone number" required>
        <span class="modal-page__error modal-page__error_tel"></span>
      </label>
      <label>
        <input type="text" data-name="address" class="modal-page__input modal-page__input_address" placeholder="Delivery address" required>
        <span class="modal-page__error modal-page__error_address"></span>
      </label>
      <label>
        <input type="email" data-name="mail" class="modal-page__input modal-page__input_mail" placeholder="E-mail" required>
        <span class="modal-page__error modal-page__error_mail"></span>
      </label>
    </div>
    <div class="modal-page__card credit-card">
      <h2 class="modal-page__subtitle">Card information</h2>
      <div class="credit-card__wrapper">
        <div class="credit-card__number">
          <div class="credit-card__img">
            <img alt="payment system" class="credit-card__logo" src="../src/assets/img/card.png">
          </div>
          <label>
            <input type="tel" maxlength="16" minlength="16" data-name="num" class="modal-page__input credit-card__input credit-card__input_number" placeholder="Card number" required minlength="16" maxlength="16">
            <span class="modal-page__error modal-page__error_num"></span>
          </label>
        </div>
        <div class="credit-card__card">
          <div class="credit-card__item">
            <span class="credit-card__text">Valid:</span>
            <input type="text" maxlength="5" data-name="valid" class="modal-page__input credit-card__input credit-card__input_small credit-card__input_valid" placeholder="Validity period" required>
            <span class="modal-page__error modal-page__error_valid"></span>
          </div>
          <div class="credit-card__item">
            <span class="credit-card__text">CVV:</span>
            <input type="tel" maxlength="3" data-name="cvv" class="modal-page__input credit-card__input credit-card__input_small credit-card__input_cvv" placeholder="CVV" required minlength="3" maxlength="3">
            <span class="modal-page__error modal-page__error_cvv"></span>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-page__button button">Confirm</button>
  </form>
  `
  main?.append(modalPage);
  const modalArea = document.querySelector(".modal-page");
  modalArea?.addEventListener("click", (e) => {
    if (e.target == modalArea) {
      closeModalPage();
    }
  });
  addListenerForms();
  addListenerCardNumber();
  addListenerValidForm();
  addListenerConfirm();
}

function addListenerValidForm() {
  const validForm = document.querySelector(".credit-card__input_valid");
  validForm?.addEventListener("input", (e) => {addCorrectView(e)})
}

function addCorrectView(e: Event) {
  const value = (e.currentTarget as HTMLInputElement).value;
  if (value.length >= 2) {
    (e.currentTarget as HTMLInputElement).value = `${value.slice(0, 2)}/${value.slice(3)}`
  }
}

export function addListenerButtonBuy() {
  const buttonBuy = document.querySelector(".button__buy");
  buttonBuy?.addEventListener("click", renderModalPage);
}

function addListenerConfirm() {
  const buttonConfirm = document.querySelector(".modal-page__button");
  buttonConfirm?.addEventListener("click", checkCorrectInput)
}

function closeModalPage() {
  const modalPage = document.querySelector(".modal-page");
  modalPage?.remove()
}

function addListenerCardNumber() {
  const cardNumberInput = document.querySelector(".credit-card__input_number");
  cardNumberInput?.addEventListener("input", (e) => {changePaySystem(e)});
}

function changePaySystem(event: Event) {
  const value = (event.currentTarget as HTMLInputElement).value;
  const img = document.querySelector(".credit-card__logo");
  if (img)
  if (value.startsWith("3")) {
    (img as HTMLImageElement).src = "../src/assets/img/card_am.png"
  }
  else if (value.startsWith("4")) {
    (img as HTMLImageElement).src = "../src/assets/img/card-v.png"
  }
  else if (value.startsWith("5")) {
    (img as HTMLImageElement).src = "../src/assets/img/card-m.png"
  }

}

function addListenerForms() {
  const forms = document.querySelectorAll(".modal-page__input");
  forms.forEach(form => {
    form.addEventListener("blur", (e) => {
      validateForms(e)
    })
  })
}

function typeError(text:string | undefined, prop: string) {
  const error = document.querySelector(`.modal-page__error_${prop}`);
  if (error && text) {
    error.innerHTML = text;
  }
}

function typeRight(prop: string) {
  const error = document.querySelector(`.modal-page__error_${prop}`);
  if (error) {
    error.innerHTML = `<img alt="right" class="modal-page__error_img" src="../src/assets/img/right.png">`;
  }
}

// function typeErrorImg(prop: string) {
//   const error = document.querySelector(`.modal-page__error_${prop}`);
//   if (error) {
//     error.innerHTML = `<img alt="right" class="modal-page__error_img" src="../src/assets/img/error.png">`;
//   }
// }

export function validateForms(event: Event) {
  const name = (event.currentTarget as HTMLInputElement).dataset.name;
  const value = (event.currentTarget as HTMLInputElement).value;
  if (name == "name") {
    const result = value.split(" ");
    if (result.length < 2 || result[0].length < 2 || result[1].length < 2) {
      typeError("Error name", name)
    }
    else {
      typeRight(name)
    }
  }
  if (name == "tel") {
    var re = /^[\+][\d\(\)\ -]{9,14}\d$/;
    if (re.test(value)) {
      typeRight(name)
    }
    else {
      typeError("Error phone number", name)
    }
  }
  if (name == "address") {
    const result = value.split(" ");
    if (result.length < 3 || result[0].length < 5 || result[1].length < 5 || result[2].length < 5) {
      typeError("Error address", name)
    }
    else {
      typeRight(name)
    }
  }
  if (name == "mail") {
    var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    if (re.test(value)) {
      typeRight(name)
    }
    else {
      typeError("Error e-mail", name)
    }
  }
  if (name == "num") {
    var re = /^[0-9]{16}/;
    if (re.test(value)) {
      typeRight(name)
    }
    else {
      typeError("Uncorrect number", name)
    }
  }
  if (name == "cvv") {
    var re = /^[0-9]{3}/;
    if (re.test(value)) {
      typeRight(name)
    }
    else {
      typeError("Error", name)
    }
  }
  if (name == "valid") {
    var re = /^(0?[1-9]|1[0-2])\/([0-9]{2})$/;
    if (re.test(value)) {
      typeRight(name)
    }
    else {
      typeError("Error", name)
    }
  }  
}

function checkRequiredInputs() {
  const forms = document.querySelectorAll(".modal-page__input");
  forms.forEach(form => {
    if ((form as HTMLInputElement).value == "") {
      const prop = (form as HTMLElement).dataset.name;
      if (prop)
      typeError("Required", prop);
    }
  })
}

function checkCorrectInput() {
  checkRequiredInputs();
  const modal = document.querySelector(".modal-page__wrapper");
  const errors = document.querySelectorAll(".modal-page__error");
  let errorNum = 0;
  errors.forEach(error => {
    if (error.textContent) {
      errorNum += 1;
    }
  })
  if (errorNum > 0) {
    modal?.classList.add("modal-page__wrapper_wrong")
  }
  else {
    completeOrder()
  }
}

function completeOrder() {
  renderMessageConfirm();
  redirectToMain();
  cart.clear();
}

function renderMessageConfirm() {
  const messageArea = document.querySelector(".main");
  if(messageArea)
  messageArea.innerHTML = `<div class="modal-page__message">Thanks for your order</div>`;
}

function redirectToMain() {
  setTimeout(function(){
    document.location.href="/";
  }, 3000);
}