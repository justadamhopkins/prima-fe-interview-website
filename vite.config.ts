import * as path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{js,ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/config/setupTests.ts",
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@atoms": path.resolve(__dirname, "src/components/_atoms"),
      "@molecules": path.resolve(__dirname, "src/components/_molecules"),
      "@organisms": path.resolve(__dirname, "src/components/_organisms"),
      "@templates": path.resolve(__dirname, "src/_templates"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@types": path.resolve(__dirname, "src/types"),
      "@test": path.resolve(__dirname, "src/test"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
    },
  },
});
