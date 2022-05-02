const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  add( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.head) {
      this.head = new Node(data);
    } 

    function addNode(head, data) {
      if (data < head) {
        if (!head.left) {
          head.left = new Node(data);
        } else {
          addNode(head.left, data)
        }
      } else {
        if (!head.right) {
          head.right = new Node(data);
        } else {
          addNode(head.right, data)
        }
      }
    }

    addNode(this.head, data);
  }

  has( data ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    return this.find(data) !== null;
  }

  find( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // let currentData = new Node()
    


    const searchData = (current, data) => {
      
      if (current === null) {
        return null;
      } else if (data < current.data) {
        return searchData(current.left, data)
      } else if (data > current.data){
        return searchData(current.right, data)
      } else {
        return current;
      }
    }

    return searchData(this.head, data);
    

  }

  remove( data ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const removeNode = (node, data) => {
      if (node === null) return null;
      if (node.data === data) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        let tempNode = node.right;

        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.right, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    removeNode(this.head, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let min = this.head
    let currentNode = min;
    let currentData = min.data;

    if (currentNode === null) return null;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
      currentData = currentData.left.data
    }
    return currentData;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let max = this.head
    let currentNode = max;
    let currentData = max.data;
    
    if (currentNode === null) return null;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
      currentData = current.right.data;
    }
    return currentData;
  }
}

module.exports = {
  BinarySearchTree
};