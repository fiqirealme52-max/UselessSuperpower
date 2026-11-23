import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint entry.
// A single original line naming a hilariously useless superpower.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
const LINE =
  "I can rewind time by ten seconds — but only while I'm already regretting something I did eleven seconds ago.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
