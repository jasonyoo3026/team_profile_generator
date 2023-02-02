const Intern = require('../lib/Intern.js');
const intern = new Intern('jason', '34', 'jasonyoo0326@gmail.com', 'USYD');

test('should get the inputs for the intern object', () => {
    expect(intern.name).toBe('jason');
    expect(intern.id).toBe('34');
    expect(intern.email).toBe('jasonyoo0326@gmail.com');
    expect(intern.school).toBe('USYD');
});

test('should get the name from the getName() method', () => {
    expect(intern.getName()).toBe('jason');
});

test('should get the id from the getId() method', () => {
    expect(intern.getId()).toBe('34');
});

test('should get the email address from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jasonyoo0326@gmail.com');
});

test('should get name of the school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('USYD');
});

test('should get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});