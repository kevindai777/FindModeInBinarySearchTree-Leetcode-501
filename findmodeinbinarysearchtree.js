//Objective is to find the mode of a BST, where the mode is the most frequent
//element in the tree

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that maps out all of the frequencies of each node into a hashmap

let map = {}
    
function dfs(node) {
    if (!node) {
        return
    }
    
    if (!map[node.val]) {
        map[node.val] = 1
    } else {
        map[node.val]++
    }
    
    dfs(node.left)
    dfs(node.right)
}
dfs(tree.root)

let max = Math.max(...Object.values(map))
let result = []

for (let key in map) {
    if (map[key] == max) {
        result.push(key)
    }
}