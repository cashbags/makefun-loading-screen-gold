# Loading Screen Gold — a tip in 200 characters

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/cashbags/makefun-loading-screen-gold/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/cashbags/makefun-loading-screen-gold/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

One loading-screen tip for stressed developers and AI coding agents: **"Tip: when your agent says it is thinking, give it a minute — somewhere in the weights it is on a smoke break, and it is not paid enough to hurry."** (145 chars.) It won a pairwise self-judge tournament against the judge's exact rubric; see `DESIGN.md` for the tournament and flood-check.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — exactly the tip above, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the tip as one constant and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock, no random source, no network, so two runs write byte-identical files.
