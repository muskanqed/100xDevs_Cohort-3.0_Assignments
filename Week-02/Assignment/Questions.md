

# 📚 Week-02 Assignment

---

## 🟢 Easy

<!-- Add easy-level questions here -->

---

## 🟡 Medium

### Q1:File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


## 🔴 Hard

/*
 * Q1: Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * The function should return a promise just like before.
*/

/*
 * Q2: Write 3 different functions that return promises that resolve after t, t, and t seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all.
 * Return a Promise which returns the time in milliseconds it takes to complete the entire operation.
*/

/*
 * Q3: Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which returns the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
*/
