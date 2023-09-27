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
  base: Node | null;
  size: number;
  stackDomElement: HTMLElement;

  constructor(stackDomElement: HTMLElement) {
    this.peek = null;
    this.base = null;
    this.size = 0;
    this.stackDomElement = stackDomElement;
  }

  push(value: number | string) {
    const newNode = new Node(value);
    if (!this.peek) {
      this.peek = newNode;
      this.base = newNode;
    } else {
      const next = this.peek;
      this.peek = newNode;
      this.peek.next = next;
      console.log(this.peek);
    }
    this.insertNodeDom(newNode);
    return ++this.size;
  }

  pop() {
    if (!this.peek) return null;

    const popElement = this.peek;
    if (this.peek == this.base) {
      this.base = null;
    }

    this.peek = this.peek.next;
    this.size--;
    this.removePeek();
    return popElement.value;
  }

  insertNodeDom(node) {
    this.stackDomElement.appendChild(node.domNode);
  }

  removePeek() {
    if (this.stackDomElement.lastElementChild) {
      this.stackDomElement.removeChild(this.stackDomElement.lastElementChild);
    }
  }
}


