function combinationSum3(k: number, n: number): number[][] {
    let res: number[][] = [];
    let start = 1;

    function backTrack(index: number, s: number, path: number[]) {
        if (index >= k) {
            if (s == n) {
                res.push(path)
            }
            return;
        }

        if (path.length > 0) start = path[path.length - 1] + 1
        for (let i = start; i <= 9; i++) {
            backTrack(index + 1, s + i, [...path, i])
        }

    }

    backTrack(0, 0, []);

    return res;

};


let k = 4, n = 1

combinationSum3(k, n);