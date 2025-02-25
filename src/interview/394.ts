/**
 * 394. Decode String
Medium
Topics
Companies
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 
 */


function decodeString(s: string): string {

    let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let stack: any[] = [];

    for (let ch of s) {

        if (ch == "]") {
            let s = "", c = ""

            // Pop char till we find "["
            while ((c = stack.pop()) !== "[") {
                s = c + s;
            }

            // Find the value of k if it exist 
            c = stack.pop()
            let k = 1;
            let dig = ""

            while (digit.indexOf(c) >= 0) {
                dig = c + dig
                c = stack.pop()
            }

            if (dig.length > 0) {
                k = parseInt(dig)
            }

            stack.push(c);
            let a = ""
            for (let i = 0; i < k; i++) {
                a = a + s;
            }

            stack.push(a)

        }
        else {
            stack.push(ch)
        }
    }


    return stack.join("");

};


console.log(decodeString("[2[3[abc]2[a]]]"))