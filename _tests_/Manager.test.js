const Manager = require('../lib/Manager.js');
const manager = new Manager('jason', '34', 'jasonyoo0326@gmail.com', '876');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('jason');
    expect(manager.id).toBe('34');
    expect(manager.email).toBe('jasonyoo0326@gmail.com');
    expect(manager.officeNumber).toBe('876');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('jason');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('34');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('876');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});