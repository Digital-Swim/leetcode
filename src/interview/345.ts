import { emit } from "process";

function reverseVowels(s: string): string {

    let res = s.split("")

    let vowels = ["a", "e", "i", "o", "u"]
    let start = 0;
    let end = s.length - 1

    while (start < end) {

        let ch1 = s[start];
        let ch2 = s[end];

        if (vowels.indexOf(ch1.toLocaleLowerCase()) < 0) {
            res[start] = s[start]
            start = start + 1;
            continue;
        }

        if (vowels.indexOf(ch2.toLocaleLowerCase()) < 0) {
            res[end] = s[end]
            end = end - 1;
            continue;
        }

        res[start] = s[end]
        res[end] = s[start]
        //s = swapCharacters(s, start, end);

        start++;
        end--;
    }

    return res.join("")
};


function reverseVowels1(s: string): string {

    let vowels = ["a", "e", "i", "o", "u"]
    let start = 0;
    let end = s.length - 1

    while (start < end) {

        let ch1 = s[start];
        let ch2 = s[end];

        if (vowels.indexOf(ch1.toLocaleLowerCase()) < 0) {
            start = start + 1;
            continue;
        }

        if (vowels.indexOf(ch2.toLocaleLowerCase()) < 0) {
            end = end - 1;
            continue;
        }

        s = swapCharacters(s, start, end);

        start++;
        end--;
    }

    return s;
};

function swapCharacters(str: string, i: number, j: number) {
    let chars = [...str]; // Spread string into array
    [chars[i], chars[j]] = [chars[j], chars[i]]; // Swap
    return chars.join(""); // Join back to string
}

console.log(reverseVowels("leetcode"))