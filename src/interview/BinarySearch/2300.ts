

function successfulPairs(spells: number[], potions: number[], success: number): number[] {

    spells = [1, ...spells];
    let spellIndex = spells.map((s, i) => [s, i]);
    spellIndex.sort((a, b) => a[0] - b[0]);
    potions.sort((a, b) => a - b);

    let res = new Array(spellIndex.length).fill(0);
    
    let v = success / potions[potions.length - 1];
    let a = bSearchFirst(spells, v)


    let prevLength = 0;
    let prvSpell = -1
    let prvRes = 0
    for (let [s, i] of spellIndex) {

        if (s === prvSpell || potions.length == 0) {
            res[i] = prvRes
            continue;
        }
        let val = success / s;
        let a = bSearchFirst(potions, val)
        //console.log(val, s, a)
        res[i] = a + prevLength
        prevLength = res[i];
        prvSpell = s;
        prvRes = res[i]
        let c = (potions.length - a);

        if (c > 0)
            potions = potions.splice(0, c);

        //console.log(potions)
        //console.log(res)
    }

    console.log(res);
    return res

};


function bSearchFirst(arr: number[], val: number) {

    if (arr.length == 0) return 0;
    if (val <= arr[0]) return arr.length;
    if (val > arr[arr.length - 1]) return 0

    //console.log(val, arr)
    let left = 0;
    let right = arr.length - 1;

    let result = -1;
    let found = false;

    while (left < right) {
        const mid = Math.floor(right - left)
        if (arr[mid] === val) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < val) {
            left = mid + 1;
        } else {
            result = mid;
            right = mid - 1;
        }
    }

    //console.log(result);
    return arr.length - result;
}

function bSearch(start: number, end: number, arr: number[], val: number) {

    let pos = start + Math.floor((end - start) / 2);
    let v = arr[pos]

    if (start == (end - 1)) {
        console.log(pos, arr[pos]);
        return
    };

    if (v > val) {
        end = pos - 1
    }
    else if (v < val) {
        start = pos + 1
    }
    else {

        console.log(pos, arr[pos]);
        return;
    }

    bSearch(start, end, arr, val);
}

let spells = [39, 34, 6, 35, 18, 24, 40]
let potions: number[] = [27, 37, 33, 34, 14, 7, 23, 12, 22, 37]
let success = 43;

successfulPairs(spells, potions, success);


//bSearch(0, potions.length, potions, success)

//bSearchFirst(potions, success)