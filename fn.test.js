const fn = require("./fn");

//matcher = tobe (숫자/문자)
// test("1은 1임.", () => {
//   expect(1).toBe(1); //검증값. 기대값
// });

// test("2+3= 5임.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("2+3= 5임.", () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });

// test("3+3 != 5임.", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("이름과 나이를 전달 받아서 객체 전달", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달 받아서 객체 전달", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("null 은 null이다.", () => {
//   expect(null).toBeNull();
// });

// test("0은 false다.", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("true 반환.", () => {
//   expect(fn.add(1, 1)).toBeTruthy();
// });

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다

// test("id는 10자 이하여야 함", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// //정확히 동일한 결과값을 원할 때 => toBe, toEqual
// test("비밀번호 4자리 ", () => {
//   const pw = "1234";
//   expect(pw.length).toBe(4);
// });
// test("비밀번호 4자리 ", () => {
//   const pw = "1234";
//   expect(pw.length).toEqual(4);
// });
// test("0.1 + 0.2 = 0.3 ", () => {
//   //값이 근사치인지 판별
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test("Hello World에 H라는 글자가 있나?", () => {
//   expect("Hello World").toMatch(/h/i);
// });

test("유저 리스트에 Mike가 있나", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("에러 나나?", () => {
  //예외 발생시 패스
  expect(() => fn.throwErr()).toThrow("xx");
  //   expect(() => fn.throwErr()).toThrow("oo");
});
