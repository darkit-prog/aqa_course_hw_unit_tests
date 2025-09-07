class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0 || typeof value !== 'number') {
      throw new Error('Invalid salary input');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// const employeeFirst = new Employee('Petr', 'Dukins', 'QA', 100000);
// console.log(employeeFirst.firstName);
// employeeFirst.profession = "Developer";
// console.log(employeeFirst);
// employeeFirst.salary = 20000000;
// console.log(employeeFirst.salary);
// // employeeFirst.salary = "20000000";
// // console.log(employeeFirst.salary);
// employeeFirst.salary = -10;
// console.log(employeeFirst.salary);
// console.log(employeeFirst.getFullName())

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

class Company {
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
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
}

// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]
// console.log(company.getInfo());

export { Employee, Company };
