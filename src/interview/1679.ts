/**
 * 1679. Max Number of K-Sum Pairs
 * 
 * 
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 
 */


function maxOperations(nums: number[], k: number): number {

    let map = new Map()
    let operations = 0;
    for (let num of nums) {
        let complement = k - num;

        if (map.has(complement) && map.get(complement) > 0) {
            operations++;
            map.set(complement, map.get(complement) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return operations;
}

function maxOperations1(nums: number[], k: number): number {


    let op = 0;

    let s = nums.sort((a, b) => a - b)

    let p1 = 0;
    let p2 = nums.length - 1

    while (p1 < p2) {

        let sum = s[p1] + s[p2];

        if (sum < k) p1++
        else if (sum > k) p2--
        else {
            p1++
            p2--
            op++
        }
    }

    return op

};



let t1679 = [3, 1, 3, 4, 3]

console.log(maxOperations(t1679, 6))