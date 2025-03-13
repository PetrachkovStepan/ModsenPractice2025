"use strict";
class Child {
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const child = new Child(10);
console.log(child.getAge());
