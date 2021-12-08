const Intern = require ('../lib/Intern.js');

test('creates a new intern object', () => {
  const intern = new Intern('');

  expect(intern.school).toBe('');

  intern.getSchool();
  intern.getRole();  /* Overridden to return 'Intern' */
});