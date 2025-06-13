let pick = 1;

function guessNumber(n: number): number {

    let [start, end] = [0, n]

    let num = Math.ceil((end - start) / 2);

    if(num == 0) return n

    let g = guess(num);

    while (g !== 0) {

        // If gues is lower 
        if (g > 0) {
            start = num;
        }
        else {
            end = num;
        }

        num = start + Math.ceil((end - start) / 2);
        g = guess(num);

    }

    console.log(num);

    return num;
};


function guess(n: number) {
    if (n == pick) return 0
    if (n > pick) return -1;
    else return 1;
}



guessNumber(2)
