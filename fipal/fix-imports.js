import fs from "fs";
import path from "path";

// Root project folder
const ROOT = "./src";

// Old and new casing (decide lowercase or PascalCase)
const WRONG = "Fipal";
const CORRECT = "fipal";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes(WRONG)) {
    const updated = content.replaceAll(WRONG, CORRECT);
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✅ Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (
      file.endsWith(".js") ||
      file.endsWith(".jsx") ||
      file.endsWith(".ts") ||
      file.endsWith(".tsx")
    ) {
      fixFile(fullPath);
    }
  }
}

walkDir(ROOT);
console.log("🎉 Import casing fixed!");
