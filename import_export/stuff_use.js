// named import (name must match)
const { MyClass1, MyClass2 } = require('./stuff');

obj1 = new MyClass1(5); // need new because it needs to be stored somewhere. exception applies to primitive types. in other languages, without new makes it temporary
obj2 = new MyClass2(8);

console.log(obj1.getVal());
console.log(obj2.getVal());
