export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// Function to insert a value into the BST
function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

// Function to build a BST from an array
export function createBSTFromArray(arr: number[]): TreeNode | null {
    if (arr.length === 0) return null;

    let root: TreeNode | null = null;
    for (let num of arr) {
        root = insertIntoBST(root, num);
    }

    return root;
}

