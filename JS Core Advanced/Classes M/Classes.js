class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateYearSalary() {
        return salary*12;
    }
}

  class Manager extends Employee{
    constructor(name, salary, bonus) {
      super(name, salary)
      this.bonus = bonus;
    }
  
    calculateYearSalary() {
      return (this.salary + this.bonus)*12;
    }
  }

  let manager1 = new Manager("Manager1", 100, 10)
  let manager2 = new Manager("Manager2", 90, 15)

  console.log("Manager1: " + manager1.calculateYearSalary());
  console.log("Manager2: " + manager2.calculateYearSalary());