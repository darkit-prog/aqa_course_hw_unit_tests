class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  
  #checkLetters(string) {
    const alphabit = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < string.length; i++) {
      if (!(alphabit.includes(string[i].toLowerCase()))) {
        return false;
      }
    }
    return true;
  }

  #checkLettersAndSpaces(string) {
    const alphabit = 'abcdefghijklmnopqrstuvwxyz ';
    let countOfSpaces = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ' ') {
        countOfSpaces++;
      }
      if (!(alphabit.includes(string[i].toLowerCase()))) {
        return false;
      }
    }

    if (countOfSpaces === string.length) {
      return false;
    }
    return true;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (value.length < 2 || value.length > 50 || !this.#checkLetters(value)) {
      throw new Error('Incorrect firstname input')
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (value.length < 2 || value.length > 50 || !this.#checkLetters(value)) {
      throw new Error('Incorrect lastname input')
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || !this.#checkLettersAndSpaces(value) || !value) {
       throw new Error('Invalid salary input');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0 || value >= 10000 || isNaN(value)) {
      throw new Error('Invalid salary input');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee is not instance of class Employee')
    }
    this.#employees.push(employee);
  }
  
  getEmployees() {
    return this.#employees;
  }
  
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  // возвращает объект сотрудника, если такой найден, иначе ошибка.
  findEmployeeByName(firstName) {
    let index = this.#employees.find(employee => employee._firstName === firstName);
    console.log(index)
    if (typeof index === "undefined") {
      throw new Error('Invalid firstname input');
    }
    return index;
  }

  // удаляет сотрудника по имени и, если сотрудник найден, удалять его из массива.
  removeEmployee(firstName) {
    let index = this.#employees.find(employee => employee._firstName === firstName);
    if (typeof index === "undefined") {
      throw new Error('Invalid firstname input');
    }
    this.#employees.splice(index, 1);
  }

  // возвращает сумму всех зарплат сотрудников.
  getTotalSalary() {
    return this.#employees.reduce((result, element) => result += element.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

// console.log(company.getTotalSalary()); // 12000
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// console.log(company.findEmployeeByName('dfvfdv'));
// company.removeEmployee('John');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
