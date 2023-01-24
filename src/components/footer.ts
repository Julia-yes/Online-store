import {CreateComponent} from "../components/clases";

export function renderFooter() {
  const footerArea = document.querySelector(".footer"); 
  const content = `<div class="wrapper">
    <div class="footer__inner">
      <div class="footer__left">
        <div class="footer__text">Made by </div>
        <div class="footer__links">
          <a href="https://github.com/Julia-yes" class="footer__link"> Julia Bolonikova & </a>
          <a href="https://github.com/mordobiv" class="footer__link"> &thinsp; Dzmitry Aniskovich</a>
        </div>
        <div class="footer__year">2022</div>
      </div>
      <div class="footer__school">
        <a href="https://rs.school/js/" class="footer__school-name">
          <img alt="rs-school" src="../src/assets/img/rsLogo.svg" class="footer__school-img">
        </a>
      </div>
    </div>
  </div>`
  const footer = new CreateComponent(footerArea, "div", ["wrapper"], content)
}