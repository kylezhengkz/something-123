hello = "Hello World!";
console.log(hello);

hello = function() {
    return "Hello World!";
}
console.log(hello());

hello = () => {
    return "Hello World!";
}
console.log(hello());

hello = () => "Hello World!"; // if function only has one statement, you can remove brackets and return
console.log(hello());

hello = () => { "Hello World!" };
console.log(hello()); // undefined

hello = (val) => "Hello World " + val + "!";
console.log(hello("Kyle Zheng"));

// you don't need parentheses if only one parameter
hello = val => "Hello World " + val + "!";
console.log(hello("Kyle Zheng"));

// no parameters
hello => "Hello World " + "!";
console.log(hello("Kyle Zheng"));

// in regular functions, this represents object that called function
// in arrow functions, this represents object that defined function
