// default export (can only default export once)
module.exports = class MyClass1 {
    val;

    constructor(val) {
        this.val = val;
    }

    getVal() {
        console.log("Here in this method");
        return this.val;
    }
}
