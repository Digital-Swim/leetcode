
import { arrayToTree, TreeNode } from "./tree";


function pathSum(root: TreeNode | null, target: number): number {
    const prefixSumCount = new Map<number, number>();
    prefixSumCount.set(0, 1); // Base case: sum = 0 exists once

    function dfs(node: TreeNode | null, currentSum: number): number {
        if (!node) return 0;

        currentSum += node.val;

        let count = prefixSumCount.get(currentSum - target) || 0;

        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        prefixSumCount.set(currentSum, prefixSumCount.get(currentSum)! - 1); // Backtrack

        return count;
    }

    return dfs(root, 0);
}


function pathSum1(root: TreeNode | null, targetSum: number): number {
    //if (!root?.left && !root?.right && root?.val === targetSum) return 1
    return search(root, targetSum)
};


function search(root: TreeNode | null, targetSum: number, paths: number[] | null = null, pathCount: number = 0): number {

    if (root == null) {
        return 0
    }

    if (!paths) { paths = [root.val] }

    let s = pathsSum(paths)
    console.log(paths, s)
    if (s == targetSum) pathCount++;

    // if (s > targetSum) {
    //     paths.shift()
    //     console.log(paths)
    //     if (paths.length > 0) {
    //         s = pathsSum(paths)
    //         if (s == targetSum) pathCount++;
    //     }
    // }


    if (root.left) {
        let p = [...paths, root.left.val]
        // let s = pathsSum(p)
        // if (s > targetSum) {
        //     p.shift()
        // }
        pathCount = search(root.left, targetSum, p, pathCount)
    }

    if (root.right) {
        let p = [...paths, root.right.val]
        // let s = pathsSum(p)
        // if (s > targetSum) {
        //     p.shift()
        // }
        pathCount = search(root.right, targetSum, p, pathCount)
    }


    return pathCount;
}

function pathsSum(paths: number[]) {
    return paths.reduce((p, c,) => (p + c), 0)
}

function search1(root: TreeNode | null, targetSum: number, pathSum: number | null = null, paths: number = 0) {

    if (root == null) {
        return 0
    }

    if (!pathSum) { pathSum = root.val }

    if (root.left) {

        let s = pathSum + root.left.val
        console.log("left - net sum", s)

        if (s == targetSum) {
            paths = paths + 1
            s = root.left.val
        }

        if (s > targetSum) {
            s = root.left.val
        }

        if (root.left.val < 0) {
            paths = search1(root.left, targetSum, s, paths)
            paths = search1(root.left, targetSum, root.left.val, paths)
        }
        else {
            console.log("call: ", s, root.left.val, paths)
            paths = search1(root.left, targetSum, s, paths)
        }
    }

    if (root.right) {
        let s = pathSum + root.right.val
        console.log("right - net sum", s)
        if (s == targetSum) {
            paths = paths + 1
            s = root.right.val
        }
        if (s > targetSum) {
            s = 0
            s = root.right.val
        }

        if (root.right.val < 0) {
            paths = search1(root.right, targetSum, s, paths)
            paths = search1(root.right, targetSum, root.right.val, paths)
        }
        else {
            console.log("call: ", s, root.right.val, paths)
            paths = search1(root.right, targetSum, s, paths)
        }
    }

    return paths;
}


const root = arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])

console.log(pathSum(root, 22))

