"use strict";
function processData(input) {
    if (Array.isArray(input)) {
        return input.length;
    }
    else {
        return `Name: ${input.name}, Age: ${input.age}`;
    }
}
const person = { name: "Alice", age: 30 };
const people = [{ name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];
console.log(processData(person));
console.log(processData(people));
