const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('jason', '34', 'jasonyoo0326@gmail.com', 'jasonyoo3026');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('jason');
    expect(engineer.id).toBe('34');
    expect(engineer.email).toBe('jasonyoo0326@gmail.com');
    expect(engineer.github).toBe('jasonyoo3026');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('jason');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('34');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('test if we can get the github name from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jasonyoo3026');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});