function removeStars(s: string): string {

    let a = []

    for (let ch of s) {
        if (ch == "*")
            a.pop()
        else
            a.push(ch)

    }

    return a.join("")
};

console.log(removeStars("erase*****"));
