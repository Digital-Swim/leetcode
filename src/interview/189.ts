function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    console.log(nums);


};

function reverse(arr: any[], start: number, end: number): void {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

rotate([-1], 2)

// 0 1 2 3 4 5 6 7
// 1 2 3 4 5 6 ? ?
// 5 6 1 2 3 4 ? ?
// ? ? 1 2 3 4 5 6 

// l = length - 1, k = rotate
// a[l] = a[l - k]
//
 // 6 5 4 3 2 1
 // 5 6 4 3 2 1
 // 5 6 1 2 3 4