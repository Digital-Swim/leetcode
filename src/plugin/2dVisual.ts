import readline from "readline";
import chalk from "chalk";

const size: number = 5; // Matrix size (5x5)
let matrix: string[][] = Array.from({ length: size }, () => Array(size).fill("⬜"));
let pos: { x: number; y: number } = { x: 0, y: 0 };
let path: Set<string> = new Set();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.clear();
renderMatrix();

process.stdin.on("keypress", (_, key) => {
    if (key.name === "q") {
        console.log("Exiting...");
        process.exit();
    }

    move(key.name);
    console.clear();
    renderMatrix();
});

// Move within the matrix
function move(direction: string): void {
    let { x, y } = pos;
    if (direction === "up" && x > 0) x--;
    if (direction === "down" && x < size - 1) x++;
    if (direction === "left" && y > 0) y--;
    if (direction === "right" && y < size - 1) y++;

    pos = { x, y };
    path.add(`${x},${y}`);
}

// Render matrix in console
function renderMatrix(): void {
    for (let i = 0; i < size; i++) {
        let row: string = "";
        for (let j = 0; j < size; j++) {
            if (pos.x === i && pos.y === j) {
                row += chalk.bgGreen("🔵"); // Current position
            } else if (path.has(`${i},${j}`)) {
                row += chalk.bgBlue("🟦"); // Traced path
            } else {
                row += "⬜"; // Unvisited cells
            }
        }
        console.log(row);
    }
    console.log("\nUse arrow keys to move. Press 'q' to quit.");
}


