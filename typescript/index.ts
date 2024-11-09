let firstName: string = "Dylan"; // explicit typing (writing out type)
let otherGuy = "Bobby"; // inplicit typing - will infer type based on assigned value
// otherGuy = 9; // does not allow this due to static typing
console.log(firstName);
console.log(typeof firstName);

function greet(val: any) {
    console.log(`Hello, ${val}`); // note the backticks - called template literals (string interpolation)

    val = "Timmy"; // allowed
    let someVal: string = val; // assignment using any is allowed
    console.log(`Hello again but this time you are ${val}`);
    // can be dangerous, since it ignores type errors
    // val.push("Bob");
}
greet(50);
greet("Disney");

// unknown is a safer alternative to any
function greet1(val: unknown) {
    console.log(`Hello, ${val}`);
    
    // cannot assign to unknown type, so below would be an error
    // let s1: number = val;
    
    // does not ignore type errors, so below would be an error
    // val.push("Bob");
}
greet1(50);
greet1("Disney");
