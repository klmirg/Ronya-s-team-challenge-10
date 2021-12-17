const Engineer = require ('../lib/Engineer.js');

test('creates a new engineer object', () => {
  const engineer = new Engineer('Gene', '45', 'klmirg6@gmail.com', 'klmirg');

  expect(engineer.name).toBe('Gene');
  expect(engineer.id).toBe('45');
  expect(engineer.email).toBe('klmirg6@gmail.com');
  expect(engineer.github).toBe('klmirg');

  expect(engineer.getGithub()).toBe('klmirg');
  expect(engineer.getRole()).toBe('Engineer'); 
});

