import fs from "fs";
import path from "path";

const file = path.resolve(
  "node_modules/@salla.sa/twilight-bundles/dist/vite-plugins/demo.js"
);

if (!fs.existsSync(file)) {
  console.log("⚠️ twilight-bundles demo.js not found, skipping fix...");
  process.exit(0);
}

let content = fs.readFileSync(file, "utf8");

const oldCode = "const I = `/@fs${_}`";
const newCode = "const I = `/@fs/${_}`";

if (content.includes(oldCode)) {
  content = content.replace(oldCode, newCode);
  fs.writeFileSync(file, content);
  console.log("✅ Windows /@fs fix applied");
} else if (content.includes(newCode)) {
  console.log("✅ Windows /@fs fix already applied");
} else {
  console.log("⚠️ Expected /@fs code not found");
}