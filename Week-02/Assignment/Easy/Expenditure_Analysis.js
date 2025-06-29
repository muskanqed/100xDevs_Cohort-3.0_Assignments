/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const categoryToMap = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    categoryToMap[category] =
      category in categoryToMap ? categoryToMap[category] + price : price;
  });

  const result = [];
  for (const category in categoryToMap) {
    result.push({ category, totalSpent: categoryToMap[category] });
  }

  return result;
}

const transactions = [
  {
    category: "Food",
    price: 190
  },
  {
    category: "Food",
    price: 60
  },
  {
    category: "Books",
    price: 20
  }
]

const totalSpent = calculateTotalSpentByCategory(transactions);

console.log(totalSpent);