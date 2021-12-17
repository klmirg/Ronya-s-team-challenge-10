const Manager = require ('../lib/Manager.js');

test('creates a new manager object', () => {
  const manager = new Manager('Dave', '765', 'dave@gmail.com', '227' );

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('765');
  expect(manager.email).toBe('dave@gmail.com');
  expect(manager.officeNumber).toBe('227');

  expect(manager.getRole()).toBe('Manager');
});
