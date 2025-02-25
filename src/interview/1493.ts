/**
 * 1493. Longest Subarray of 1's After Deleting One Element
Medium
Topics
Companies
Hint
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 
 */

function longestSubarray(nums: number[]): number {

    let p1 = 0
    let p2 = 0

    let i = 0;
    let count = 1;
    let l = 0;

    while (i < nums.length) {
        if (count == 0 && nums[i] === 0) break;
        if (nums[i] === 0) count--;
        l++;
        i++;
    }

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
    return max - 1;

};


console.log(longestSubarray([1, 1, 1]))