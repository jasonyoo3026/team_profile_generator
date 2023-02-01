const Intern = require('../lib/Intern.js');
const intern = new Intern('jason', '34', 'jasonyoo0326@gmail.com', 'USYD');

test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('jason');
    expect(intern.id).toBe('34');
    expect(intern.email).toBe('jasonyoo0326@gmail.com');
    expect(intern.school).toBe('USYD');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('jason');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('34');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('USYD');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});