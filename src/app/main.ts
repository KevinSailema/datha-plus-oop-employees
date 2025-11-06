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

  console.log('=== Employee Management System ===\n');
  console.log('Demonstrating polymorphism with showInformation() method:\n');

  employees.forEach((employee: Employee) => {
    employee.showInformation();
    console.log();
  });

  console.log('=== Summary ===');
  const totalPayroll = employees.reduce((sum, emp) => sum + emp.calculateSalary(), 0);
  console.log(`Total Employees: ${employees.length}`);
  console.log(`Total Payroll: $${totalPayroll.toFixed(2)}`);
}

demonstratePolymorphism();
