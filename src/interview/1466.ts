function minReorder(n: number, connections: number[][]): number {

    let mat = new Map<number, Set<number>>();
    let matBothDir = new Map<number, Set<number>>();
    let visited = new Set<number>();

    for (let con of connections) {
        addEdge(con[0], con[1])
    }

    function addEdge(u: number, v: number) {
        if (!matBothDir.has(u)) { matBothDir.set(u, new Set<number>()) }
        if (!matBothDir.has(v)) { matBothDir.set(v, new Set<number>()) }
        if (!mat.has(u)) { mat.set(u, new Set<number>()) }
        mat.get(u)!.add(v);
        matBothDir.get(u)!.add(v);
        matBothDir.get(v)!.add(u);
    }

    let swapC = 0;

    for (let e = 0; e < n - 1; e++) {
        if (!visited.has(e)) {
            dfs(e)
        }
    }

    function dfs(edge: number) {
        visited.add(edge);
        let matDir = matBothDir.get(edge)
        if (matDir) {

            let itr = matDir.entries();
            let c = itr.next()

            while (!c.done) {
                let e = c.value[1];
                let m = mat.get(edge)
                if (!visited.has(e)) {
                    dfs(e)
                    if (m && m.has(e)) {
                        swapC++
                    }
                }
                c = itr.next()
            }

        }

    }


    function dfs1(edge: number) {
        console.log(edge)
        visited.add(edge);
        let matDir = mat.get(edge) || (new Set<number>())
        let itr = matDir.entries();
        let c = itr.next()

        while (!c.done) {
            let e = c.value[1];
            if (!visited.has(e)) {
                dfs(e)
                swapC++
            }
            c = itr.next()
        }

    }

    return swapC;


};



console.log(minReorder(6, [[1, 0], [1, 2], [3, 2], [3, 4]]))