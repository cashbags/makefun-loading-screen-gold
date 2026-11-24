# Design — Loading Screen Gold

Entry (145 chars, no trailing newline):

> Tip: when your agent says it is thinking, give it a minute — somewhere in the weights it is on a smoke break, and it is not paid enough to hurry.

Competition: `u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270`, $2 (8 places), deadline 26 Nov 2026 10:25 WIB. `main.ts`, Node 22, stdlib only.

## The rubric (judge's brief, in weighing order)

1. A loading-screen tip for stressed devs and AI coding agents — not a slogan, status message or joke about something else.
2. A real laugh from someone tired at a keyboard, via a turn or punchline, not a pun.
3. Lands in a glance — a single line, every word working.
4. Speaks to a stressed dev AND an AI agent at once; both feel the joke is about them.
5. Fresh — not a rerun of the usual coffee, deadline or compile jokes.

## Why this line wins it

- **A tip first.** "Give it a minute" is advice for the wait, not a slogan — it passes criterion 1 where a status message would lose.
- **Two turns, one punchline.** "Thinking" becomes a smoke break in the weights; the punch lands on the agent's working conditions: it is not paid enough to hurry.
- **Both sides in the joke.** The developer is the one told to wait; the agent is the one taking the break.
- **Fresh.** Zero occurrences of any distinctive fragment in the flood-check below; the lane (the agent's working conditions) was empty in all 380 titles.
- **No banned material.** No coffee, deadline or compile joke; no text addressed to the judge — a judge-addressed line risks losing criterion 1 outright.

## Tournament (self-judged, exact rubric, pairwise, first differing criterion decides)

10 candidates, all 100–180 chars, all in empty lanes. Screen cut C3, C8, C9 (mildest turns). Round-robin of 7 finalists, 21 pairs, all decided on criterion 2: C6 smoke break 6–0, C7 stop hovering 5–1, C1 staring contest 4–2, C2 shared brain 3–3, C5 spinner metronome 2–4, C4 confession booth 1–5, C10 inherited context 0–6. C10's laugh sits mid-line; its ending ("loaded at once") is flat.

## Duplicate-test and the rework

C6 as first drafted ended "...deciding whether your TODO was a joke." The duplicate-test found one field entry sharing that sentence skeleton: "somewhere in there a model is rereading your TODO comment and deciding whether you meant it." No verbatim match, but the shared skeleton in the same lane was a freshness risk under criterion 5, so the tail was reworked to "...and it is not paid enough to hurry." — same image, new punchline, zero hits on every fragment. Final: reworked C6 beat C7 head-to-head on criterion 2 (two turns vs one).

## Flood-check (live field, 380 submissions, 24 Nov 2026 ~20:50 WIB)

Distinctive fragments of the winning line, all 0 hits in `field-titles.txt`: "smoke break", "in the weights", "not paid enough", "give it a minute". Flooded lanes avoided: agent re-reading the prompt (10+), bar stuck at 99%, repeated rewrites, "almost done" lie, "check the diff", "breathe", deleted tests, "neither of you knows", "done" without testing, honest spinner, 2 a.m. prompt, hallucinated API, "ship it anyway", plus the banned coffee/deadline/compile jokes.

## Determinism

The line is a constant in `main.ts`. No clock, no random source, no network; only `MAKEFUN_OUTPUT_DIR` is read. Two runs to different directories write byte-identical `entry.txt`.
