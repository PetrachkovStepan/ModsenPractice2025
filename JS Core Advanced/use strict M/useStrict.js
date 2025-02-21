'use strict'
const vowels = "aeijoquyAEIJOQUY"

function getVowelsCount(string) {
    let counter = 0
    for(let i= 0; i < string.length; i ++){
        if(vowels.indexOf(string[i]) != -1){
            counter++
        }
    }
    return counter
}

console.log(getVowelsCount("aaabbbAAABBB"))
console.log(getVowelsCount("bbb"))
console.log(getVowelsCount(""))