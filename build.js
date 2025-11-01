import * as esbuild from "esbuild";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf-8"));

const buildOptions = {
  entryPoints: ["index.js"],
  bundle: true,
  platform: "node",
  target: "node18",
  format: "esm",
  outfile: "dist/index.js",
  external: [
    // Keep node built-ins and dependencies external
    ...Object.keys(pkg.dependencies || {}),
    "fs",
    "path",
    "os",
    "crypto",
    "util",
    "stream",
    "http",
    "https",
    "url",
    "events",
    "buffer",
    "process",
  ],
  sourcemap: false, // Set to true if you want source maps (but reveals source structure)
  minify: true, // Minify code (makes it harder to read, not truly protected)
  treeShaking: true,
  banner: {
    js: `/* ${pkg.name} v${pkg.version} */`,
  },
};

try {
  await esbuild.build(buildOptions);
  console.log("✅ Build completed successfully!");
  console.log("📦 Output: dist/index.js");
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}
