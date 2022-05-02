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

    function findNode( head, data ) {
      if (head.data === data) {
        return head;
      } else if ( data < head.data ) {
        findNode( head.left, data);
      } else if ( data > head.data ) {
        findNode( head.right, data);
      } else {
        return false;
      }
    }
    findNode( this.head, data );
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};