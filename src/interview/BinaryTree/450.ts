import { arrayToTree, TreeNode, treeToArray } from "./tree";


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

    let nodeToDelete: TreeNode | null = null;
    let parentNode: TreeNode | null = null;
    let smallestNode: TreeNode | null = null;
    let parentSmallestNode: TreeNode | null = null;

    console.log("Root: ", treeToArray(root))

    function search(node: TreeNode | null, parent: TreeNode | null) {

        if (!node) return null

        if (node.val == key) {
            parentNode = parent
            return node
        }
        else if (key < node.val) {
            return search(node.left, node)
        }
        else
            return search(node.right, node)

    }

    function searchSmallest(node: TreeNode | null) {

        if (!node?.left) return node

        parentSmallestNode = node

        return searchSmallest(node.left)

    }

    nodeToDelete = search(root, null)

    console.log("to delete: ", treeToArray(nodeToDelete))
    console.log("parent ", treeToArray(parentNode))

    if (!nodeToDelete) return root

    // If node has no children
    if (!nodeToDelete?.left && !nodeToDelete?.right) {
        if (parentNode) {
            let a = parentNode as TreeNode
            if (a.left?.val == key) {
                a.left = null
            } else if (a.right?.val == key) {
                a.right = null
            }
        }
        else {
            root = null
        }
        return root
    }


    if (nodeToDelete.right) {

        parentSmallestNode = nodeToDelete
        smallestNode = searchSmallest(nodeToDelete.right)

        console.log("parent smallest ", treeToArray(parentSmallestNode))
        console.log("smallest ", treeToArray(smallestNode))

        if (smallestNode) {

            if (parentNode) {
                let p = parentNode as TreeNode

                if (p.left?.val == nodeToDelete.val) {
                    p.left = smallestNode
                }

                if (p.right?.val == nodeToDelete.val) {
                    p.right = smallestNode
                }
            } else root = smallestNode


            if (parentSmallestNode) {

                if (parentSmallestNode.val == nodeToDelete.val) {
                    if (parentSmallestNode.right?.val == smallestNode.val) {
                        smallestNode.left = parentSmallestNode.left
                    }
                } else {
                    let ps = parentSmallestNode as TreeNode
                    if (ps.left?.val == smallestNode.val) {
                        ps.left = smallestNode.right
                    }
                    else if (ps.right?.val == smallestNode.val) {
                        ps.right = smallestNode.right
                    }
                }
            }

            if (smallestNode && (parentSmallestNode.val !== nodeToDelete.val)) {
                let a = nodeToDelete;
                smallestNode.left = a.left
                smallestNode.right = a.right
            }

            nodeToDelete = null


        }

    }
    else {
        if (parentNode) {
            let p = parentNode as TreeNode

            if (p.left?.val == nodeToDelete.val) {
                p.left = nodeToDelete.left
            }

            if (p.right?.val == nodeToDelete.val) {
                p.right = nodeToDelete.left
            }
        }
        else root = nodeToDelete.left

        nodeToDelete = null

    }



    return root

};





const arr = [2, 0, 33, null, 1, 25, 40, null, null, 11, 31, 34, 45, 10, 18, 29, 32, null, 36, 43, 46, 4, null, 12, 24, 26, 30, null, null, 35, 39, 42, 44, null, 48, 3, 9, null, 14, 22, null, null, 27, null, null, null, null, 38, null, 41, null, null, null, 47, 49, null, null, 5, null, 13, 15, 21, 23, null, 28, 37, null, null, null, null, null, null, null, null, 8, null, null, null, 17, 19, null, null, null, null, null, null, null, 7, null, 16, null, null, 20, 6];
const bstRoot = arrayToTree(arr);

console.log("Final: ", treeToArray(deleteNode(bstRoot, 33)))