import { arrayToTree, TreeNode } from "./tree";


// Incomplete 


function maxLevelSum(root: TreeNode | null): number {

    let res = new Map<number, number>();

    let maxSum = root?.val || 0
    let maxLevel = 1

    function bfs(node: TreeNode | null, level: number) {

        if (!node) return

        bfs(node.left, level + 1)
        bfs(node.right, level + 1)

        let sum = (res.get(level) || 0) + node.val;
        res.set(level, sum)

        console.log(level, sum, res)

        if (sum >= res.get(maxLevel)!!) {
            maxSum = sum
            maxLevel = level
        }

    }

    bfs(root, 1)

    return maxLevel

};


const root = arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

console.log(maxLevelSum(root));