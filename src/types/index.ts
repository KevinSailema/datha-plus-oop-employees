export interface EmployeeData {
  firstName: string;
  lastName: string;
  id: string;
  baseSalary: number;
}

export interface HourlyEmployeeData extends EmployeeData {
  hoursWorked: number;
  hourlyRate: number;
}
