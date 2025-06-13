import chalk from "chalk";

function orangesRotting(grid: number[][]): number {

    let rottens = 0, fresh = 0;
    let freshTorot = 0;

    let queues: number[][][] = [];
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                rottens++
                queues.push([[i, j, 0]])
            } else if (grid[i][j] === 1) {
                fresh++
            }
        }
    }

    let t = 0;
    let l = 0;

    freshTorot = fresh;
    t = queues.reduce((sum, a) => sum + a.length, 0);

    while (t > 0) {

        for (let queue of queues) {

            if (queue.length == 0) continue;
            let q = [];

            do {
                let [row, col, levels] = queue.shift()!;
                for (const [dr, dc] of directions) {

                    const newRow = row + dr
                    const newCol = col + dc;

                    if (
                        newRow >= 0 && newRow < rows &&
                        newCol >= 0 && newCol < cols &&
                        grid[newRow][newCol] === 1) {

                        if (levels + 1 > l) l = levels + 1;

                        q.push([newRow, newCol, levels + 1])
                        grid[newRow][newCol] = 2
                        freshTorot--;
                    }
                }
            } while (queue.length > 0)
            queue.push(...q)
        }
        t = queues.reduce((sum, a) => sum + a.length, 0);
    }

    if (fresh == 0) return 0;
    if (freshTorot > 0) return -1

    return l == 0 ? -1 : l;

};

function render(matrix: number[][]) {
    //console.clear();
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        let row: string = "";
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                row += chalk.bgRedBright(chalk.bgBlack('     '))
            }
            else if (matrix[i][j] == 1) {
                row += chalk.bgRedBright(chalk.bgGreen('     '))
            }
            else if (matrix[i][j] == 2) {
                row += chalk.bgRedBright(chalk.bgGray('     '))
            }
        }
        console.log(row);
        console.log(row);

    }

}

let m =
    [
        [1, 1, 1, 0, 2, 1],
        [1, 0, 1, 2, 0, 1],
        [2, 1, 1, 0, 0, 0],
        [1, 1, 2, 0, 0, 2],
        [1, 2, 2, 0, 0, 1]
    ]

console.log(orangesRotting(m))