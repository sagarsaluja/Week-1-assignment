/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const c = {};
  const cb = (item) => {
    if (Object.keys(c).includes(item.category)) {
      c[item.category] += item.price
    }
    else {
      c[item.category] = item.price;
    }
  };
  transactions.forEach((obj) => {
    cb(obj);
  })
  const totalSpentByCategory = [];

  Object.keys(c).forEach((key) => {
    totalSpentByCategory.push({
      category: key, totalSpent: c[key]
    });
  })
  return totalSpentByCategory;
}
module.exports = calculateTotalSpentByCategory;
