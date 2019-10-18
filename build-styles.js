const fs = require("fs").promises;
const process = require("process");
const path = require("path");
const less = require("less");
const rootStylesheet = "src/styles.less";
const outputFilePath = "dist/styles.css";

(async function main() {
  try {
    const lessSheet = (await fs.readFile(rootStylesheet)).toString();
    const cssSheet = (await less.render(
      lessSheet,
      {filename: path.resolve(rootStylesheet)}
    )).css;

    await fs.writeFile(outputFilePath, cssSheet);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}());