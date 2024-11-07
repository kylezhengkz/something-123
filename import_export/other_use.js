// default import (you can name it anything, it will just resolve to the single export)
const nameAnything = require('./other');

obj = new nameAnything(5);
console.log(obj.getVal());
