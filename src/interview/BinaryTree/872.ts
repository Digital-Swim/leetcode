import { arrayToTree, TreeNode } from "./tree";


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {

    let queue1 = [], queue2 = [];
    let leaf1 = [], leaf2 = [];

    queue1.push(root1)
    queue2.push(root2)

    while (queue1.length > 0 || queue2.length > 0) {

        if (queue1.length > 0) {
            let node: TreeNode = queue1.pop()!!
            if (!node.left && !node.right) {
                leaf1.push(node.val)
                if (leaf2.length >= leaf1.length) {
                    if (leaf2[leaf1.length - 1] !== leaf1[leaf1.length - 1]) {
                        return false
                    }
                }
            }

            if (node.left) queue1.push(node.left)
            if (node.right) queue1.push(node.right)
        }

        if (queue2.length > 0) {
            let node: TreeNode = queue2.pop()!!
            if (!node.left && !node.right) {
                leaf2.push(node.val)
                if (leaf1.length >= leaf2.length) {
                    if (leaf1[leaf2.length - 1] !== leaf2[leaf2.length - 1]) {
                        return false
                    }
                }
            }
            if (node.left) queue2.push(node.left)
            if (node.right) queue2.push(node.right)
        }

    }

    if(leaf1.length !==  leaf2.length) return false
    //console.log(leaf1, leaf2)

    return true;
};

// Example usage:
const root = arrayToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const root1 = arrayToTree([3, 5, 1, 1, 7, 4, 2, null, null, null, null, null, null, 9, 8])
console.log(leafSimilar(root, root1));
