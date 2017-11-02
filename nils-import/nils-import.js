export class nilsImport extends HTMLElement {
  constructor() {
    super()
  }
  adoptedCallback(oldDocument, newDocument) {
    console.log(oldDocument, newDocument)
    const newWindow = newDocument.defaultView;
    if (newWindow) {
      // newDocument belongs to a window
      const otherConstructor = newWindow.customElements.get(this.localName);

      if (otherConstructor && otherConstructor._isFromPolymer) {
        Object.setPrototypeOf(this, otherConstructor.prototype);

        // Now any customizations that newWindow code has applied to the
        // prototype will apply over here.
      }
    }
  }
  connectedCallback() {
    let section = this.getAttribute('section') || 'head'
    let target = this.getAttribute('target') || 'window'
    if (target === 'window') {
      this.appendMainDocHead(section)
    } else {
      this.appendImportingDocHead(section)
    }
  }
  appendMainDocHead(section){
    window.document[section].innerHTML += this.innerHTML;
  }
  appendImportingDocHead(section){
    document[section].innerHTML += this.innerHTML
  }
}

customElements.define('nils-import', nilsImport);
