/**
 * 443. String Compression
Medium
Topics
Companies
Hint
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

Constraints:

1 <= chars.length <= 2000
chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
 */

import { Hash } from "crypto";

//import  chalk from "chalk"

function compress(chars: string[]): number {

    let read = 0, write = 0;

    while (read < chars.length) {

        let char = chars[read];
        

    }

    return 0;

}

function compress4(chars: string[]): number {

    console.log(chars.join(""));

    let len = 0;
    let pos = 0;
    let index = 0;

    let ch = chars[pos];
    let countCh = 0;

    while (index < chars.length) {

        if (ch != chars[index]) {

            if (countCh === 1) {
                chars[pos] = ch;
                pos = pos + 1;
                len = len + 1
                ch = chars[index]
                countCh = 0;
            } else {
                chars[pos] = ch;


                // let arrCount = countCh.toString().split("");
                // len = len + arrCount.length + 1;        
                // for (let a of arrCount) {
                //     pos = pos + 1;
                //     chars[pos] = a;
                // }

                pos = pos + 1;
                ch = chars[index]
            }

            countCh = 0;

        }

        countCh++;
        index++;

    }

    if (countCh > 1) {
        chars[pos] = ch;
        let arrCount = countCh.toString().split("");
        len = len + arrCount.length + 1;

        for (let a of arrCount) {
            pos = pos + 1;
            chars[pos] = a;
        }
    }
    else {
        chars[pos] = ch;
        len = len + 1;
    }

    console.log(chars.join(""));
    console.log(chars.join("").substring(0, len));

    return len;
}


function compress2(chars: string[]): number {

    console.log(chars.join(""));

    let len = 0;
    let pos = 0;
    let index = 0;

    let ch = chars[pos];
    let countCh = 1;

    while (index < chars.length) {
        console.log(chars.join(""));
        index++;

        if (countCh > 8) {
            chars[pos] = ch;
            chars[pos + 1] = countCh.toString();
            pos = pos + 2;
            len = len + 2;
            countCh = 1;
            ch = chars[index];
            continue;
        }

        if (ch != chars[index]) {

            if (countCh === 1) {
                chars[pos] = ch;
                pos = pos + 1;
                len = len + 1
                ch = chars[index]
            } else {
                chars[pos] = ch;
                chars[pos + 1] = countCh.toString();
                pos = pos + 2;
                len = len + 2
                ch = chars[index]
            }

            countCh = 1;
            continue

        }

        countCh++;

    }



    if (countCh > 1) {
        chars[pos + 1] = countCh.toString()
        len = len + 2
    }

    console.log(chars.join("").substring(0, len));

    return len;
}

function compress1(chars: string[]): number {

    console.log(chars.length)
    let index = 1;
    let count = 1;
    let length = 0;

    let char = chars[0];
    let pos = 0;

    while (index < chars.length) {

        console.log(char, chars[index])
        console.log(pos, index, count)

        if (count > 8) {
            chars[pos] = char;
            chars[pos + 1] = count.toString()

            count = 1;
            pos = pos + 2;
            index++;
            length = length + 2

            char = chars[index]
            console.log(chars.join(""));
            continue
        }

        if (char !== chars[index]) {

            if (count > 1) {
                chars[pos] = char;
                chars[pos + 1] = count.toString()
                pos = pos + 2
                length = length + 2
            }
            else {
                pos++;
                length = length + 1
            }

            count = 1;
            index++
            char = chars[index]
            console.log(chars.join(""));
            continue
        }

        count++;
        index++
        console.log(chars.join(""));

    }

    if (count > 1) {
        chars[pos + 1] = count.toString()
        length = length + 2
    }

    console.log(pos, index)
    console.log(chars.join("").substring(0, length));

    //console.log(chars.splice(length - 1, chars.length - length))
    return length;

};


let c = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "c"]

console.log(123 % 10);

//console.log(compress(c))
