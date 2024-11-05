// using strict mode prevents defining variables without declaration

// initialize includes both declaration and definition/assignment

// block scope
{
    let x = 3; // let, var, const are variable declarations
    var y = 4;
}
console.log(y);
// x cannot be accessed outside block, but var keyword does enable block scope, so y can be accessed here

myFunction();
// function scope is different than block scope. var will be function scope
function myFunction() {
    z = 3; // global scope if no declaration
    var a = 10;
}

console.log(z); // only works if function is called

// no declaration would make it global
g = 5;

// declarations outside function scope has global scope
let c = 10;

// global scope is JS environment, so you can run the code below if this script runs in browser
// console.log(window.c);
// window object represents open window in browser

carName = "volvo";
var carName; // moves declarations to top of current scope by default when using var keyword

bruh = "volvo";
let bruh; // same with let and const, but they are not initialized, so the definition above won't work, but the code is aware that the variable exists

function scoping_let() {
    let x = 1;
    if (true) {
        let x = 2;
    }
    return x; // returns 1
}

function scoping_var() {
    var x = 1;
    if (true) {
        var x = 2;
    }
    return x; // returns 2
}

// let is prefered
