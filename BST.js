// 이진 탐색 트리 구현
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(data) {
    // 새로운 node 생성
    let n = new Node(data, null, null);

    // 트리에 루트 노드가 없다면 생성한 노드가 루트 노드.
    if (this.root === null) {
      this.root = n;
    } else {
      // current에 루트 노드를 가져옴
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      // 자식이 모두 없을 때
      if (node.left === null && node.right === null) {
        return null;
      }
      // 왼쪽 자식이 없을 때
      if (node.left === null) {
        return node.right;
      }

      // 오른쪽 자식이 없을 때
      if (node.right === null) {
        return node.left;
      }

      // 둘다 자식이 있을 때
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  getSmallest(node) {
    let current = node;
    while (!(current.left === null)) {
      current = current.left;
    }
    return current;
  }
}

const bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(15);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(21);
bst.insert(40);

bst.inOrder(bst.getRoot());
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log(bst.find(45));
console.log(bst.find(2));
bst.remove(45);
bst.inOrder(bst.getRoot());
