export abstract class Employee {
  private firstName: string;
  private lastName: string;
  private id: string;
  private baseSalary: number;

  constructor(firstName: string, lastName: string, id: string, baseSalary: number) {
    this.validateInput(firstName, lastName, id, baseSalary);
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.baseSalary = baseSalary;
  }

  private validateInput(firstName: string, lastName: string, id: string, baseSalary: number): void {
    if (!firstName || firstName.trim().length === 0) {
      throw new Error('First name cannot be empty');
    }
    if (!lastName || lastName.trim().length === 0) {
      throw new Error('Last name cannot be empty');
    }
    if (!id || id.trim().length === 0) {
      throw new Error('Employee ID cannot be empty');
    }
    if (baseSalary < 0) {
      throw new Error('Base salary cannot be negative');
    }
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getId(): string {
    return this.id;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public setFirstName(firstName: string): void {
    if (!firstName || firstName.trim().length === 0) {
      throw new Error('First name cannot be empty');
    }
    this.firstName = firstName;
  }

  public setLastName(lastName: string): void {
    if (!lastName || lastName.trim().length === 0) {
      throw new Error('Last name cannot be empty');
    }
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
    console.log(`Name: ${this.getFullName()}`);
    console.log(`ID: ${this.id}`);
    console.log(`Base Salary: $${this.baseSalary.toFixed(2)}`);
    console.log(`Total Salary: $${this.calculateSalary().toFixed(2)}`);
    console.log('---------------------------');
  }
}
