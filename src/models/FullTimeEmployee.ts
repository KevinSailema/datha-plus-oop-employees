import { Employee } from './Employee';

export class FullTimeEmployee extends Employee {
  private static readonly BONUS_PERCENTAGE: number = 0.10;

  constructor(firstName: string, lastName: string, id: string, baseSalary: number) {
    super(firstName, lastName, id, baseSalary);
  }

  public calculateSalary(): number {
    const baseSalary = this.getBaseSalary();
    const bonus = baseSalary * FullTimeEmployee.BONUS_PERCENTAGE;
    return baseSalary + bonus;
  }

  public getBonusAmount(): number {
    return this.getBaseSalary() * FullTimeEmployee.BONUS_PERCENTAGE;
  }

  public static getBonusPercentage(): number {
    return FullTimeEmployee.BONUS_PERCENTAGE;
  }
}
