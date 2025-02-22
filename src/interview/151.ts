function reverseWords1(s: string): string {

    let words = s.split(" ").filter(Boolean)

    let start = 0
    let end = words.length - 1;

    while (start < end) {

        let ch = words[start].trim();
        words[start] = words[end].trim();
        words[end] = ch;
        start++;
        end--;

    }

    return words.join(" ");
};

function reverseWords(s: string): string {
    let words = s.trim().split(/\s+/); // Remove leading/trailing spaces & split efficiently

    let start = 0;
    let end = words.length - 1;

    while (start < end) {
        [words[start], words[end]] = [words[end], words[start]]; // Swap using destructuring
        start++;
        end--;
    }

    return words.join(" ");
}


console.log(reverseWords("  hello world  "))