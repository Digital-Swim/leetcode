import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export function render(matrix: string[][], paths: Set<string>, extras: Set<string>) {
    console.clear();
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        let row: string = "";
        for (let j = 0; j < n; j++) {
            if (extras.has(`${i}${j}`)) {
                row += chalk.bgRedBright(chalk.bgGreen(` ${matrix[i][j]} `))
            } else if (paths.has(`${i}${j}`)) {
                row += chalk.bgRedBright(chalk.bgCyan(` ${matrix[i][j]} `))
            } else
                row += chalk.whiteBright(` ${matrix[i][j]} `)
        }
        console.log(row);
    }

}



export function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

