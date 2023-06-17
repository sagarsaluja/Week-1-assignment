/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const initial = new Date();
    while (initial.getTime() + seconds * 1000 > new Date().getTime()) {
        //blocked
    }
    console.log(`unblocked executed after ${seconds} seconds`);

}
sleep(5);