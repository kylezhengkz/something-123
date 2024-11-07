// setTimeout(...) is async and does not return a promise

// callback functions can be used to run right after async operation is complete
setTimeout(() => console.log("Hello World!"), 1000);

// callback hell
setTimeout(() => {
    console.log("Hello World 1!");
    setTimeout(() => {
        console.log("Hello World 2!");
        setTimeout(() => {
            console.log("Hello World 3!");
        }, 1000);
    }, 1000);
}, 1000);

// wrap in promise
let myPromise = new Promise((resolve, reject) => {
    // producing code (async, may take some time)
    try {
        setTimeout(resolve, 1000); // async function, so thread will continue on with the rest of the code and come back once this is complete
    } catch (err) {
        reject(err);
    }
});

// wrap in function that returns a promise
function delay() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(resolve, 1000);
        } catch (err) {
            reject(err);
        }
    });
}

// consuming code
myPromise.then( // waits for promise (async) - if no promise returned, it doesn't wait for anything and executes
    // two functions (first for fulfilled promise, second for rejected promise)
    () => {
        console.log("Fulfilled promise handled");
        return delay();
    },
    (err) => { // you don't need this since we already have catch handler unless the error you want to catch is specific to the promise you are waiting for
        console.log(err)
        throw err;
    },
).then(
    () => {
        console.log("Fulfilled promise handled x2");
    },
    (err) => {
        console.log(err)
        throw err;
    },
).catch((err) => {
    console.log(err);
});
console.log("Printed this before consuming code handles promise");

// fetch(...) is async and returns a promise
fetch("111https://example.org/products.json").then(
    (val) => console.log(val),
    (err) => console.log(err)
);

async function random_stuff() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    await fetch("https://example.org/products.json"); // returns to caller immediately, and returns to this callstack until this is complete
    console.log("Delay complete");
}
random_stuff();
console.log("Print here after for loop in async, but before async operation");
