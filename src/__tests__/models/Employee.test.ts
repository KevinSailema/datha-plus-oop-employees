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

    test('should return full name correctly', () => {
      expect(employee.getFullName()).toBe('John Doe');
    });

    test('should throw error for empty first name', () => {
      expect(() => new TestEmployee('', 'Doe', 'EMP001', 3000)).toThrow('First name cannot be empty');
    });

    test('should throw error for empty last name', () => {
      expect(() => new TestEmployee('John', '', 'EMP001', 3000)).toThrow('Last name cannot be empty');
    });

    test('should throw error for empty ID', () => {
      expect(() => new TestEmployee('John', 'Doe', '', 3000)).toThrow('Employee ID cannot be empty');
    });

    test('should throw error for negative base salary', () => {
      expect(() => new TestEmployee('John', 'Doe', 'EMP001', -100)).toThrow('Base salary cannot be negative');
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

    test('should throw error for negative base salary in setter', () => {
      expect(() => employee.setBaseSalary(-100)).toThrow('Base salary cannot be negative');
    });

    test('should throw error for empty first name in setter', () => {
      expect(() => employee.setFirstName('')).toThrow('First name cannot be empty');
    });

    test('should throw error for empty last name in setter', () => {
      expect(() => employee.setLastName('')).toThrow('Last name cannot be empty');
    });
  });

  describe('calculateSalary', () => {
    test('should calculate salary correctly', () => {
      expect(employee.calculateSalary()).toBe(3000);
    });
  });
});
