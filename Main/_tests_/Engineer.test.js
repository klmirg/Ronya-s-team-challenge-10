const Engineer = require ('../lib/Engineer.js');

test('creates a new engineer object', () => {
  const engineer = new Engineer('');

  expect(engineer.github).toBe('github');

  engineer.getGithub();
  engineer.getRole(); /* Overridden to return 'Engineer' */
});