# 📚 Week-02 Assignment

Welcome to Week 02! This week's assignments are designed to help you understand core JavaScript concepts including asynchronous tasks, file I/O, string operations, Promises, and working with classes.

---

## 🟢 Easy

### ✅ Q1: Counter with `setInterval`

Create a counter in JavaScript that increments every second. Use `setInterval` for this.

### ✅ Q2: Counter without `setInterval`

Recreate the counter without using `setInterval`. (Hint: You can use `setTimeout` recursively.)

### ✅ Q3: Reading the Contents of a File

Use the `fs` module to read and print the contents of a file asynchronously. Add an expensive operation afterward and observe how it affects the output order.

### ✅ Q4: Write to a File

Use the `fs` module to write data to a file asynchronously. Understand how async writing behaves.

### ✅ Q5: Anagram Checker

Write a function `isAnagram(str1, str2)` that returns `true` if the strings are anagrams of each other, `false` otherwise.

### ✅ Q6: Expenditure Analysis

Implement a function `calculateTotalSpentByCategory(transactions)` that returns the total spending grouped by category.

```js
// Sample transaction format
{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}

// Output
[{ category: 'Food', totalSpent: 10 }]
```

### ✅ Q7: Find the Largest Number

Write a function `findLargestElement(numbers)` that returns the largest number in an array.

---

## 🟡 Medium

### 🕐 Q1: File Cleaner

Read a file, remove extra spaces between words, and write the cleaned-up content back to the file.

```txt
Input:  "hello     world    my    name   is       raman"
Output: "hello world my name is raman"
```

### ⏰ Q2: Digital Clock

Use one of your counters to display a digital clock that updates every second in these formats:

- `HH:MM:SS`
- `HH:MM:SS AM/PM`

### 🔤 Q3: Count Vowels

Implement `countVowels(str)` to return the number of vowels (case-insensitive) in a string.

### 🔁 Q4: Palindrome Checker

Implement `isPalindrome(str)` to check if the string is a palindrome (case-insensitive).

### ⏱ Q5: Computation Time Measurement

Create a function that calculates the time (in seconds) it takes to sum numbers from `1` to `n`. Try with:

- 100
- 100000
- 1000000000

Use `Date.now()` or `performance.now()` to measure time taken.

---

## 🔴 Hard

### ⏸ Q1: Busy Wait

Write a function that halts the JS thread (busy-wait) for a specified number of milliseconds. Return a `Promise` that resolves afterward.

### 🔗 Q2: `Promise.all` Timing

Write 3 async functions that resolve after `t` seconds. Then use `Promise.all` and return the total time it took to resolve all.

### 🔁 Q3: Sequential Promises

Write 3 async functions that resolve after `t1`, `t2`, and `t3` seconds respectively. Call them **sequentially**, then return the total time taken. Compare with the parallel method in Q2.

### ➕ Q4: Calculator Class

Create a `Calculator` class with:

- `add(num)`
- `subtract(num)`
- `multiply(num)`
- `divide(num)`
- `clear()`
- `getResult()`
- `calculate(expression)` — takes a string like `"10 + 2 * (6 - (4 + 1) / 2) + 7"`

**Note:**

- Handle multiple spaces and invalid characters like `abc`.
- Throw appropriate errors for invalid expressions.

### 📋 Q5: Todo Class

Create a `Todo` class with:

- `add(todo)`
- `remove(index)`
- `update(index, updatedTodo)`
- `getAll()`
- `get(index)`
- `clear()`

---
