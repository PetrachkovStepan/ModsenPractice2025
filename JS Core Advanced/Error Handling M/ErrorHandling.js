function myExeprionThrow (num1, num2){
    try {
        if(num2 == 0){
            throw new Error("Второе число равно нулю");
        }
    } catch (error) {
        console.log(error.message)
    }
}

console.log(1 + ", " + 1);
myExeprionThrow(1,1)
console.log(1 + ", " + 0);
myExeprionThrow(1,0)