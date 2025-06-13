function findPeakElement(nums: number[]): number {

    let left = 0;
    let right = nums.length;

    while (left <= right) {

        let mid = Math.floor((right + left) / 2);
        let leftVal = (mid == 0) ? Number.NEGATIVE_INFINITY : nums[mid - 1]
        let rightVal = (mid == (nums.length - 1)) ? Number.NEGATIVE_INFINITY : nums[mid + 1]
        let val = nums[mid];

        if (val > leftVal && val > rightVal) {
            return mid
        }
        if (rightVal > val) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }

    }

    return -1

    //let n = Number.NEGATIVE_INFINITY;
    //let i = 0;

    // while (nums[i] > n && i < nums.length) {
    //     n = nums[i]
    //     i++;
    // }

    // return i - 1

};

console.log(findPeakElement([2,1]))