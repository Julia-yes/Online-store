export function renderStorePage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = `<main class = 'main'>Main
    <a href='/product'>Product</a>
  </main>`
  }  
}