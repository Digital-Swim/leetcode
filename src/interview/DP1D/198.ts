function rob(nums: number[]): number {

    if (nums.length == 1) return nums[0]

    let arr = new Array(nums.length).fill(0);

    arr[arr.length - 1] = nums[nums.length - 1];

    if (nums[nums.length - 2] > nums[nums.length - 1])
        arr[arr.length - 2] = nums[nums.length - 2];
    else
        arr[arr.length - 2] = nums[nums.length - 1];

    let max = arr[arr.length - 1]

    for (let i = nums.length - 3; i >= 0; i--) {
        if (arr[i + 2] > max) max = arr[i + 2]
        arr[i] = nums[i] + max
    }

    console.log(arr)

    if (arr[0] > arr[1]) return arr[0]

    return arr[1];
};

let nums1 = [1, 2, 3, 1]
rob(nums1)