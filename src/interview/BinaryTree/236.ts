import { arrayToTree, TreeNode } from "./tree";



function lowestCommonAncestor1(root: TreeNode | null, p: number, q: number): number | null {

    let path1: number[] = []
    let path2: number[] = []

    function dfs(node: TreeNode | null, path: number[]) {


        if (!node) return


        if (node.val == p) {
            console.log(node.val, [...path, node.val].join(","));
            path1 = [...path, node.val]

        }

        if (node.val == q) {
            console.log(node.val, [...path, node.val].join(","));
            path2 = [...path, node.val]

        }

        dfs(node.left, [...path, node.val])
        dfs(node.right, [...path, node.val])


    }

    dfs(root, [])


    for (let i = path1.length - 1; i >= 0; i--) {
        for (let j = path2.length - 1; j >= 0; j--) {
            if (path1[i] == path2[j]) {
                console.log(path1[i])
                break;
            }
        }

    }

    return null

}

function lowestCommonAncestor2(root: TreeNode | null, p: number, q: number): number | null {

    let lcfF = null
    let a = 0;

    function dfs(node: TreeNode | null, parent: number | null) {

        if (!node) return

        if (node.val == p || node.val == q) {
            a++
        }

        if (a == 2) return

        dfs(node.left, parent)
        dfs(node.right, parent)

        return

    }

    function dfsLoop(node: TreeNode | null) {

        if (!node) return false

        a = 0

        dfs(node, node.val)

        if (a == 2) {
            lcfF = node.val
            console.log("Found: ", node.val)
        }

        dfsLoop(node.left)
        dfsLoop(node.right)

    }

    dfsLoop(root)
    return lcfF

};


function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): number | null {

    let aa = 0
    let f = false
    dfs(root, 0)

    function dfs(node: TreeNode | null, parent: number) {

        let a = 0

        if (!node) {
            return 0
        }

        if (node.val == p || node.val == q) { a++ }

        a = a + dfs(node.left, node.val)
        a = a + dfs(node.right, node.val)

        //console.log("----- return: ", node.val, a)

        if (a == 2 && !f) { aa = node.val; f = true }

        return a
    }

    return aa;
}

const root = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

console.log(lowestCommonAncestor(root, 5, 1));