/* eslint-disable no-magic-numbers */
import first from "./index.ts";

test(() => {
  expect(first([1, 2, 3])).toEqual(1);
});

test(() => {
  expect(first("abc")).toEqual("a");
});
