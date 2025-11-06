import { Employee, FullTimeEmployee, HourlyEmployee } from '../models';

class EmployeeManagementSystem {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public displayAllEmployees(): void {
    console.log('=== Employee Management System ===\n');
    console.log(`Total Employees: ${this.employees.length}\n`);

    this.employees.forEach((employee: Employee, index: number) => {
      console.log(`Employee #${index + 1}`);
      employee.showInformation();
      console.log();
    });
  }

  public calculateTotalPayroll(): number {
    return this.employees.reduce(
      (total: number, employee: Employee) => total + employee.calculateSalary(),
      0
    );
  }

  public displayPayrollSummary(): void {
    const totalPayroll = this.calculateTotalPayroll();
    const averageSalary = this.employees.length > 0 
      ? totalPayroll / this.employees.length 
      : 0;

    console.log('=== Payroll Summary ===');
    console.log(`Total Employees: ${this.employees.length}`);
    console.log(`Total Payroll: $${totalPayroll.toFixed(2)}`);
    console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
    console.log('=======================\n');
  }
}

function main(): void {
  const system = new EmployeeManagementSystem();

  const fullTimeEmployee1 = new FullTimeEmployee('John', 'Doe', 'FT001', 5000);
  const fullTimeEmployee2 = new FullTimeEmployee('Sarah', 'Johnson', 'FT002', 6000);
  const hourlyEmployee1 = new HourlyEmployee('Mike', 'Williams', 'HR001', 0, 160, 30);
  const hourlyEmployee2 = new HourlyEmployee('Lisa', 'Brown', 'HR002', 0, 140, 25);

  system.addEmployee(fullTimeEmployee1);
  system.addEmployee(fullTimeEmployee2);
  system.addEmployee(hourlyEmployee1);
  system.addEmployee(hourlyEmployee2);

  system.displayAllEmployees();
  system.displayPayrollSummary();
}

main();
