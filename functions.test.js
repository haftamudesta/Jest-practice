const functions12 = require("./functions");
test("test string length", () => {
  expect(functions12.stringLength("hello")).toBe(5);
});
test("test string reverses", () => {
  expect(functions12.reversetring("hello")).toEqual("olleh");
});

describe("calculator test", () => {
  test("2 plus 9 eqauls 11", () => {
    expect(functions12.add(2, 9)).toBe(11);
  });
  test("2 minus 9 eqauls -7", () => {
    expect(functions12.substract(2, 9)).toBe(-7);
  });
  test("2 multiplied by 9 eqauls 18", () => {
    expect(functions12.multiply(2, 9)).toBe(18);
  });
  test("18 devided by 9 eqauls 2", () => {
    expect(functions12.devide(18, 9)).toBe(2);
  });
});

test("captalize first letter", () => {
  expect(functions12.capitalize("hello")).toEqual("Hello");
});
