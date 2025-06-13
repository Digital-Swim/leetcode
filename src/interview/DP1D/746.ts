function minCostClimbingStairs(cost: number[]): number {

    let arr = new Array(cost.length).fill(0);

    arr[arr.length - 1] = cost[cost.length - 1];
    arr[arr.length - 2] = cost[cost.length - 2];


    for (let i = cost.length - 3; i >= 0; i--) {

        if (arr[i + 1] < arr[i + 2]) {
            arr[i] = cost[i] + arr[i + 1]
        }
        else arr[i] = cost[i] + arr[i + 2]

    }

    if (arr[0] < arr[1]) return arr[0]

    return arr[1];

}


function minCostClimbingStairs2(cost: number[]): number {

    let a = [...cost, 0];
    let min = Number.MAX_VALUE;

    function backtrace(index: number, sum: number) {

        if (index >= cost.length || (sum > min)) {
            if (sum < min) min = sum;
            return;
        }

        let s1 = sum + a[index];
        let s2 = sum + a[index + 1];

        backtrace(index + 1, s1)
        backtrace(index + 2, s2)

    }

    backtrace(0, 0);

    console.log(min);
    return min;

}

function minCostClimbingStairs1(cost: number[]): number {

    let a = [...cost, 0];

    let i = 0;
    let t = 0;

    while (i < (cost.length - 1)) {

        let s1 = t + a[i + 1];
        let s2 = t + a[i + 2]

        if (s1 > s2) {
            t = s2;
            i = i + 2;
        } else {
            t = s1;
            i = i + 1;
        }

    }

    console.log(t)
    return 0;

};


let cost = [10, 15, 20]

minCostClimbingStairs(cost)