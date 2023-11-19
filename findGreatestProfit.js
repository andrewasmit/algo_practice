// Create a function that takes in an array of integers representing the value of stock to be bought or sold that day.
// Determine the highest possible profit you can make by buying one day and selling the other

function findHighestProfit(arr) {
  let highestProfit = 0;
  let smallestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    } else {
      const currentProfit = arr[i] - smallestNum;

      if (currentProfit > highestProfit) {
        highestProfit = currentProfit;
      }
    }
  }

  return highestProfit;
}

// TESTS TO RUN
console.log(findHighestProfit([3, 5, 1, 6, 7, 2, 9, 2]));
// => 8; Buy at 1 and sell at 9

console.log(findHighestProfit([14, 8, 4, 25, 7]));
// => 21; Buy at 4 and sell at 25
