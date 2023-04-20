export class CreateComponent {
  element: HTMLElement;

  constructor (
    parentNode: HTMLElement | Element | null = null,
    tag: keyof HTMLElementTagNameMap = "div",
    className : string[] = [],
    content: string | number = "",
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(... className);
    this.element.innerHTML = `${content}`;

    if (parentNode) {
      parentNode.appendChild(this.element)
    }
  }

  destroy(): void {
    this.element.remove();
  }
}