import { defineConfig } from "@playwright/test"
import path from "node:path"

const outputDir = "./test-results/"

export default defineConfig({
  testDir: "./test",
  fullyParallel: true,
  retries: 2,
  outputDir,
  reporter: [
    [
      "json",
      { outputFile: path.join(outputDir, "playwright-json-report.json") },
    ],
    ["list"],
  ],
})
