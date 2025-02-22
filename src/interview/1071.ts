/**
 * 1071. Greatest Common Divisor of Strings
 * 
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

 */

function gcdOfStrings(str1: string, str2: string): string {

    let gcd = str1;
    for (let i = 0; i < str1.length; i++) {

        if (str1.length % gcd.length == 0 && str2.length % gcd.length == 0) {

            let r1 = str1.split(gcd).reduce((prev, curr) => { return curr + prev }).length;
            let r2 = str2.split(gcd).reduce((prev, curr) => { return curr + prev }).length;
            
            let division = (r1 == 0) && (r2 == 0)
            //let division = str2.replace(new RegExp(gcd, "g"), "",).length == 0 && str1.replace(new RegExp(gcd, "g"), "").length == 0;
            if (division) {
                return gcd
            }
        }

        gcd = gcd.slice(0, gcd.length - 1)
    }

    return "";

};


//console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))

//console.log("".replace("ABAB", ""))

// let str = "ABCABC";

// let c = str.split("AB").reduce((prev, curr) => { return curr + prev }).length;

// console.log(c)