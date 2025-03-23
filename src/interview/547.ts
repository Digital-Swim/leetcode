
function findCircleNum2(isConnected: number[][]): number {

    let visited = new Set();
    let city = 0, cnt = 0;

    while (city < isConnected.length) {

        if (visited.has(city)) {
            city++;
            continue;
        }

        let c = 0;
        for (c = 0; c < isConnected.length; c++) {
            if (isConnected[city][c] == 1 && !visited.has(c)) {
                visited.add(c)
            }
        }

        cnt++
        city++;
    }

    return cnt;
};

function findCircleNum(isConnected: number[][]): number {

    let queu: number[] = [];
    let visited = new Set();
    let city = 0, c = 0;

    while (city < isConnected.length) {
        if (!visited.has(city)) {
            queu = [city]
            while (queu.length > 0) {
                let c = queu.shift()!;
                if (!visited.has(c)) {
                    visited.add(c)
                    let i = 0;
                    for (let ci of isConnected[c]) {
                        if (ci == 1 && !visited.has(i)) { queu.push(i) }
                        i++
                    }
                }
            }
            c++;
        }
        city++;
    }

    return c;
};


function findCircleNum1(isConnected: number[][]): number {

    let queu: number[] = [];
    let connected = new Set();
    //connected.add(0)

    let c = 0;
    let provinces: number[][] = []
    let i = 0;

    let city = 0

    while (city < isConnected.length) {

        queu = []
        let province = [];

        if (connected.has(city)) {
            city++;
            continue;
        }

        i = 0;
        for (let c of isConnected[city]) {
            if (c == 1) { queu.push(i) }
            i++
        }

        while (queu.length > 0) {
            let c = queu.shift()!;
            if (!connected.has(c)) {
                province.push(c)
                connected.add(c)
                i = 0;
                for (let ci of isConnected[c]) {
                    if (ci == 1) { queu.push(i) }
                    i++
                }
            }
        }

        if (province.length > 0)
            provinces.push(province)

        c++;
        city++;
    }


    console.log(provinces)


    // while (queu.length > 0) {
    //     let room = queu.shift();
    //     if (!visited.has(room)) {
    //         visited.add(room)
    //         queu.push(...isConnected[room!])
    //     }
    // }

    return c;
};


console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]))