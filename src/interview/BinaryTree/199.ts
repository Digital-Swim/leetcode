import { arrayToTree, TreeNode } from "./tree";


function rightSideView(root: TreeNode | null): number[] {

    let currLevel = -1;

    let res: number[] = [];

    function bfs(node: TreeNode | null, level: number) {

        if (!node) return

        if (currLevel < level) {
            res.push(node.val)
            currLevel = level
        }

        bfs(node.right, level + 1)
        bfs(node.left, level + 1)

    }

    bfs(root, 0)
    return res;

};


const root = arrayToTree([1, 2, 3, 4, null, null, null, 5]);

console.log(rightSideView(root));