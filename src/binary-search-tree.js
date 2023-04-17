const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      this.insertNode(this._root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) return node.left = newNode;
      return this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) return node.right = newNode;
      return this.insertNode(node.right, newNode)
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.search(this._root, data);

    // let currentData = new Node()

    // const searchData = (current, data) => {

    //   if (current === null) {
    //     return null;
    //   } else if (data < current.data) {
    //     return searchData(current.left, data)
    //   } else if (data > current.data) {
    //     return searchData(current.right, data)
    //   } else {
    //     return current;
    //   }
    // }

    // return searchData(this.head, data);
  }
  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }
  removeNode(node, key) {
    if (node === null)
      return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  min() {
    let max = this._root
    let currentNode = max;
    let currentData = max.data;

    if (currentNode === null) return null;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
      currentData = currentNode.data;
    }
    return currentData;
  }

  max() {
    let max = this._root
    let currentNode = max;
    let currentData = max.data;

    if (currentNode === null) return null;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
      currentData = currentNode.data;
    }
    return currentData;
  }
}

module.exports = {
  BinarySearchTree
};