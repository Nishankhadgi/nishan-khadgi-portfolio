import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = join(projectRoot, "public");

await mkdir(publicRoot, { recursive: true });
await copyFile(join(projectRoot, "preview.css"), join(publicRoot, "preview.css"));
const html = await readFile(join(projectRoot, "preview.html"), "utf8");
await writeFile(join(publicRoot, "preview.html"), html, "utf8");
console.log("Prepared the SOC Analyst portfolio preview in public/.");
