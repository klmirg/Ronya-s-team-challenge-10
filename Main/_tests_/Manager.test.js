const Manager = require ('../lib/Manager.js');

test('creates a new manager object', () => {
  const manager = new Manager('Dave');

  expect(manager.officeNumber).toBe('officeNumber');


});



// test('creates a health potion object', () => {
//   const potion = new Potion('health');

//   expect(potion.name).toBe('health');
//   expect(potion.value).toEqual(expect.any(Number));
// });