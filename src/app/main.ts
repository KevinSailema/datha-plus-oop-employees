import { Employee } from '../models/Employee';
import { FullTimeEmployee } from '../models/FullTimeEmployee';
import { HourlyEmployee } from '../models/HourlyEmployee';

function demonstratePolymorphism(): void {
  const employees: Employee[] = [
    new FullTimeEmployee('John', 'Doe', 'FT001', 5000),
    new FullTimeEmployee('Sarah', 'Johnson', 'FT002', 6000),
    new HourlyEmployee('Mike', 'Williams', 'HR001', 0, 160, 30),
    new HourlyEmployee('Lisa', 'Brown', 'HR002', 0, 140, 25),
  ];

  console.log('=== Employee Salary Calculation - Polymorphism Demo ===\n');

  employees.forEach((employee: Employee) => {
    const salary = employee.calculateSalary();
    console.log(`${employee.getFirstName()} ${employee.getLastName()} (${employee.getId()})`);
    console.log(`Calculated Salary: $${salary.toFixed(2)}\n`);
  });
}

demonstratePolymorphism();
