function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {


    let mat = new Map<string, Set<string>>();
    let matBothDir = new Map<string, Set<string>>();
    let vals = new Map<string, number>();
    let visited = new Set<string>();

    let i = 0
    for (let con of equations) {
        addEdge(con[0], con[1], values[i])
        i++
    }

    function addEdge(u: string, v: string, uv: number) {
        if (!matBothDir.has(u)) { matBothDir.set(u, new Set<string>()) }
        if (!matBothDir.has(v)) { matBothDir.set(v, new Set<string>()) }
        if (!mat.has(u)) { mat.set(u, new Set<string>()) }

        vals.set(u + "," + v, uv)
        vals.set(v + "," +  u, 1 / uv)

        mat.get(u)!.add(v);
        matBothDir.get(u)!.add(v);
        matBothDir.get(v)!.add(u);
    }

    let res: number[] = []
    let f = false;


    for (let q of queries) {

        visited.clear();

        let start = q[0]
        let end = q[1];
        f = false;

        res.push(dfs(start, end) || -1)


    }


    function dfs(edge: string, end: string): number | undefined {
        let val: number | undefined = 1;
        visited.add(edge);
        let matDir = matBothDir.get(edge)

        if (matDir) {

            if (edge == end) {
                f = true
                return val
            };

            let itr = matDir.entries();
            let c = itr.next()

            while (!c.done && !f) {
                let e = c.value[1];

                if (!visited.has(e)) {
                    let v = (dfs(e, end))
                    val = v === undefined ? undefined : v * vals.get(edge + "," + e)!
                }

                c = itr.next()
            }

            if(!f){
                return undefined
            }

        }
        else {
            return undefined
        }

        return val
    }

    return res

};


let equations: string[][] = [["a", "b"], ["ab", "c"], ["a", "bc"]]
let v: number[] = [2.0, 3.0, 4.0]
let queries: string[][] = [["a", "c"], ["b", "a"], ["ab", "c"], ["a", "a"], ["x", "x"]]

console.log(calcEquation(equations, v, queries))