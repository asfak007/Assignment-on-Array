var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    
    return maxProfit;
};

// Example usage:
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); 

let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); 

// Time Complexity: O(N) & Space Complexity: O(1)