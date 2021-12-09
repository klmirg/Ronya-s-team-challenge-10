const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object")
});

test("Can set name via constructor", ()=>{
  const name = "Ronya"
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
})

test("Can set name via getName()", ()=>{
  const name = "Ronya"
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name)
})



