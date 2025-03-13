class Child {
    readonly age: number;

    constructor(age: number) {
        this.age = age;
    }

    // Метод для демонстрации использования readonly поля
    getAge(): number {
        return this.age;
    }
}

// Пример использования
const child = new Child(10);
console.log(child.getAge()); // Выведет: 10