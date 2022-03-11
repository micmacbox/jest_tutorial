const fn = require("./fn");

//matcher = tobe (숫자/문자)
test("1은 1임.", () => {
  expect(1).toBe(1); //검증값. 기대값
});

test("2+3= 5임.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3+3 != 5임.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
