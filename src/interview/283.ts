


function moveZeroes(nums: number[]): void {

    let write = 0;
    let index = 0;

    while (nums[write] != 0 && write < nums.length) {
        write++
    }

    index = write;

    while (index < nums.length) {

        if(nums[index] != 0){
            nums[write] = nums[index]
            nums[index] = 0
            write++;
        }

        index++
    }

    //console.log(nums)

};


let tes = [0, 1, 0, 0, 0, 0, 1, 12, 3, 0, 2, 0];

console.log(tes)
moveZeroes(tes)