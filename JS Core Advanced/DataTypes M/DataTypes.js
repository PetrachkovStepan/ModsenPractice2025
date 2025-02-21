function summOfLastAndFirst(number) {
    let rez = 0
    let boof = number.toString()

    boof = boof.replace('-', '')

    rez += Number.parseInt(boof[0])
    rez += Number.parseInt(boof[boof.length - 1])

    return rez
}

console.log(summOfLastAndFirst(123))
console.log(summOfLastAndFirst(.3))
console.log(summOfLastAndFirst(0))
console.log(summOfLastAndFirst(-0.3))