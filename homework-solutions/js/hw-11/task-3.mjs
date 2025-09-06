class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
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

class Developer extends Employee {
  constructor(firstName, lastName,  salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = [...programmingLanguages];
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || !language) {
      throw new Error('Invalid language input')
    }
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }
  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = [...designTools];
  }
  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool) {
      throw new Error('Invalid tool input')
    }
    this.designTools.push(tool)
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

// Добавлять сотрудника с таким же именем+фамилией как у уже имеющегося - нельзя
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee is not instance of class Employee')
    }

    if (this.#employees.some((emp) => emp.firstName === employee.firstName && emp.lastName === employee.lastName)) {
      throw new Error(`Employee with these firstname and lastname already exists`);
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

  getEmployeesByProfession(profession) {
    switch (profession) {
      case "Developer":
        return this.#employees.filter(employee => employee instanceof Developer);
      case "Manager":
        return this.#employees.filter(employee => employee instanceof Manager);
      case "Designer":
        return this.#employees.filter(employee => employee instanceof Designer);
      default:
        return [];
    }
  }
}

// const company = new Company('Tech Corp', 123456, 'Main Street');

// company.addEmployee(new Developer('John', 'Doe', 1000, ['JS', 'CI/CD']));
// company.addEmployee(new Developer('Barbara', 'Johnson', 2000, ['TS', 'Docker']));
// company.addEmployee(new Designer('Petr', 'Dukins', 3000, ['Figma', 'Confluence']));
// company.addEmployee(new Designer('Jane', 'Smith', 2500, ['Jira', 'Figma']));
// company.addEmployee(new Manager('Mark', 'Brown', 1500, 5));
// company.addEmployee(new Manager('Daria', 'Kit', 3500, 5));

// console.log(company.getEmployeesByProfession('Designer'));
// console.log(company.getEmployeesByProfession('Developer'));
// console.log(company.getEmployeesByProfession('Manager'));

export { Employee, Company, Designer, Developer, Manager };
