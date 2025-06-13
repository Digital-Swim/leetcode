class StockSpanner {
    stack: number[][] = [];
    constructor() {
    }

    next(price:number) {
        let span = 1;

        // While the current price is greater or equal, accumulate span
        while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()!![1];
        }

        this.stack.push([price, span]);
        return span;
    }
}

/**
  Your StockSpanner object will be instantiated and called as such:
*/

var stockSpanner = new StockSpanner()
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);
stockSpanner.next(85);