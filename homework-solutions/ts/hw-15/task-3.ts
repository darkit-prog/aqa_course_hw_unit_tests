// Task 3. Перед вами структура компании, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

// const enterprises = [
//   {
//     id: 1,
//     name: "Предприятие 1",
//     departments: [
//       {
//         id: 2,
//         name: "Отдел тестирования",
//         employees_count: 10,
//       },
//       {
//         id: 3,
//         name: "Отдел маркетинга",
//         employees_count: 20,
//       },
//       {
//         id: 4,
//         name: "Администрация",
//         employees_count: 15,
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Предприятие 2",
//     departments: [
//       {
//         id: 6,
//         name: "Отдел разработки",
//         employees_count: 50,
//       },
//       {
//         id: 7,
//         name: "Отдел маркетинга",
//         employees_count: 20,
//       },
//       {
//         id: 8,
//         name: "Отдел охраны труда",
//         employees_count: 5,
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Предприятие 3",
//     departments: [
//       {
//         id: 10,
//         name: "Отдел аналитики",
//         employees_count: 0,
//       },
//     ],
//   },
// ];

interface IDepartment {
  id: number,
  name: string,
  employees_count: number
}

interface IEnterprise {
  id: number,
  name: string,
  departments: IDepartment[];
}

class Department implements IDepartment {
  constructor(public id: number, public name: string, public employees_count: number) {}

  // Для вывода кол-ва сотрудников в департаменте
  public countEmployeesInDepartment(): string | number{
    return !(this.employees_count) ? "нет сотрудников" : this.employees_count;
  }

  public editDepartmentName(name: string) {
    this.name = name;
  }

  public removeEmployeeCount(emp_count: number) {
    this.employees_count -= emp_count;
  }

  public addEmployeeCount(emp_count: number) {
    this.employees_count += emp_count;
  }
}

class Enterprise implements IEnterprise {
  public departments: Department[] = [];
  constructor(public id: number, public name: string) {}

  // Подсчет кол-ва людей в предприятии
  public countEmployeesInEnterprise(): string | number{
    const count = this.departments.reduce((res, dep) => res += dep.employees_count, 0);
    return !count ? "нет сотрудников" : count;
  }

  // Отправляем инфу об искаемом департаменте
  private getDepartmentInfo(id: number): Department {
    const department = this.departments.find(dep => dep.id === id);
    if (!department) throw new Error(`Вы написали несуществующий id ${id} отдела`);
    return department;
  }

  public editDepartmentInEnterprise(id: number, name: string) {
    const department = this.getDepartmentInfo(id);
    department.editDepartmentName(name);
  }

  public deleteDepartmentInEnterprise(id: number) {
    const department = this.getDepartmentInfo(id);
    if (department.employees_count) throw new Error("В этом отделе есть сотрудники");

    const index = this.departments.indexOf(department);
    delete this.departments[index];
  }

  public moveEmployeesInOneEnterprise(id1: number, id2: number) {
    const department1 = this.getDepartmentInfo(id1);
    const department2 = this.getDepartmentInfo(id2);
    if (!department1.employees_count) throw new Error(`В отделе ${id1} нет сотрудников`);

    const emp_count = department1.employees_count;
    department2.addEmployeeCount(emp_count);
    department1.removeEmployeeCount(emp_count);
  }

  public printAllDepartmentsFromEnterprise() {
    this.departments.forEach(dep => console.log(`- ${dep.name} (${dep.countEmployeesInDepartment()})`));
  }
}

class EnterpriseCollection {
  protected enterprises: Enterprise[] = [];

  // Возвращает ищущееся предприятие по id
  private getEnterpriseInfo(id: number): Enterprise {
    const enterprise = this.enterprises.find(ent => ent.id == id);
    if (!enterprise) throw new Error(`Вы написали несуществующий id ${id} предприятия`);
    return enterprise;
  }

  // Возвращает ищущийся департамент
  private getEnterpriseByDepartment(value: number | string): Enterprise {
    if (typeof value === "number") {
      const department = this.enterprises.find(ent => ent.departments.find(dep => dep.id === value));
      if (!department) throw new Error(`Вы написали несуществующий id ${value} отдела`);
      return department;
    }
    else {
      const department = this.enterprises.find(ent => ent.departments.find(dep => dep.name === value));;
      if (!department) throw new Error(`Вы написали несуществующее название отдела ${value}`);
      return department;
    }
  }

  // генерирует id для департаментов и предприятий
  private generateId(): number {
    const enterpriseId = this.enterprises.map(ent => ent.id);
    const departmentId = this.enterprises.flatMap(ent => ent.departments.map(dep => dep.id));

    if (!enterpriseId.length) return 1;

    return Math.max(...[... enterpriseId, ...departmentId]) + 1;
  }

  // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  public getAll() {
    this.enterprises.forEach((ent) => {
      console.log(`${ent.name} (${ent.countEmployeesInEnterprise()})`);
      ent.printAllDepartmentsFromEnterprise();
    });
  }

  // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).
  public getEnterpriseName(value: number | string): string{
    return this.getEnterpriseByDepartment(value).name;
  }

  // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  public addEnterprise(name: string) {
    const newEnterprise = new Enterprise(this.generateId(), name);
    this.enterprises.push(newEnterprise);
  }

  // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, 
  // в которое будет добавлен отдел, и название отдела.
  // Оставила тут из-за generateId
  public addDepartment(id: number, name: string, employees_count: number) {
    const enterpriseId = this.enterprises.indexOf(this.getEnterpriseInfo(id));
    const newDepartment = new Department(this.generateId(), name, employees_count);
    this.enterprises[enterpriseId].departments.push(newDepartment);
  }

  // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  public editEnterprise(id: number, name: string) {
    this.getEnterpriseInfo(id).name = name;
  }

  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела
  public editDepartment(id: number, name: string) {
    const enterprise = this.getEnterpriseByDepartment(id);
    enterprise.editDepartmentInEnterprise(id, name);
  }

  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  public deleteEnterprise(id: number) {
    this.enterprises.splice(this.getEnterpriseInfo(id).id - 1, 1);
  }


  // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  public deleteDepartment(id: number) {
    const enterprise = this.getEnterpriseByDepartment(id);
    enterprise.deleteDepartmentInEnterprise(id);
  }

  // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, 
  // из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  public moveEmployees(id1: number, id2: number) {
    const enterprise = this.getEnterpriseByDepartment(id1);
    enterprise.moveEmployeesInOneEnterprise(id1, id2);
  }
}

let enterprise = new EnterpriseCollection();

// Пример:
enterprise.addEnterprise("Предприятие 1");
enterprise.addEnterprise("Предприятие 2");
enterprise.addEnterprise("Предприятие 3");

// Пример:
enterprise.addDepartment(1, "Отдел тестирования", 10);
enterprise.addDepartment(1, "Отдел маркетинга", 20);
enterprise.addDepartment(1, "Администрация", 15);
enterprise.addDepartment(2, "Отдел разработки", 50);
enterprise.addDepartment(2, "Отдел маркетинга", 20);
enterprise.addDepartment(2, "Отдел охраны труда", 5);
enterprise.addDepartment(3, "Отдел аналитики", 0);
// enterprise.addDepartment(5, "Дизайнер", 5);
// enterprise.getAll();

console.log(enterprise.getEnterpriseName(8));
console.log(enterprise.getEnterpriseName("Отдел аналитики"));

// console.log(enterprise.getEnterpriseName(2));
// console.log(enterprise.getEnterpriseName("Отдел"));

enterprise.editEnterprise(1, "Новое название предприятия")
enterprise.editEnterprise(3, "Хто я");
// enterprise.editEnterprise(4, "Тест");
// enterprise.getAll();

enterprise.editDepartment(6, "Новое название отдела");
enterprise.editDepartment(10, "Ноунейм");
// enterprise.editDepartment(100, "Новое название отдела");
// enterprise.getAll();

// enterprise.deleteEnterprise(3);
// enterprise.deleteEnterprise(100);
// enterprise.getAll();

// enterprise.deleteDepartment(10);
// enterprise.deleteDepartment(5);
// enterprise.deleteDepartment(100);

enterprise.moveEmployees(5, 6);
// enterprise.moveEmployees(5, 6);
enterprise.getAll();
