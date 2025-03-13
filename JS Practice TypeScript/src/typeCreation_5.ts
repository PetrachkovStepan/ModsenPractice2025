interface Collection<T> {
  add(item: T): void;
  remove(item: T): boolean;
  get(index: number): T | undefined;
  size(): number;
}

class SimpleCollection<T> implements Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  size(): number {
    return this.items.length;
  }
}
const numberCollection = new SimpleCollection<number>();
numberCollection.add(1);
numberCollection.add(2);
console.log(numberCollection.get(0)); // 1
console.log(numberCollection.size()); // 2

// Обобщенный тип для получения типа значения по ключу
type ValueOfKey<T, K extends keyof T> = T[K];

interface Man {
  name: string;
  age: number;
}
const man: Man = {
  name: "Max",
  age: 30,
};
const nameValue: ValueOfKey<Man, "name"> = man.name; // string
console.log(nameValue);
