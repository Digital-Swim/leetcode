import { arrayToTree, TreeNode } from "./tree";

function maxDepth(root: TreeNode | null): number {

    if (!root) return 0;
    let depth = 0;

    let queue = [];
    queue.push(root)

    while (queue.length > 0) {
        depth++;
        let levelsize = queue.length;
        for (let a = 0; a < levelsize; a++) {
            const node: TreeNode = queue.shift()!;
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

    }   

    return depth;
};

// Example usage:
const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root));
