function letterCombinations(digits: string): string[] {

    const res:string[] = [];
    let map = getMap();

    function backtrace(index: number, path: string) {

        if (index == digits.length) {
            res.push(path);
            return
        };

        let s = map.get(parseInt(digits[index]))!;
        for (let c of s) {
            backtrace(index + 1, path + c);
        }

    }

    backtrace(0, "");

    console.log(res);
    return res;
}

function letterCombinations1(digits: string): string[] {

    if (digits.length == 0) return [];

    let map = getMap();
    let s = map.get(parseInt(digits[0]))!;
    let com: string[] = [...s];

    for (let ch of digits.substring(1)) {
        let temp = [];
        let s = map.get(parseInt(ch))!;
        for (let c of s) {
            for (let a of com) {
                temp.push(a + c)
            }
        }
        com = temp;
    }
    console.log(com);
    return com;
};


function getMap() {

    let map = new Map<number, string[]>();
    map.set(2, ["a", "b", "c"]);
    map.set(3, ["d", "e", "f"]);
    map.set(4, ["g", "h", "i"]);
    map.set(5, ["j", "k", "l"]);
    map.set(6, ["m", "n", "o"]);
    map.set(7, ["p", "q", "r", "s"]);
    map.set(8, ["t", "u", "v"]);
    map.set(9, ["w", "x", "y", "z"]);
    return map;
}


letterCombinations("2345");