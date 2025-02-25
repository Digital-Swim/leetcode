/**
 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/



function maxArea(height: number[]): number {

    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {

        let w = right - left;
        let h = Math.min(height[right], height[left])

        maxArea = Math.max(maxArea, w * h)

        if (height[left] < height[right]) {
            left++
        }
        else right--

    }

    return maxArea;

};

function maxArea1(height: number[]): number {

    let p1 = 0;
    let p2 = 0;
    let maxArea = 0;

    for (let x1 = 0; x1 < height.length; x1++) {

        for (let x2 = x1; x2 < height.length; x2++) {

            let a = area(x1, x2, height)

            if (a > maxArea) {
                maxArea = a;
                p1 = x1;
                p2 = x2;
            }

        }

    }


    console.log(p1, p2)
    return maxArea;

};

function area(x1: number, x2: number, height: number[]): number {

    let h = height[x2]
    let w = x2 - x1;

    if (h > height[x1])
        h = height[x1]

    return w * h;
}


let t11 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(t11))


