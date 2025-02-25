class RecentCounter {

    stack: number[] = [];

    constructor() {

    }

    ping(t: number): number {

        this.stack.push(t)

        let res = [];
        let index = this.stack.length - 1;

        while (index >= 0 && this.stack[index] >= (t - 3000)) {
            res.push(this.stack[index])
            index--;
        }
        return res.length

    }
}


var obj = new RecentCounter()

console.log(obj.ping(1))
console.log(obj.ping(100))
console.log(obj.ping(3001))

console.log(obj.ping(3002))
