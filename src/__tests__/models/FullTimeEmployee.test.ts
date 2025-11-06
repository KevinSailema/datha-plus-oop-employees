import { FullTimeEmployee } from '../../models/FullTimeEmployee';

describe('FullTimeEmployee', () => {
  let employee: FullTimeEmployee;

  beforeEach(() => {
    employee = new FullTimeEmployee('John', 'Doe', 'EMP001', 3000);
  });

  describe('Constructor', () => {
    test('should create a full-time employee with correct attributes', () => {
      expect(employee.getFirstName()).toBe('John');
      expect(employee.getLastName()).toBe('Doe');
      expect(employee.getId()).toBe('EMP001');
      expect(employee.getBaseSalary()).toBe(3000);
      expect(employee.getBonusPercentage()).toBe(0.10);
    });
  });

  describe('calculateSalary', () => {
    test('should calculate salary with 10% bonus', () => {
      const expectedSalary = 3000 + (3000 * 0.10);
      expect(employee.calculateSalary()).toBe(expectedSalary);
    });

    test('should calculate correct salary for different base salary', () => {
      employee.setBaseSalary(5000);
      const expectedSalary = 5000 + (5000 * 0.10);
      expect(employee.calculateSalary()).toBe(expectedSalary);
    });
  });
});
