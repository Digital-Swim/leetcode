import { arrayToTree, TreeNode } from "./tree";


function search(root: TreeNode | null, maxParent: number | null = null, goodNodes: number = 0,) {

    if (root == null) {
        return goodNodes
    }

    if (!maxParent) { maxParent = root.val }

    if (root.left) {
        if (root.left.val >= maxParent) {
            goodNodes = goodNodes + 1
        }
        console.log("left", maxParent, root.left.val)
        goodNodes = search(root.left, (root.left.val > maxParent ? root.left.val : maxParent), goodNodes)
    }

    if (root.right) {
        if (root.right.val >= maxParent) {
            goodNodes = goodNodes + 1
        }
        console.log("right", maxParent, root.right.val)
        goodNodes = search(root.right, (root.right.val > maxParent ? root.right.val : maxParent), goodNodes)
    }

    return goodNodes;
}



function goodNodes(root: TreeNode | null): number {

    if (!root) return 0;
    let goodNodes = 1;

    let queue = [];
    queue.push(root)

    while (queue.length > 0) {

        let node: TreeNode = queue.shift()!!

        if (node.left && node.left.val >= node.val) {
            queue.push(node.left)
            goodNodes++
        }
        if (node.right && node.right.val >= node.val) {
            queue.push(node.right)
            goodNodes++
        }

    }

    return goodNodes;

};

const root = arrayToTree([2, null, 4, 10, 8, null, null, 4])

console.log(search(root) + 1)

//console.log(goodNodes(root));
