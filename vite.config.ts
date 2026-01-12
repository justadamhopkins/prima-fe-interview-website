import * as path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{js,ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/config/setupTests.ts",
    clearMocks: true,
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@atoms": path.resolve(__dirname, "src/components/_atoms"),
      "@molecules": path.resolve(__dirname, "src/components/_molecules"),
      "@organisms": path.resolve(__dirname, "src/components/_organisms"),
      "@templates": path.resolve(__dirname, "src/_templates"),
      "@utilities": path.resolve(__dirname, "src/utilities"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@types": path.resolve(__dirname, "src/types"),
      "@tests": path.resolve(__dirname, "src/tests"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
});
