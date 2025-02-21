try {
    letVariable = "LET Variable is used before declaration"
    console.log(letVariable)
} catch (error) {
    console.log("Cant use LET variable before declaration");
}
try {
    varVariable = "VAR Variable is used before declaration"
    console.log(varVariable)
} catch (error) {
    console.log("Cant use VAR Variable before declaration");
}
try {
    constVariable = "CONST Variable is used before declaration"
    console.log(constVariable)
} catch (error) {
    console.log("Cant use CONST Variable before declaration");
}

let letVariable
var varVariable
const constVariable = ""