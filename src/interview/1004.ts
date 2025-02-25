/**
 * 
 * 1004. Max Consecutive Ones III
Medium
Topics
Companies
Hint
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */



function longestOnes(nums: number[], k: number): number {

    let p1 = 0
    let p2 = 0

    let i = 0;
    let count = k;
    let l = 0;

    while (i < nums.length) {

        if (count == 0 && nums[i] === 0) break;

        if (nums[i] === 0) {
            count--;
        }

        l++;
        i++;
    }

    console.log(l)
    p2 = i;
    let max = l;


    while (p2 < nums.length) {

        if (nums[p2] === 1) {
            l++;
        }

        if (nums[p2] == 0) {
            while (nums[p1] === 1 && p1 < p2) {
                l--
                p1++
            }
            p1++
        }

        console.log(l, p1, p2, p2 - p1);
        if (l > max) {
            max = l;
        }

        p2++
    }

    console.log("Ans: ", max)
    return max;

};


console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))