"use strict";
class SimpleCollection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    get(index) {
        return this.items[index];
    }
    size() {
        return this.items.length;
    }
}
const numberCollection = new SimpleCollection();
numberCollection.add(1);
numberCollection.add(2);
console.log(numberCollection.get(0));
console.log(numberCollection.size());
const man = {
    name: "Max",
    age: 30,
};
const nameValue = man.name;
console.log(nameValue);
