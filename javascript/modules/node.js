export class Node {
    constructor(value) {
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
