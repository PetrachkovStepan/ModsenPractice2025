"use strict";
let identifyElement = (element) => {
    switch (typeof element) {
        case "string":
            return "This is string";
            break;
        case "number":
            return "This is number";
            break;
        default:
            return "This is object";
            break;
    }
};
console.log(identifyElement("str"));
console.log(identifyElement(1));
console.log(identifyElement({ a: "str", b: 1 }));
