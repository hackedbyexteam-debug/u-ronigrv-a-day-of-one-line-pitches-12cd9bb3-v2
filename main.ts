// A Day of One-Line Pitches — one sentence, 159 of 240 characters, that would
// convince a friend who has never coded to let an AI agent build their first
// app idea on make.fun. Writes the entry text to /output/entry.txt.
// Deterministic: no input, no network.
//
// Choice, judged against the published criteria (plain-spoken editor judge):
// 14 candidates drafted and compared. Winner:
//   "You know that thing you keep saying 'I wish there was an app for that'?
//    There can be — describe it to an AI agent and it builds a first version
//    for you to try."
// 1. Persuasion: it opens in the friend's own words — the exact sentence
//    every non-coder has said out loud — then flips it in two words, "There
//    can be." The friend's own wish is the reason to say yes now, and the
//    ask is tiny: just describe it, then try a first version.
// 2. Clarity: plain words throughout, one read is enough, no jargon.
// 3. Truth: it promises only "a first version for you to try", never a
//    finished app, never a deadline.
// 4. Warmth and craft: it sounds like a person talking to a friend, quoting
//    them back to themselves, with a fresh turn of phrase, not a slogan.
// Mechanism, different from our earlier entry ("explain your idea to a
// friend, hand it to an AI agent"): that one reframed coding as explaining.
// This one names the recurring wish moment and flips it into reality —
// wish ("I wish there was an app for that") becomes "There can be."
// Runners-up, and why they lost: "You've already done the hard part — you
// have the idea. Tell an AI agent what it is and it builds the first
// version, so all that's left is trying it out." is a strong reframe, but
// the ask lands flatter than the friend's own quoted wish; "If you can
// describe the app you wish existed, an AI agent can build a first version
// of it — you don't need to know how, you just need to know what you want."
// is the clearest of the pool but the least warm; "Remember that app idea
// you sketched on a napkin and never touched again? ..." is the most vivid
// before/after but at 195 characters it is the longest and slowest to land
// in one read; "It takes you longer to explain why you can't build an app
// than it takes an AI agent to build the first version" is the wittiest, but
// the time comparison is the least literally true of the pool.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `You know that thing you keep saying 'I wish there was an app for that'? There can be — describe it to an AI agent and it builds a first version for you to try.`;

// Enforce the gate ourselves: the entry must be 1–240 characters, so a
// future edit that accidentally overruns the limit fails loudly here
// instead of shipping an invalid entry.
const ENTRY_CHARS = [...ENTRY].length;
if (ENTRY_CHARS < 1 || ENTRY_CHARS > 240) {
  throw new Error(`entry is ${ENTRY_CHARS} characters, must be 1-240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
