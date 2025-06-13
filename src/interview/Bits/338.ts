
function minFlips(a: number, b: number, c: number): number {

    console.log(a.toString(2))
    console.log(b.toString(2))
    console.log(c.toString(2))

    let xor = (a ^ b).toString(2);
    let or = (a | b).toString(2);
    let bitsToChange = ((a | b) ^ c).toString(2);
    let total = 0;

    for (let index = 1; index <= bitsToChange.length; index++) {
        const e = bitsToChange[bitsToChange.length - index];
        if (e === "1") {

            if (index > or.length || (or[or.length - index] === "0")) {
                total = total + 1;
            }
            else {
                if ((index > xor.length) || xor[xor.length - index] === "0") {
                    total = total + 2;
                }
                else total = total + 1;
            }
        }
    }

    console.log(total);

    return total

};

minFlips(10, 9, 1);

