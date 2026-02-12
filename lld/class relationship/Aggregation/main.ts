class Employee {
    constructor(public id: number, public name: string) { }

    getDetails(): string {
        return `Employee: ${this.name} (ID: ${this.id})`;
    }
}

class Department {

    public employees: Employee[] = [];

    constructor(public name: string) { }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    listEmployee(): void {
        console.log(`Department name ${this.name}`);
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        })
    }
}

const emp1 = new Employee(343, "Kazi Hasin");
const emp2 = new Employee(534, "Md Abul");

const ITDepartment = new Department('IT');

ITDepartment.addEmployee(emp1);
ITDepartment.addEmployee(emp2);

ITDepartment.listEmployee();



