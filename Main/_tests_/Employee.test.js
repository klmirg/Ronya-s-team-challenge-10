const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
  const employee = new Employee('Dave');

  expect(employee.name).toBe('name');
  expect(employee.id).toBe('id')
  expect(employee.email).toBe('email')

  employee.getRole();
  employee.getInventory();
});



// test('creates a health potion object', () => {
//   const potion = new Potion('health');

//   expect(potion.name).toBe('health');
//   expect(potion.value).toEqual(expect.any(Number));
// });