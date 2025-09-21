// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов 
// у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов

type Developer = {
    firstname: string,
    salary: number,
}

class Designer {
    firstname: string;
    salary: number;

    constructor(firstname: string, salary: number) {
        this.firstname = firstname;
        this.salary = salary;
    }
}

interface ProductOwner {
    firstname: string,
    salary: number
}

const person1: Developer = {
    firstname: "Valera",
    salary: 100000,
}

const person2 = new Designer("Dilara", 80000);

const person3: ProductOwner = {
    firstname: "Ilya",
    salary: 150000
}

function getAvgSalary<T extends Developer | Designer | ProductOwner> (arr: T[]): number {
    if (arr.length === 0) {
        return 0;
    }

    const result: number = arr.reduce((sum, element) => sum + element.salary, 0);
    return result / arr.length;
}

console.log(getAvgSalary([person1, person2, person3]));
