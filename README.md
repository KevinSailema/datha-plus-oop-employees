# Employee Management System

A TypeScript-based employee management system demonstrating Object-Oriented Programming principles including inheritance, encapsulation, and polymorphism.

## Features

- Base Employee class with common attributes and methods
- Specialized employee types (Full-Time and Hourly employees)
- Polymorphic salary calculation
- Encapsulation with private fields and public getters/setters
- Unit tests with Jest
- Type-safe implementation with TypeScript

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Usage

### Run the application

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Run built application

```bash
npm start
```

### Run tests

```bash
npm test
```

### Run tests with coverage

```bash
npm run test:coverage
```

## Project Structure

```
src/
├── models/
│   ├── Employee.ts
│   ├── FullTimeEmployee.ts
│   └── HourlyEmployee.ts
├── app/
│   └── main.ts
└── __tests__/
    └── models/
        ├── Employee.test.ts
        ├── FullTimeEmployee.test.ts
        └── HourlyEmployee.test.ts
```

## OOP Principles Demonstrated

- **Encapsulation**: Private fields with public getters/setters
- **Inheritance**: Specialized employee classes extending base Employee class
- **Polymorphism**: Different implementations of calculateSalary() method
- **Abstraction**: Abstract Employee class with abstract calculateSalary() method

## License

MIT
