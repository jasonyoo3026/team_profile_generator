const Employee = require('../lib/Employee.js');
const employee = new Employee('jason', '12', 'jasonyoo0326@gmail.com');

test('should get the inputs for the employee object', () => {
    expect(employee.name).toBe('jason');
    expect(employee.id).toBe('12');
    expect(employee.email).toBe('jasonyoo0326@gmail.com');
});

test('should get the name from the getName() method', () => {
    expect(employee.getName()).toBe('jason');
});

test('should get the id from the getId() method', () => {
    expect(employee.getId()).toBe('12');
});

test('should get the email address from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('should get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
