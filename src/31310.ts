/**
 * 

3130. Find All Possible Stable Binary Arrays II
Hard
Topics
Companies
Hint
You are given 3 positive integers zero, one, and limit.

    A 
binary array
 arr is called stable if:

The number of occurrences of 0 in arr is exactly zero.
The number of occurrences of 1 in arr is exactly one.
    Each
subarray
 of arr with a size greater than limit must contain both 0 and 1.
Return the total number of stable binary arrays.

Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: zero = 1, one = 1, limit = 2

Output: 2

Explanation:

The two possible stable binary arrays are[1, 0] and[0, 1].

    Example 2:

Input: zero = 1, one = 2, limit = 1

Output: 1

Explanation:

The only possible stable binary array is[1, 0, 1].

    Example 3:

Input: zero = 3, one = 3, limit = 2

Output: 14

Explanation:

All the possible stable binary arrays are[0, 0, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1], [0, 1, 0, 0, 1, 1], [0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1], [0, 1, 1, 0, 1, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 0, 1], [1, 0, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0], [1, 1, 0, 0, 1, 0], and[1, 1, 0, 1, 0, 0].



    Constraints:

1 <= zero, one, limit <= 1000

**/


const bigIntNumber = BigInt("0b1010101010101010");
const MOD = 1_000_000_007;  // 10^9 + 7

function mod(num: number): number {
    return ((num % MOD) + MOD) % MOD;  // Ensure the result is non-negative
}

numberOfStableArrays(1, 1, 2);

function numberOfStableArrays(zeros: number, ones: number, limit: number): number {

    let size = zeros + ones;
    let result = 0;
    let zerosArray = Array(zeros).fill(0);
    let onesArray = Array(ones).fill(1);

    if (zeros == 0 || ones == 0) {
        return 1;
    }

    let m = zeros;
    let n = ones;

    limit = Math.min(ones, limit);

    console.log(m, n);

    for (let i = 0; i <= limit; i++) {
        let a = permuations(m, i);
        let b = permuations(n, i);
        result += a * b;
    }

    console.log(result);

    let actual = factorial(size) / (factorial(zeros) * factorial(ones));

    console.log(actual);

    return 0;
};


function permuations(m: number, n: number): number {
    return factorial(m) / ((factorial(m - n)) * factorial(n));
}

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
