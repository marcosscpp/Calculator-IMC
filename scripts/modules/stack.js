"use strict";

var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
        this.domNode = this.initDomNode();
    }
    Node.prototype.initDomNode = function () {
        var domNode = document.createElement("div");
        domNode.classList.add("node");
        domNode.innerHTML = this.value.toString();
        return domNode;
    };
    return Node;
}());
var Stack = /** @class */ (function () {
    function Stack(stackDomElement) {
        this.peek = null;
        this.base = null;
        this.size = 0;
        this.stackDomElement = stackDomElement;
    }
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        if (!this.peek) {
            this.peek = newNode;
            this.base = newNode;
        }
        else {
            var next = this.peek;
            this.peek = newNode;
            this.peek.next = next;
            console.log(this.peek);
        }
        this.insertNodeDom(newNode);
        return ++this.size;
    };
    Stack.prototype.pop = function () {
        if (!this.peek)
            return null;
        var popElement = this.peek;
        if (this.peek == this.base) {
            this.base = null;
        }
        this.peek = this.peek.next;
        this.size--;
        this.removePeek();
        return popElement.value;
    };
    Stack.prototype.insertNodeDom = function (node) {
        this.stackDomElement.appendChild(node.domNode);
    };
    Stack.prototype.removePeek = function () {
        if (this.stackDomElement.lastElementChild) {
            this.stackDomElement.removeChild(this.stackDomElement.lastElementChild);
        }
    };
    return Stack;
}());

export default Stack;
