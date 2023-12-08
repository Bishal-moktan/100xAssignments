/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];
  for (let transaction of transactions) {
    let { category, price } = transaction;
    let isFound = false;
    for (let item of result) {
      if (item.category === category) {
        isFound = true;
        item.totalSpent = item.totalSpent + price;
      }
    }
    if (!isFound) {
      result.push({ category, totalSpent: price });
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
