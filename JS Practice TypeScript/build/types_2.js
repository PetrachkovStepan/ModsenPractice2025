"use strict";
let x = { a: 1 };
let requiredString = (a) => {
    switch (typeof a) {
        case "string":
            return a;
        default:
            throw new Error("Youn value is not string");
            break;
    }
    return "a";
};
console.log(requiredString("string"));
console.log(requiredString(1));
