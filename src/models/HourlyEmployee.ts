import { Employee } from './Employee';

export class HourlyEmployee extends Employee {
  private hoursWorked: number;
  private hourlyRate: number;

  constructor(
    firstName: string,
    lastName: string,
    id: string,
    baseSalary: number,
    hoursWorked: number,
    hourlyRate: number
  ) {
    super(firstName, lastName, id, baseSalary);
    this.validateHourlyInput(hoursWorked, hourlyRate);
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  private validateHourlyInput(hours: number, rate: number): void {
    if (hours < 0) {
      throw new Error('Hours worked cannot be negative');
    }
    if (rate < 0) {
      throw new Error('Hourly rate cannot be negative');
    }
  }

  public calculateSalary(): number {
    return this.hoursWorked * this.hourlyRate;
  }

  public getHoursWorked(): number {
    return this.hoursWorked;
  }

  public setHoursWorked(hours: number): void {
    if (hours < 0) {
      throw new Error('Hours worked cannot be negative');
    }
    this.hoursWorked = hours;
  }

  public getHourlyRate(): number {
    return this.hourlyRate;
  }

  public setHourlyRate(rate: number): void {
    if (rate < 0) {
      throw new Error('Hourly rate cannot be negative');
    }
    this.hourlyRate = rate;
  }

  public getWeeklyHours(): number {
    return this.hoursWorked;
  }

  public getMonthlyProjection(): number {
    const weeksPerMonth = 4;
    return this.calculateSalary() * weeksPerMonth;
  }
}
