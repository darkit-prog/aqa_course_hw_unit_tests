// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
}

const QA: IEmployee = {
    name: "Darya",
    salary: 1000000,
    isManager: false,
}

console.log(QA);

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee;
const empKey: EmployeeKeys = "name";
console.log(empKey);

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type QaKeys = keyof typeof QA;
const qaKey: QaKeys = "isManager";
console.log(qaKey);

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof QA;
const userType: UserType = {
    name: "Kek",
    isManager: false,
    salary: 700
}
console.log(userType);

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type UnnecessaryFields = Partial<IEmployee>;
const unnecFields: UnnecessaryFields = { name: "Unnecessary" }
console.log(unnecFields);

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameAndSalaryFields = Pick<IEmployee, "name" | "salary">;
const nASF: NameAndSalaryFields = {
    name: "Pick",
    salary: 4
}
console.log(nASF);

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type AllWithoutManager = Omit<IEmployee, "isManager">;
const allWM: AllWithoutManager = {
    name: "Omit",
    salary: 5
}
console.log(allWM);

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type RequiredFields = Readonly<IEmployee>;
const reqField: RequiredFields = {
    name: "ReadOnly",
    salary: 2,
    isManager: false
};
// reqField.name = "David";
console.log(reqField);

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

type RecordFields = Record<string, keyof typeof QA>;
const recordField: RecordFields = {
    "Darya": "name",
    "10000": "salary",
    "true": "isManager"
}
console.log(recordField);

// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string;
    start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.\

abstract class Vehicle implements IVehicle {
    constructor(public make: string, public model: string) {}

    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`
    }

    abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
    constructor(public make: string, public model: string, public year: number) {
        super(make, model);
    }

    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`
    }
}

// 4. Создайте объект класса Car и проверьте работоспособность
const car = new Car("Toyota", "Camri", 2015);
console.log(car.start());
console.log(car.getDetails());
console.log(car.year);
