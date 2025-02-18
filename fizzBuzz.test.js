const { fizzBuzz } = require("./fizzBuzz");

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 4).toEqual(5);
});

test("fizzBuzz returns 1 if 1 is passed in", () => {
  expect(fizzBuzz([1])).toEqual([1]);
});

test("fizzBuzz returns 2 if 2 is passed in", () => {
  expect(fizzBuzz([2])).toEqual([2]);
});

test("fizzBuzz returns fizz if three is passed in", () => {
  expect(fizzBuzz([3])).toEqual(["fizz"]);
});

test("fizzBuzz returns fizz if 6 is passed in", () => {
  expect(fizzBuzz([6])).toEqual(["fizz"]);
});