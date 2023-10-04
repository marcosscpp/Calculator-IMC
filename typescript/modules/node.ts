export class Node {
  value: number | string;
  next: Node | null;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }

  domNode() {
    const domNode = document.createElement("li");
    domNode.classList.add("node");
    domNode.innerHTML = this.value.toString();
    return domNode;
  }
}