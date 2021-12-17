const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object")
});

test("Can set name via constructor", ()=> {
  const name = "Ronya";
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
})

test("Can set name via getName()", ()=> {
  const name = "Ronya";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name)
})

test("Can set role via getRole()", ()=> {
  const name = "Ronya";
  const role = "Employee";
  const employee = new Employee(name, role);
  expect(employee.getRole()).toBe(role)
})

test("Can set id via getId()", ()=> {
  const name = "Ronya";
  const role = "Employee";
  const id = 245;
  const employee = new Employee(name, id, role);
  expect(employee.getId()).toBe(id)
})

test("Can set email via getEmail()", ()=> {
  const name = "Ronya";
  const role = "Employee";
  const id = 6345;
  const email = "klmirg6@gmail.com";
  const employee = new Employee(name, id, email);
  expect(employee.getEmail()).toBe(email)
})