function ArraySquareSumm(array) {
    let sum = 0;
    array.forEach(function(num) {
        if(num instanceof Array){
            sum += ArraySquareSumm(num)
        }
        else{         
            sum += num*num;
        }
    });
    return sum
}

console.log(ArraySquareSumm([1,2,3]))
console.log(ArraySquareSumm([[1, 1],[2,2]]))
console.log(ArraySquareSumm([[[1,1,1], [1,1,1]],[[2,2,2],[1]]]))
console.log(ArraySquareSumm([]))
