function firstUnique(string) {
    return [...string].find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || '';
}

console.log(firstUnique("abcabcdn"))