import { isZero } from "./isZero";

test("isZero", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test("is_not_Zero", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
