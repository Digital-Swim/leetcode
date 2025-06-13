// /**
//  * Finds the next greater element for each element in the input array.
//  * If no greater element exists, returns -1 for that element.
//  * @param nums - An array of numbers.
//  * @returns An array where each element is the next greater element for the corresponding input.
//  */
// function nextGreaterElements(nums: number[]): number[] {
//     const n = nums.length;
//     const result: number[] = new Array(n).fill(-1);  // Default value of -1
//     const stack: number[] = []; // Stack to store indices of elements

//     // Iterate over the array
//     for (let i = 0; i < n; i++) {
//         // While there is a value in the stack and the current number is greater
//         // than the number corresponding to the index at the top of the stack,
//         // update the result for that index.
//         while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
//             const index = stack.pop()!;
//             result[index] = nums[i];
//         }

//         // Push the index of the current element onto the stack
//         stack.push(i);
//         console.log("Number ", i, nums[i])
//         console.log(stack.join(","))
//         console.log(result.join(","))

//     }

//     // The indices remaining in the stack do not have a next greater element;
//     // their corresponding result remains as -1.
//     return result;
// }

// // Example usage:
// const inputArray: number[] = [73, 74, 75, 71, 69, 72, 76, 73]
// const output: number[] = nextGreaterElements(inputArray);
// console.log('Next greater elements:', output); // Output: [5, 25, 25, -1]

// process.exit();


function dailyTemperatures(temperatures: number[]): number[] {

    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop()!;
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};



const tmp: number[] = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(tmp))