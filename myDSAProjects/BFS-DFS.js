class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (currentNode.value > value) {
            // Left
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            // Right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
  
      while (currentNode) {
        if (currentNode.value > value) {
          // Left
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          // Right
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return false;
    }
  
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
  
          //Option 1: No right child:
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
  
                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
  
            //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
  
                //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
  
            //Option 3: Right child that has a left child
          } else {
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
  
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = []; //to keep track of level
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        console.log(list);
        return list;
    }

    breadthFirstSearchR(queue, list) {
        if(queue.length === 0) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }

    DFSInorder() {
      return traverseInorder(this.root, []);
    }

    DFSPreorder() {
      return traversePreorder(this.root, []);
    }

    DFSPostorder() {
      return traversePostorder(this.root, []);
    }

    //To Validate Binary Search Tree
    isValidBST(node, min, max) {
      if(node === null) {
        return true;
      }
      if(node.value <= min || node.value >= max) {
       return false;
      }
      return this.isValidBST(node.left, min, node.value) && this.isValidBST(node.right, node.value, max);
    }

  }

  //Inorder
  function traverseInorder(node, list) {
    if(node.left) {
      traverseInorder(node.left, list);
    }
    list.push(node.value);

    if(node.right) {
      traverseInorder(node.right, list);
    }

    return list;
  }

  //Preorder
  function traversePreorder(node, list) {
    list.push(node.value);

    if(node.left) {
      traversePreorder(node.left, list);
    }

    if(node.right) {
      traversePreorder(node.right, list);
    }
    return list;

  }

  //Postorder
  function traversePostorder(node, list) {
    if(node.left) {
      traversePostorder(node.left, list);
    }

    if(node.right) {
      traversePostorder(node.right, list);
    }

    list.push(node.value);
    return list;

  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  JSON.stringify(traverse(tree.root));
  console.log(tree.lookup(20));
  console.log(tree.DFSInorder());
  console.log(tree.DFSPreorder());
  console.log(tree.DFSPostorder());
  console.log(tree.isValidBST(tree.root, -Infinity, Infinity));
  tree.breadthFirstSearch();
  console.log(tree.breadthFirstSearchR([tree.root], []));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }