import { test, expect } from "@playwright/test"

test("passing", () => {
  expect(1).toBe(1)
})

test("failing", () => {
  expect(1).toBe(2)
})

test("flaky", ({}, testInfo) => {
  expect(testInfo.retry).toBe(1)
})
