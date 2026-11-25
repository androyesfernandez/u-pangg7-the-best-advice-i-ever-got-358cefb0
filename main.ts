// The Best Advice I Ever Got — entry program.
//
// Writes a single sentence about the best advice the writer ever
// received to /output/entry.txt. The line is 119 characters long,
// inside the competition's 1–200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one sentence, 119 characters, no trailing newline.
// It is a single sentence because the judge compares one-sentence
// entries; anything longer would fail the gate or dilute the line.
const LINE =
  'My dad said, "If you cannot be on time, be early," and twenty years on I finally heard what he meant: stop apologizing.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
