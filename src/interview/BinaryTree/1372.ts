import { arrayToTree, TreeNode } from "./tree";




function longestZigZag(root: TreeNode | null): number {

    let max = 0

    dfs(root, 0, 0)

    return max
    function dfs(node: TreeNode | null, dir: number, sum: number) {

        if (!node) return

        dfs(node.left, -1, dir < 0 ? 1 : sum + 1)
        dfs(node.right, 1, dir < 0 ? sum + 1 : 1)

        max = Math.max(sum, max)

        return sum
    }


};




const root = arrayToTree([1, 2, 3, 9, 4, 10, 11, 5, 6, null, 7]);
console.log(longestZigZag(root))