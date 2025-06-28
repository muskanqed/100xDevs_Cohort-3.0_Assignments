# 📚 Week-02 Assignment

---

## 🟢 Easy

### Q1: Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

### Q2: Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck

### Q3: Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

### Q3: Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

## 🟡 Medium

### Q1: File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

### Q2: Clock

- 1-counter.md:

#### Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

- 2-counter.md:

#### Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

## 🔴 Hard

/\*

- Q1: Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
- During this time the thread should not be able to do anything else.
- The function should return a promise just like before.
  \*/

/\*

- Q2: Write 3 different functions that return promises that resolve after t, t, and t seconds respectively.
- Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all.
- Return a Promise which returns the time in milliseconds it takes to complete the entire operation.
  \*/

/\*

- Q3: Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
- Write a function that sequentially calls all 3 of these functions in order.
- Return a promise chain which returns the time in milliseconds it takes to complete the entire operation.
- Compare it with the results from 3-promise-all.js
  \*/
