import fs from "fs";
import path from "path";

function extractHead(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(
    /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>>[^\n]*\n?/,
  );
  if (match) {
    fs.writeFileSync(filePath, match[1]);
    console.log(`Resolved conflict in ${filePath}`);
  }
}

// 1. Resolve App.jsx
extractHead("src/App.jsx");

// 2. Resolve package (2).json and move to package.json
if (fs.existsSync("package (2).json")) {
  // Read package (2).json
  let pkgText = fs.readFileSync("package (2).json", "utf-8");

  // It has conflicts, let's just write the clean object we know AutoFlow uses
  const autoFlowPkg = {
    name: "automobile-portal",
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "vite build",
      lint: "eslint .",
      preview: "vite preview",
    },
    dependencies: {
      "@tailwindcss/vite": "^4.2.2",
      "framer-motion": "^12.38.0",
      "lucide-react": "^0.577.0",
      react: "^19.2.4",
      "react-countup": "^6.5.3",
      "react-dom": "^19.2.4",
      recharts: "^3.8.0",
    },
    devDependencies: {
      "@eslint/js": "^9.39.4",
      "@types/react": "^19.2.14",
      "@types/react-dom": "^19.2.3",
      "@vitejs/plugin-react": "^6.0.1",
      autoprefixer: "^10.4.27",
      eslint: "^9.39.4",
      "eslint-plugin-react-hooks": "^7.0.1",
      "eslint-plugin-react-refresh": "^0.5.2",
      globals: "^17.4.0",
      postcss: "^8.5.8",
      tailwindcss: "^4.2.2",
      vite: "^8.0.1",
    },
  };
  fs.writeFileSync("package.json", JSON.stringify(autoFlowPkg, null, 2));
  console.log("Restored package.json");
}

// 3. Move other (2) config files over
const mappings = [
  ["README (2).md", "README.md"],
  ["vite.config (2).js", "vite.config.js"],
  ["tailwind.config (2).js", "tailwind.config.js"],
  ["postcss.config (2).js", "postcss.config.js"],
  ["src/lib/utils (2).js", "src/lib/utils.js"],
];

for (const [srcFile, destFile] of mappings) {
  if (fs.existsSync(srcFile)) {
    // Check if it has conflicts
    extractHead(srcFile); // just in case

    fs.copyFileSync(srcFile, destFile);
    fs.unlinkSync(srcFile);
    console.log(`Replaced ${destFile} with ${srcFile}`);
  }
}

// Also delete package (2).json and package-lock (2).json
for (const file of ["package (2).json", "package-lock (2).json"]) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  }
}

// 4. Delete doctor dash files
for (const file of [
  "src/components/DoctorView.jsx",
  "src/components/PatientView.jsx",
]) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  }
}

console.log("Done cleaning up files");
