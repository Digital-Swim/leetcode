/**
 * 334. Increasing Triplet Subsequence
Medium
Topics
Companies
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 
 */

function increasingTriplet1(nums: number[]): boolean {
    let max = nums[0];
    let a = nums.filter(val => val >= max ? (max = val, true) : false)
    console.log(a)
    return false;
};


function increasingTriplet(nums: number[]): boolean {

    let a = Number.MAX_VALUE;
    let b = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] < a) {
            a = nums[i]
        } else if (nums[i] < b && nums[i] > a) {
            b = nums[i]
        }
        else if (nums[i] > a && nums[i] > b) {
            return true
        }
    }
    return false;
};


let t = [1, 1, -2, 6]
console.log(increasingTriplet(t))