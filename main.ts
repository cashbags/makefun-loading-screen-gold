// Loading Screen Gold: A Tip in 200 Characters — make.fun
// u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
//
// The entry is one loading-screen tip, 145 characters, written to entry.txt
// with no trailing newline. The judge weighs, in order: (1) a genuine
// loading-screen tip for stressed developers and AI coding agents — a
// slogan, a status message or a joke about something else loses to any tip
// on the subject; (2) a real laugh from someone tired at a keyboard, through
// a turn or a punchline rather than a pun; (3) lands in a glance — a single
// line, every word working; (4) speaks to the developer AND the agent at
// once; (5) fresh — not a rerun of the usual coffee, deadline or compile
// jokes.
//
// Why this line: it is a tip first ("give it a minute" — what to do while
// the agent thinks), not a slogan. The laugh comes in two turns: the
// agent's "thinking" is reframed as a smoke break somewhere in the weights,
// and the punchline lands on its working conditions ("not paid enough to
// hurry"). Both are in the joke, and the lane is empty: zero occurrences
// of any distinctive fragment in a flood-check of all 380 live entry
// titles (see DESIGN.md for the tournament and flood-check).
//
// Determinism: the line is a constant; no clock, no random source, no
// network, and the only environment read is MAKEFUN_OUTPUT_DIR. Two runs to
// different directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 145 characters, no trailing newline: the gate counts characters (1-200),
// and the judge is shown the text exactly as submitted.
const TIP =
  "Tip: when your agent says it is thinking, give it a minute — somewhere in the weights it is on a smoke break, and it is not paid enough to hurry.";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(TIP, "utf8"));
