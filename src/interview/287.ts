function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Detect cycle
    do {
        console.log(slow, nums[fast])
        slow = nums[slow]; // Move one step
        fast = nums[nums[fast]]; // Move two steps

        console.log("values ",slow, fast);
    } while (slow !== fast);


    console.log("phase 2")
    // Phase 2: Find the duplicate
    slow = nums[0]; // Reset slow to start
    console.log(slow, fast)
    while (slow !== fast) {
        slow = nums[slow]; // Move one step
        fast = nums[fast]; // Move one step
        console.log(slow, fast)
    }

    return slow; // The duplicate number
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
//console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3