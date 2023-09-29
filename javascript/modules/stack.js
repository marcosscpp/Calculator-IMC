class Node {
    constructor(value) {
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
    constructor(stackDomElement) {
        this.peek = null;
        this.size = 0;
        this.stackDomElement = stackDomElement;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.peek) {
            this.peek = newNode;
        }
        else {
            if ((newNode.value === this.peek.value))
                return;
            const next = this.peek;
            this.peek = newNode;
            this.peek.next = next;
        }
        this.insertNodeDom(newNode);
        return ++this.size;
    }
    pop() {
        if (!this.peek)
            return null;
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
    insertNodeDom(node) {
        this.stackDomElement.appendChild(node.domNode);
    }
    removePeek() {
        if (this.stackDomElement.lastElementChild) {
            this.stackDomElement.removeChild(this.stackDomElement.lastElementChild);
        }
    }
}
