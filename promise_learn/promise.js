let myPromise = new Promise(function(myResolve, myReject) { // must receive function with 2 parameters - myResolve and myReject are callback functions. You can name it whatever
    // producing code (typically asynchronous)
    try {
        let result = 3
        setTimeout(() => { myResolve(result) }, 1000); // return result value as result field
        // setTimeout(myResolve(result), 5000); won't work as intended since first argument must be a function name, not call
    } catch (err) {
        myReject(err); // return error object as result field
    }
});

// Promise object has a state field (pending, fulfilled, rejected) and result field:
//     “undefined” if “pending” (although you can never really access it)
//     A result value if “fulfilled” - stored in myResolve(...)
//     An error object if “rejected” - stored in myReject(...)
// You cannot directly access the state and result fields

// consuming code - handlers will not execute if promise is pending
myPromise.then(function(value) { // receives argument from myResolve() if promise is fulfilled, and runs asynchronously since it might take a while since it waits for promise to return
    console.log(value);
}).catch(function(error) { // receives argument from myReject() if promise is rejected, and runs asynchronously
    console.log(error);
});

// Purpose of promise is to wait for asynchronous code. You can use myResolve to wait to return value once asynchronous code is done executing. Using return only will run without waiting
async function some_async_func() {
    x = -1;
    setTimeout(() => { x = 1 }, 1000);
    return x; // will return -1 instead of waiting for x to turn 1
}
x = some_async_func();
console.log(x); // outputs -1
