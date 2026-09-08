# Website Design Guidelines — Kanwal Aalijah personal brand (v1, 2026)

Agent-facing spec for building ANY website or web UI in this design system.
Reference implementation: `~/development/portfolio4` (kanwalaalijah.com).
Human-visual version: kanwalaalijah.com/design · Social-image version:
`~/development/automation-agent-for-socials/social_posting_design/DESIGN_GUIDELINE.md`.

Identity in one line: **light, airy, friendly-professional, playful-but-quiet —
"the work shows itself" through small live demos, never through shouting.**

Do NOT confuse with the kan.consulting brand (dark teal/coral) — different system.

---

## 1. Tokens (copy-paste)

```css
:root {
  --background: #ffffff;
  --foreground: #0b0b0b;
}
/* Tailwind v4 @theme (or plain CSS vars) */
--color-ink: #0b0b0b;          /* headlines, primary text */
--color-soft: #6d7275;         /* body copy, captions, labels */
--color-accent: #00959f;       /* teal: pills, ONE headline word, primary action */
--color-accentdark: #007a83;   /* teal text on light grounds */
/* pastel card tints — ALWAYS cycle in this order */
#f4f9fa (cyan) → #faf6f2 (peach) → #f3faf5 (mint) → #f5f4fb (lilac)
/* semantic */
success: #059669 on #d1fae5;   danger: #dc2626 on #fee2e2;
/* terminal motif only */
term-bg: #101418; term-text: #6ee7b7; term-cmd: #67e8f9;
/* rules/borders */ ink at 10% opacity;  chip bg: rgba(ink, 5%);
```

Radii: cards `40px` (`rounded-[40px]`), inner panels `20px` (`rounded-2xl`),
pills/chips fully rounded (`rounded-full`), strength cards `28px`.
Shadows: max `shadow-lg shadow-ink/10`; hover glow `shadow-xl shadow-cyan-900/5`.
Page container: `max-w-5xl`–`max-w-6xl`, px-6 mobile / px-10 desktop.

## 2. Background

White, with exactly two soft ambient blobs (CSS gradient or blurred ellipses):

```css
body { background:
  radial-gradient(1100px 600px at 85% -5%, rgba(186,230,240,0.35), transparent 60%),
  radial-gradient(900px 550px at -10% 30%, rgba(255,224,200,0.28), transparent 55%),
  #ffffff; }
```

Never a dark page. Dark exists only inside terminal panels.

## 3. Typography

Font: **Afacad** (Google Fonts), weights 400/500/600/700. Next.js:
`import { Afacad } from "next/font/google"`. Plain HTML:
`https://fonts.googleapis.com/css2?family=Afacad:wght@400..700&display=swap`.

| Role | Spec |
|---|---|
| Hero headline | 60–88px, weight 500, `tracking-tight`, leading ~1.05, sentence case |
| Section heading | 40–52px, weight 500, `tracking-tight` |
| Card title | 30–34px, weight 500, leading 1.15 |
| Body | 15–17px, weight 400, color soft, `leading-relaxed`, max ~46ch |
| Kicker / tag / label | 11–13px, weight 600, ALL CAPS, `tracking-widest`, color soft |
| Metric number | 30–64px, weight 600, ink, `tracking-tight` |

Rules: ONE teal word per headline max (`<span class="text-accent">ships</span>`).
ALL-CAPS only for tiny tracked labels. No italics for emphasis; use weight.
Afacad lacks ✦ and ✓ glyphs — draw them (SVG/CSS) or use emoji-safe alternatives.

## 4. Page anatomy (the flow)

1. **Sticky nav** — `backdrop-blur-md`, name wordmark left ("Kanwal<span accent> Aalijah</span>"),
   2–3 quiet links + ONE solid teal rounded-full button right.
2. **Hero** — min-h ~78vh, centered: greeting line ("Welcome! I'm Kanwal ✳" — the ✳
   sparkle is teal and slowly spins, 7s linear), then a BIG rotating headline
   (3–4 lines cycling every 3.6s, fade up/down), then a quiet sub-line, then a
   rounded-full outline scroll cue ("SEE THE WORK ↓").
3. **GET IN TOUCH strip** — thin, border-y ink/10: `GET IN TOUCH` tracked label left;
   email · LinkedIn · 📍 location right.
4. **Tabbed work section** — pill tab bar in a gray rounded-full track
   (active tab = solid teal, white text); heading swaps with a fade per tab.
5. **Content cards** (the workhorse — see §5).
6. **Strengths grid** — `✦ WHY ME` chip, 6 cards (28px radius, icon, title, blurb),
   hover: `-translate-y-1.5`, border-accent/40, icon scales 125%.
7. **About** — centered prose, ends with "the longer story is on LinkedIn". No photo,
   no resume download (brand rule).
8. **Footer** — repeat the GET IN TOUCH strip + © line.

Section chips: `✦ LABEL` centered, `bg-ink/5 rounded-full px-5 py-2 text-[12px]
font-semibold tracking-widest text-ink/70`.

## 5. Content card recipe

```jsx
<div class="grid items-center gap-10 rounded-[40px] p-10 md:p-12 lg:grid-cols-2
            bg-[#f4f9fa]  /* cycle tints by index */
            transition-shadow hover:shadow-xl hover:shadow-cyan-900/5">
  <div> {/* alternate order with lg:order-2 on odd cards */}
    <p class="text-[13px] font-semibold tracking-widest text-soft">KICKER IN CAPS</p>
    <h3 class="mt-3 text-[34px] leading-[1.15] font-medium tracking-tight">Sentence-case title</h3>
    <p class="mt-4 max-w-lg text-[16px] leading-relaxed text-soft">Two lines of body.</p>
    <div class="mt-6 flex gap-2.5">{/* tag pills */}
      <span class="rounded-full border border-accent/50 px-4 py-1.5 text-[11px]
                   font-semibold tracking-widest text-accentdark">TAG</span>
    </div>
    {/* THEN: either a metric pair OR nothing (motif goes right). Never both. */}
    <div class="mt-7 flex gap-10 border-t border-ink/10 pt-6">
      <div><div class="text-3xl font-semibold tracking-tight">-70%</div>
           <div class="mt-1 text-[11px] font-semibold tracking-widest text-soft">LABEL</div></div>
    </div>
  </div>
  <div>{/* right side: screenshot in tilted frame OR live motif panel */}</div>
</div>
```

Screenshot frame: `rounded-2xl bg-white shadow-lg shadow-ink/10 ring-1 ring-ink/10`,
default tilt `rotate(2deg)`, hover straightens + lifts (`rotate(0) translateY(-6px) scale(1.015)`,
cubic-bezier(0.22,1,0.36,1)).

Motif panel: white, `rounded-2xl p-6 shadow-lg shadow-ink/10 ring-1 ring-ink/10`.

## 6. "The work shows itself" — animated motif library

Prefer a small live demo over a claim. Canonical motifs (all in
`portfolio4/app/page.tsx`, CSS in `app/globals.css`):

- **terminal** — dark panel (#101418), Menlo/mono, lines appear sequentially
  (fine-tuning run: epochs, loss ↓, val_acc ↑, final ✔ green line), then an SVG
  loss curve draws itself (stroke-dash animation).
- **bars** — labels + horizontal teal bars filling to their values (prompt evals v1→v4).
- **pipeline** — nodes (trigger→retrieve→reason→act→log) lighting in sequence + log lines.
- **wheel** — center teal node, consequence pills popping outward in rings (futures wheel).
- **checklist** — ✓ rows ticking, then a rotated green "FIT FOR DEPLOYMENT" stamp pops.
- **policy→practice** — quoted clause, then `↳ practical guardrail` beneath.
- **decision log** — mono rows with `✓ allowed` / `✗ blocked` chips streaming in.
- **taxonomy** — mono tree (├─ └─) + green "+ new term slotted · no rebuild" row.
- **trend** — rising polyline + "trend detected · term" chips.

Sequencing CSS (staggered reveal — give each child `--i`):

```css
@keyframes seqIn { from { opacity:0; transform:translateY(6px);} to { opacity:1; transform:none;} }
.play .seq { opacity:0; animation: seqIn .45s ease forwards;
             animation-delay: calc(var(--i) * .55s); }
@keyframes drawLine { from { stroke-dashoffset:300; } to { stroke-dashoffset:0; } }
.play .draw { stroke-dasharray:300; stroke-dashoffset:300; animation: drawLine 2.8s ease forwards .4s; }
```

**Replay-on-hover pattern (CRITICAL):** remount the demo subtree (React `key` bump)
on `mouseEnter` — but GUARD it or the DOM swap re-fires mouseenter and loops forever:

```jsx
onMouseEnter={() => { if (hoveredRef.current !== k) { hoveredRef.current = k; bumpKey(k) } }}
onMouseLeave={() => { if (hoveredRef.current === k) hoveredRef.current = null }}
```

Motif data must be plausible and grounded; never invent client names. Real numbers
to reuse: >85% adoption, 3× faster, 2,600+ hrs/yr, 35% efficiency, −70% turnaround,
−45% waste, AED 6.2M, AED 624K/60d, AED 27.5M, 33 citations, h-index 4.

## 7. Motion rules

- Scroll reveal: `.reveal` fades up 26px over 0.7s, once, via IntersectionObserver
  (threshold 0.12). Re-arm when tab content changes.
- ONE continuously-animating element per page (hero rotating line, 3.6s cycle).
- Hover lifts: a few px only. Tab/heading swaps: single 0.6s fade.
- Everything wrapped in `@media (prefers-reduced-motion: reduce)` kill-switches.

## 8. Voice (on-page copy)

First person, warm, concrete. Sentence case. Numbers brag, sentences stay humble.
Hooks are tensions/opinions ("Most AI pilots never meet a user."). Avoid: em-dashes,
"leverage", "unlock", "cutting-edge", "seamless", rocket-emoji enthusiasm, and any
"Hire me!" pushiness. External links: quiet underlined text, teal on hover.
LinkedIn replaces resume downloads. No personal photo.

## 9. Don'ts (hard rules)

- No dark pages, purple-blue gradients, glassmorphism, neon, 3D robots, stock photos.
- No Inter/Roboto/Space Grotesk (use Afacad); no more than ONE font family.
- No 01/02/03 numbered section markers; no ALL-CAPS headlines.
- No shouting achievements in headlines — put numbers in metric chips.
- No client names in demo motifs.
- Never mix this system with kan.consulting's dark-teal/coral system.

## 10. Checklist for a new page/site in this system

1. Afacad loaded, tokens pasted, body background = white + 2 blobs.
2. Sticky blurred nav, one teal button.
3. Hero: greeting + rotating headline + ONE teal word.
4. Cards: 40px radius, tint cycle, kicker/title/body/tags + metrics OR motif.
5. At least one "work shows itself" motif with staggered `--i` animation + hover replay guard.
6. Reveal-on-scroll on sections; reduced-motion fallbacks.
7. Sentence-case everywhere; caps only for tracked micro-labels.
8. Run the don'ts list (§9) as a final review.
