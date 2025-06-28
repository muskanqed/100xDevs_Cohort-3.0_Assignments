/*
 * Write 3 different functions that return promises that resolve after t, t, and t seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait(t1) {
  return new Promise((resolve) => {
    setTimeout(resolve, t1 * 1000);
  });
}

function wait(t2) {
  return new Promise((resolve) => {
    setTimeout(resolve, t2 * 1000);
  });
}

function wait(t3) {
  return new Promise((resolve) => {
    setTimeout(resolve, t3 * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  await Promise.all([wait(t1), wait(t2), wait(t3)]);

  const totalTime = (Date.now() - startTime) / 1000;
  return totalTime;
}

calculateTime(1, 2, 3).then((time) => {
  console.log(`Total time taken: ${time} sec`);
});
