interface Person {
  name: string;
  age: number;
}
 function processData(input: Person): string;
 function processData(array: Person[]): string;
function processData(input: Person | Person[]): string | number {
    if (Array.isArray(input)) {
        // Если аргумент - массив, возвращаем его длину
        return input.length;
    } else {
        // Если аргумент - объект Person, возвращаем строку с информацией
        return `Name: ${input.name}, Age: ${input.age}`;
    }
}

// Примеры использования
const person: Person = { name: "Alice", age: 30 };
const people: Person[] = [{ name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];

console.log(processData(person)); // Выведет: Name: Alice, Age: 30
console.log(processData(people)); // Выведет: 2