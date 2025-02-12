function maxProfit(prices) {
  if (prices.length < 2) return [null, null]; // At least 2 days needed

  let minPrice = prices[0];   // Track the lowest buy price
  let maxProfit = prices[1] - prices[0]; // Initial profit (may be negative)
  let buyPrice = prices[0];
  let sellPrice = prices[1];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
      buyPrice = minPrice;
      sellPrice = currentPrice;
    }

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return [buyPrice, sellPrice]; // Best buy-sell pair
}

// **Example Usage**
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: [1, 6]
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: [7, 6]
