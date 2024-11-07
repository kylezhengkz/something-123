// named export (you can use as many as you want)
class MyClass1 {
    val;

    constructor(val) {
        this.val = val;
    }

    getVal() {
        console.log("Reached MyClass1 method");
        return this.val;
    }
}
class MyClass2 {
    val;

    constructor(val) {
        this.val = val;
    }

    getVal() {
        console.log("Reached MyClass2 method");
        return this.val;
    }
}
module.exports = { MyClass1, MyClass2 }
