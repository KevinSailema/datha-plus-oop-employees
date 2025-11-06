import { HourlyEmployee } from '../../models/HourlyEmployee';

describe('HourlyEmployee', () => {
  let employee: HourlyEmployee;

  beforeEach(() => {
    employee = new HourlyEmployee('Jane', 'Smith', 'EMP002', 0, 160, 25);
  });

  describe('Constructor', () => {
    test('should create an hourly employee with correct attributes', () => {
      expect(employee.getFirstName()).toBe('Jane');
      expect(employee.getLastName()).toBe('Smith');
      expect(employee.getId()).toBe('EMP002');
      expect(employee.getHoursWorked()).toBe(160);
      expect(employee.getHourlyRate()).toBe(25);
    });

    test('should throw error for negative hours in constructor', () => {
      expect(() => new HourlyEmployee('Jane', 'Smith', 'EMP002', 0, -10, 25))
        .toThrow('Hours worked cannot be negative');
    });

    test('should throw error for negative rate in constructor', () => {
      expect(() => new HourlyEmployee('Jane', 'Smith', 'EMP002', 0, 160, -5))
        .toThrow('Hourly rate cannot be negative');
    });
  });

  describe('calculateSalary', () => {
    test('should calculate salary based on hours and rate', () => {
      const expectedSalary = 160 * 25;
      expect(employee.calculateSalary()).toBe(expectedSalary);
    });

    test('should recalculate when hours change', () => {
      employee.setHoursWorked(180);
      const expectedSalary = 180 * 25;
      expect(employee.calculateSalary()).toBe(expectedSalary);
    });

    test('should recalculate when rate changes', () => {
      employee.setHourlyRate(30);
      const expectedSalary = 160 * 30;
      expect(employee.calculateSalary()).toBe(expectedSalary);
    });
  });

  describe('Additional Methods', () => {
    test('should return weekly hours correctly', () => {
      expect(employee.getWeeklyHours()).toBe(160);
    });

    test('should calculate monthly projection correctly', () => {
      const weeklySalary = 160 * 25;
      const expectedMonthly = weeklySalary * 4;
      expect(employee.getMonthlyProjection()).toBe(expectedMonthly);
    });
  });

  describe('Validation', () => {
    test('should throw error for negative hours', () => {
      expect(() => employee.setHoursWorked(-10)).toThrow('Hours worked cannot be negative');
    });

    test('should throw error for negative rate', () => {
      expect(() => employee.setHourlyRate(-5)).toThrow('Hourly rate cannot be negative');
    });
  });
});
