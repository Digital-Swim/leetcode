function productExceptSelf(nums: number[]): number[] {

    let answer = Array(nums.length).fill(1);
    
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix = prefix * nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }

    return answer;

};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
