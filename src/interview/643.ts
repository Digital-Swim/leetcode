/**
 * 
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 
 * 
 */

function findMaxAverage(nums: number[], k: number): number {

    let s = 0;

    let p1 = 0;
    let p2 = k ;

    for (let i = p1; i < k; i++)
        s = s + nums[i]

    let max = s;
    while (p2 < nums.length) {
        s = s + nums[p2] - nums[p1]
        if (s > max)
            max = s        
        p2++
        p1++
    }


    return max / k;

};


let a6643 = findMaxAverage([1, 12, -5, -6, 50, 3], 4)

console.log(a6643)
