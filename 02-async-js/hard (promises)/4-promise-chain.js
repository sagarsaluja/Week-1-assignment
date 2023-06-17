/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        console.log("immediately logged waitOneSecond");
        setTimeout(resolve, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        console.log("immediately logged waitTwoSecond");
        setTimeout(resolve, 2000);
    })

}

function waitThreeSecond() {
    return new Promise((resolve) => {
        console.log("immediately logged waitThreeSecond");
        setTimeout(resolve, 3000);
    })

}

function calculateTime() {
    const initial = new Date();
    const p1 = waitOneSecond()
        .then(() => {
            console.log("resolved1");
            return waitTwoSecond();
        })
        .then(() => {
            console.log("resolved2");
            return waitThreeSecond();
        })
        .then(() => {
            console.log("resolved3");
            const final = new Date();
            console.log(final.getTime() - initial.getTime());
        });
}
calculateTime();