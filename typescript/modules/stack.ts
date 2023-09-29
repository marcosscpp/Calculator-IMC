class Node {
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

export class Stack {
  peek: Node | null;
  size: number;
  stackDomElement: HTMLElement;

  constructor(stackDomElement: HTMLElement) {
    this.peek = null;
    this.size = 0;
    this.stackDomElement = stackDomElement;
  }

  push(value: number | string) {
    const newNode : Node = new Node(value);
    if (!this.peek) {
      this.peek = newNode;
    } else {
      if ((newNode.value === this.peek.value)) return;
      const next = this.peek;
      this.peek = newNode;
      this.peek.next = next;
    }
    this.insertNodeDom(newNode);
    return ++this.size;
  }

  pop() {
    if (!this.peek) return null;
    const popElement = this.peek;
    this.peek = this.peek.next;
    this.size--;
    this.removePeek();
    return popElement.value;
  }

  clear() {
    this.peek = null;
    this.size = 0;
    this.cleanDom();
  }

  cleanDom() {
    this.stackDomElement.innerHTML = "";
  }

  insertNodeDom(node : Node) {
    this.stackDomElement.appendChild(node.domNode);
  }

  removePeek() {
    if (this.stackDomElement.lastElementChild) {
      this.stackDomElement.removeChild(this.stackDomElement.lastElementChild);
    }
  }
}
