export function renderModalPage() {
  const main = document.querySelector('.main');
  let modalPage = document.createElement("section");
  modalPage.className = "modal-page";
  modalPage.innerHTML = `<div class="modal-page__wrapper">
    <h1 class="modal-page__title">Personal information</h1>
    <div class="modal-page__info">
      <label>
        <input type="text" class="modal-page__input modal-page__input_name" placeholder="Name" required>
        <span class="modal-page__error"></span>
      </label>
      <label>
        <input type="tel" class="modal-page__input modal-page__input_tel" placeholder="Phone number" required>
        <span class="modal-page__error"></span>
      </label>
      <label>
        <input type="text" class="modal-page__input modal-page__input_address" placeholder="Delivery address" required>
        <span class="modal-page__error"></span>
      </label>
      <label>
        <input type="email" class="modal-page__input modal-page__input_mail" placeholder="E-mail" required>
        <span class="modal-page__error"></span>
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
            <input type="number" class="credit-card__input credit-card__input_number" placeholder="Card number" required minlength="16" maxlength="16">
            <span class="modal-page__error"></span>
          </label>
        </div>
        <div class="credit-card__card">
          <label>
            <span class="credit-card__text">Valid:</span>
            <input type="number" class="credit-card__input credit-card__input_valid" placeholder="Validity period" required>
            <span class="modal-page__error"></span>
          </label>
          <label>
            <span class="credit-card__text">CVV:</span>
            <input type="number" class="credit-card__input credit-card__input_cvv" placeholder="CVV" required>
            <span class="modal-page__error"></span>
          </label>
        </div>
      </div>
    </div>
    <button class="modal-page__button button">Confirm</button>
  </div>
  `
  main?.append(modalPage);
  const modalArea = document.querySelector(".modal-page");
  console.log(modalArea)
  modalArea?.addEventListener("click", closeModalPage);
}

export function addListenerButtonBuy() {
  const buttonBuy = document.querySelector(".button__buy");
  buttonBuy?.addEventListener("click", renderModalPage);
}


function closeModalPage() {
  const modalPage = document.querySelector(".modal-page");
  modalPage?.classList.add("modal-page__invisible");
}

renderModalPage()