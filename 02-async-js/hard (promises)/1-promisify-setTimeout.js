/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        console.log("immediately logged");
        setTimeout(resolve, n * 1000);
    })
}
function resolve() {
    console.log("resolved");
}
wait(5).then(resolve);