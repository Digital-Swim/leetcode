function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let sellPrice = prices[0];
    
    let profit = sellPrice - buyPrice;
    let currProfit = 0;

    prices.forEach(price => { 
        if(buyPrice > price)
        {
            buyPrice = price;
        }
        else {
            currProfit = price - buyPrice;
            if(currProfit > profit)
            {
                profit = currProfit;
                sellPrice = price;
            }
        }
    
    });

    console.log(buyPrice, sellPrice);
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5