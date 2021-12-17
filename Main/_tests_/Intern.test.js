const Intern = require ('../lib/Intern.js');

test('creates a new intern object', () => {
  const intern = new Intern('Steve', '6345', 'steve@gmail.com', 'Harvard');

  expect(intern.name).toBe('Steve');
  expect(intern.id).toBe('6345');
  expect(intern.email).toBe('steve@gmail.com');
  expect(intern.school).toBe('Harvard');

  expect(intern.getSchool()).toBe('Harvard');
  expect(intern.getRole()).toBe('Intern');  
});
