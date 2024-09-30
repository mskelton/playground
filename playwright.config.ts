import { defineConfig } from "@playwright/test"

const outputDir = "./test-results/"

export default defineConfig({
  testDir: "./test",
  fullyParallel: true,
  retries: 2,
  outputDir,
})
