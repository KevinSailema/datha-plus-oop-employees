import { Employee } from './Employee';

export class FullTimeEmployee extends Employee {
  private readonly bonusPercentage: number = 0.10;

  constructor(firstName: string, lastName: string, id: string, baseSalary: number) {
    super(firstName, lastName, id, baseSalary);
  }

  public calculateSalary(): number {
    const bonus = this.getBaseSalary() * this.bonusPercentage;
    return this.getBaseSalary() + bonus;
  }

  public getBonusPercentage(): number {
    return this.bonusPercentage;
  }
}
