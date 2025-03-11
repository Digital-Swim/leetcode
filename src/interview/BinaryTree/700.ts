import { arrayToTree, TreeNode } from "./tree";


function searchBST(node: TreeNode | null, val: number): TreeNode | null {

    if (!node) return null

    if (node.val == val) {
        return node
    }

    return val < node.val ? searchBST(node.left, val) : searchBST(node.right, val)

};


const root = arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

console.log(searchBST(root, 12));