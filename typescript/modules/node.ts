export class Node {
  value: number | string;
  next: Node | null;
  domNode: HTMLElement;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
    this.domNode = this.initDomNode();
  }

  initDomNode() {
    const domNode = document.createElement("div");
    domNode.classList.add("node");
    domNode.innerHTML = this.value.toString();
    return domNode;
  }
}