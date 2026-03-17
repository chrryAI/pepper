import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    web: "src/web.ts",
    native: "src/native.ts",
    extension: "src/extension.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
})
