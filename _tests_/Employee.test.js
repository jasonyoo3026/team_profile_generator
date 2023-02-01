const Employee = require('../lib/Employee.js');
const employee = new Employee('jason', '34', 'jasonyoo0326@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('jason');
    expect(employee.id).toBe('34');
    expect(employee.email).toBe('jasonyoo0326@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('jason');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('34');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
