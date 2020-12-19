import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs",
    exports: "auto",
  },
  plugins: [
		nodeResolve({ preferBuiltins: true }),
    commonjs({
      extensions: [".js", ".json"],
    }),
  ],
  external: ["pnpapi"],
};
