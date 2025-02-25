/**
 * 
 * 1456. Maximum Number of Vowels in a Substring of Given Length
Medium
Topics
Companies
Hint
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 
 * 
 * 
 */


function maxVowels(s: string, k: number): number {

    let p1 = 0;
    let p2 = k;

    let v = ["a", "e", "i", "o", "u"];

    let m = s.substring(0, k).split("").filter(a => {
        if (v.indexOf(a) >= 0)
            return a
    }).length;

    
    let max = m;

    console.log(s, k, m)
    while (p2 < s.length) {

        if (v.indexOf(s[p2]) >= 0) {
            m = m + 1
        }

        if (v.indexOf(s[p1]) >= 0) {
            m = m - 1
        }

        if (m > max) {
            max = m
        }

        console.log(m, p1, p2, s[p1], s[p2])

        p2++
        p1++
    }

    return max;

};



console.log(maxVowels("aeiou", 2))
