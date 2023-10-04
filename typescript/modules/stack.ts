import { Node } from "./node.js";

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
    const newNode: Node = new Node(value);
    if (!this.peek) {
      this.peek = newNode;
    } else {
      if (newNode.value === this.peek.value) return;
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
    return popElement.value;
  }

  clear() {
    this.peek = null;
    this.size = 0;
    this.cleanDom();
  }

  cleanDom() {
    this.stackDomElement.innerHTML = "";
    localStorage.clear();
  }

  insertNodeDom(node: Node) {
    this.stackDomElement.appendChild(node.domNode());
    localStorage.setItem("history", JSON.stringify(node));
  }

  recoveryData() {
    if (localStorage.length) {
      const history: string = localStorage.getItem("history") as string;
      let historyObject: Node | null = JSON.parse(history);
      this.peek = historyObject;
      do {
        if (historyObject) {
          this.stackDomElement.innerHTML +=
            "<li class='node'>" + historyObject.value + "</li>";
            historyObject = historyObject?.next;
        }
      } while (historyObject);
    }
  }
}
