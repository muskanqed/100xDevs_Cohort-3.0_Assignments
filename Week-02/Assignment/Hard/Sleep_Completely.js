/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
*/

function sleep(milliseconds) {
    return new Promise((resolve) => {
        const startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
        resolve(milliseconds);
    })
}

sleep(4000).then((milliseconds) => {
    console.log(`Done Sleeping ${milliseconds}`)
})
