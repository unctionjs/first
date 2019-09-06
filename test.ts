/* eslint-disable no-magic-numbers */
import first from "./index";

test("works", () => {
  expect(first([1, 2, 3])).toEqual(1);
});

test("works", () => {
  expect(first("abc")).toEqual("a");
});
