function tribonacci(n: number): number {

    let a = new Array(n).fill(0);
    a[1] = 1;
    a[2] = 1;

    for (let i = 3; i < n + 1; i++) {
        a[i] = a[i - 1] + a[i - 2] + a[i - 3]
    }

    console.log(a, n, a[n])
    return a[n]


}

function tribonacci1(n: number): number {

    function cal(n: number) {

        let s = 0;

        if (n == 0) return 0
        if (n == 1) return 1
        if (n == 2) return 1

        s = cal(n - 1) + cal(n - 2) + cal(n - 3);

        return s;
    }


    let a = cal(n)

    console.log(a);

    return a

};


tribonacci(4);