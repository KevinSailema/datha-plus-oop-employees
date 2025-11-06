export abstract class Employee {
  private firstName: string;
  private lastName: string;
  private id: string;
  private baseSalary: number;

  constructor(firstName: string, lastName: string, id: string, baseSalary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.baseSalary = baseSalary;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getId(): string {
    return this.id;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  // Setters
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public setBaseSalary(baseSalary: number): void {
    if (baseSalary < 0) {
      throw new Error('Base salary cannot be negative');
    }
    this.baseSalary = baseSalary;
  }

  public abstract calculateSalary(): number;

  public showInformation(): void {
    console.log('--- Employee Information ---');
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`ID: ${this.id}`);
    console.log(`Base Salary: $${this.baseSalary.toFixed(2)}`);
    console.log(`Total Salary: $${this.calculateSalary().toFixed(2)}`);
    console.log('---------------------------');
  }
}
