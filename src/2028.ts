
/**
 * You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

    You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

    Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

    The average value of a set of k numbers is the sum of the numbers divided by k.

    Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.

    Example 1:

    Input: rolls = [3,2,4,3], mean = 4, n = 2
    Output: [6,6]
    Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.
    Example 2:

    Input: rolls = [1,5,6], mean = 3, n = 4
    Output: [2,3,2,2]
    Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.
    Example 3:

    Input: rolls = [1,2,3,4], mean = 6, n = 4
    Output: []
    Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.
        
 * 
 * 
 * @param rolls 
 * @param mean 
 * @param n 
 * @returns 
 */

function getMissingRolls(rolls: number[], mean: number, n: number): number[] {

    let totalSumofRolls = rolls.reduce((acc, val) => acc + val, 0);
    const m = rolls.length;
    const totalRolls = m + n;
    const remainingSum = totalRolls * mean - totalSumofRolls;

    if (remainingSum < n || remainingSum > 6 * n) {
        return [];
    }

    let maxSixes = Math.floor(remainingSum / 6);
    let newN = n - maxSixes;
    let newRemainingSum = remainingSum - (6 * maxSixes);

    while (newRemainingSum < newN && maxSixes > 0) {
        maxSixes--;
        newRemainingSum = remainingSum - (6 * maxSixes);
        newN = n - maxSixes;
    }

    let res = findCombinations(Array(newN).fill(1), newRemainingSum);

    while (res.length == 0 && maxSixes > 0) {
        maxSixes--;
        newRemainingSum = remainingSum - (6 * maxSixes);
        newN = n - maxSixes;
        res = findCombinations(Array(newN).fill(1), newRemainingSum);
    }

    if (res.length > 0) {
        let a = Array(maxSixes).fill(6).concat(res);
        console.log(a);
        return a;
    }

    console.log("No Solution Found");
    return [];
}

function findCombinations(row: number[], sum: number, pos: number = 0): number[] {

    if (pos == row.length) { return []; }

    while (row[pos] <= 6) {

        let res = findCombinations(row, sum, pos + 1);
        if (res.length > 0) { return res };

        if (pos == row.length - 1) {
            let total = row.reduce((acc, val) => acc + val, 0);
            if (total == sum) {
                return [...row];
            }
        }

        row[pos] = row[pos] + 1;
        for (let i = pos + 1; i < row.length; i++) {
            row[i] = 1;
        }
    }

    return [];
}


getMissingRolls([4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5, 1, 5], 4, 40);


let array: number[][] = [];
function combunationsTest(row: number[], pos: number) {
    if (pos == row.length) { return; }
    while (row[pos] <= 6) {
        combunationsTest(row, pos + 1);
        if (pos == row.length - 1) { array.push([...row]); }
        row[pos] = row[pos] + 1;
        for (let i = pos + 1; i < row.length; i++) {
            row[i] = 1;
        }
    }
}

function test() {
    let array: number[][] = []
    let n = 3
    let row = Array(n).fill(1);
    let pos = 0;

    while (row[pos] <= 6) {
        while (row[pos + 1] <= 6) {
            while (row[pos + 2] <= 6) {
                console.log(row)
                array.push([...row]);
                row[pos + 2] = row[pos + 2] + 1;
            }
            row[pos + 1] = row[pos + 1] + 1
            row[pos + 2] = 1;
        }
        row[pos] = row[pos] + 1
        row[pos + 1] = 1;
        row[pos + 2] = 1;
    }

    console.log(array.length)
    return;
}
