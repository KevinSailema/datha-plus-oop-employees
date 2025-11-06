import { Employee } from '../../models/Employee';

class TestEmployee extends Employee {
  public calculateSalary(): number {
    return this.getBaseSalary();
  }
}

describe('Employee', () => {
  let employee: Employee;

  beforeEach(() => {
    employee = new TestEmployee('John', 'Doe', 'EMP001', 3000);
  });

  describe('Constructor and Getters', () => {
    test('should create an employee with correct attributes', () => {
      expect(employee.getFirstName()).toBe('John');
      expect(employee.getLastName()).toBe('Doe');
      expect(employee.getId()).toBe('EMP001');
      expect(employee.getBaseSalary()).toBe(3000);
    });
  });

  describe('Setters', () => {
    test('should update first name', () => {
      employee.setFirstName('Jane');
      expect(employee.getFirstName()).toBe('Jane');
    });

    test('should update last name', () => {
      employee.setLastName('Smith');
      expect(employee.getLastName()).toBe('Smith');
    });

    test('should update base salary', () => {
      employee.setBaseSalary(4000);
      expect(employee.getBaseSalary()).toBe(4000);
    });

    test('should throw error for negative base salary', () => {
      expect(() => employee.setBaseSalary(-100)).toThrow('Base salary cannot be negative');
    });
  });

  describe('calculateSalary', () => {
    test('should calculate salary correctly', () => {
      expect(employee.calculateSalary()).toBe(3000);
    });
  });
});
