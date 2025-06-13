function minEatingSpeed2(piles: number[], h: number): number {

    piles.sort((a, b) => a - b);
    let totalBananas = piles.reduce((a, b) => a + b, 0);
    let minSpeed = Math.ceil(totalBananas / h);
    let totTime = timeTaken(minSpeed, piles);

    while (totTime > h) {
        minSpeed = findNextMinSpeed(minSpeed, piles);
        totTime = timeTaken(minSpeed, piles);
    }

    console.log(minSpeed, totalBananas, totTime);

    return 0;
}

function findNextMinSpeed(speed: number, piles: number[]) {

    let left = 0;
    let right = piles.length;
    let res = -1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        res = mid;
        if (piles[mid] < speed) {
            left = mid + 1
        }
        else if (piles[mid] > speed) {
            right = mid - 1;
        }
    }

    console.log(piles[res]);

    return piles[res];

}


function minEatingSpeed(piles: number[], h: number): number {

    // let res = 0;
    // let totalBananas = piles.reduce((a, b) => a + b, 0);
    // let minSpeed = Math.ceil(totalBananas / h);

    // let t = piles.map(a => Math.ceil(a / minSpeed))
    // let tot = t.reduce((a, b) => a + b, 0);

    // while(tot > h){

    //     piles = piles.map(p =>  p -)

    // }

    let e = h - piles.length;

    piles.sort((a, b) => a - b);

    let left = 0;
    let right = piles.length;
    let res = -1;
    let found = false;
    let t = 0;
    while (left < right) {

        let mid = Math.floor((left + right) / 2);
        t = calTime(mid, piles)
        res = mid;

        if (t > h) {
            left = mid + 1
            res = left
        }
        else if (t < h) {
            right = mid - 1;
            res = right
        }
        else {
            res = mid
            found = true;
            break;
        }

    }

    console.log("Extra hours: ",e)
    if (res < 0) res = 0;

    let a = piles[res]

    if (t > h) a = (piles[res - 1] + 1)

    //if (!found) a = a + 1;

    console.log(a);
    return a;

};

function calTime(pos: number, piles: number[]) {
    let t = pos + 1;
    for (let i = pos + 1; i < piles.length; i++) {
        t = t + Math.ceil(piles[i] / piles[pos])
    }
    return t;
}

function timeTaken(speed: number, piles: number[]) {
    let t = 0;
    for (let i = 0; i < piles.length; i++) {
        t = t + Math.ceil(piles[i] / speed)
    }
    return t;
}

let piles = [312884470], h = 312884469


minEatingSpeed(piles, h);
