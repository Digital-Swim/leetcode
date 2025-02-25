function predictPartyVictory(senate: string): string {

    let ignoreDCount = 0, ignoreRCount = 0;
    let v = senate;

    while (!checkVictory(v)) {
        let a = [];
        for (let s of v) {
            if (s == "R") {
                if (ignoreRCount == 0) {
                    ignoreDCount++;
                    a.push(s)
                }
                else {
                    ignoreRCount--
                }
            } else {
                if (ignoreDCount == 0) {
                    ignoreRCount++;
                    a.push(s)
                }
                else {
                    ignoreDCount--
                }
            }
        }
        v = a.join("");
    }

    return getVicotrySenate(v)

};


function checkVictory(s: string) {

    let i1 = s.indexOf("R")
    let i2 = s.indexOf("D")

    if (i1 < 0 || i2 < 0)
        return true

    return false
}

function getVicotrySenate(s:string){
    let i1 = s.indexOf("R")
    if (i1 >= 0) return "Radiant"
    else return "Dire"
}

console.log(predictPartyVictory("RDD"))


