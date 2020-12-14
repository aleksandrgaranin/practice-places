export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEL = document.getElementById('modal-template');
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(this.modalTemplateEL.content, true);
      this.modalElememnt = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');

      const contentElement = document.importNode(this.contentTemplateEl.content, true);

      this.modalElememnt.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modalElememnt)
      document.body.insertAdjacentElement('afterbegin', this.backdropElement)

    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if(this.modalElememnt) {
      document.body.removeChild(this.modalElememnt) // this.modalElement.remove()
      document.body.removeChild(this.backdropElement)
      this.modalElememnt = null; //reset
      this.backdropElement = null;
    }
  }
}