import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = join(projectRoot, "public");

await mkdir(publicRoot, { recursive: true });
await copyFile(join(projectRoot, "preview.css"), join(publicRoot, "preview.css"));

let html = await readFile(join(projectRoot, "preview.html"), "utf8");
// Keep the portfolio consistent with the supplied resume (Aug 2026 start date).
html = html.replace("OCT 2026 — PRESENT", "AUG 2026 — PRESENT");
// Correct static-asset paths after the preview is served from Next.js /public.
html = html.replaceAll('href="public/favicon.svg"', 'href="/favicon.svg"');
html = html.replaceAll('href="public/resume.pdf"', 'href="/resume.pdf"');
if (!html.includes("/contact-preview-bridge.js")) {
  html = html.replace("</body>", '  <script src="/contact-preview-bridge.js" defer></script>\n</body>');
}
await writeFile(join(publicRoot, "preview.html"), html, "utf8");
console.log("Prepared interactive portfolio preview in public/.");
