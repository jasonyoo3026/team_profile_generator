const Manager = require('../lib/Manager.js');
const manager = new Manager('jason', '34', 'jasonyoo0326@gmail.com', '876');

test('should get the inputs for the manager object', () => {
    expect(manager.name).toBe('jason');
    expect(manager.id).toBe('34');
    expect(manager.email).toBe('jasonyoo0326@gmail.com');
    expect(manager.officeNumber).toBe('876');
});

test('should get the name from the getName() method', () => {
    expect(manager.getName()).toBe('jason');
});

test('should get the id from the getId() method', () => {
    expect(manager.getId()).toBe('34');
});

test('should get the email address from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('should get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('876');
});

test('should get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});