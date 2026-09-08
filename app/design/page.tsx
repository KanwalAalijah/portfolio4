"use client"

import { useState } from "react"

/* Living style guide for the Kanwal Aalijah personal brand.
   Everything rendered here uses the production tokens/CSS, so it cannot drift.
   Machine-readable version for image generation:
   automation-agent-for-socials/social_posting_design/DESIGN_GUIDELINE.md */

const colors = [
  { name: "Background", hex: "#ffffff", note: "every canvas, always light", cls: "bg-white ring-1 ring-ink/10" },
  { name: "Ink", hex: "#0b0b0b", note: "headlines, primary text", cls: "bg-[#0b0b0b]" },
  { name: "Soft", hex: "#6d7275", note: "body copy, captions, labels", cls: "bg-[#6d7275]" },
  { name: "Accent teal", hex: "#00959f", note: "pills, highlights, one word per headline", cls: "bg-[#00959f]" },
  { name: "Accent dark", hex: "#007a83", note: "teal text on light grounds", cls: "bg-[#007a83]" },
  { name: "Tint cyan", hex: "#f4f9fa", note: "card tint 1", cls: "bg-[#f4f9fa] ring-1 ring-ink/10" },
  { name: "Tint peach", hex: "#faf6f2", note: "card tint 2", cls: "bg-[#faf6f2] ring-1 ring-ink/10" },
  { name: "Tint mint", hex: "#f3faf5", note: "card tint 3", cls: "bg-[#f3faf5] ring-1 ring-ink/10" },
  { name: "Tint lilac", hex: "#f5f4fb", note: "card tint 4", cls: "bg-[#f5f4fb] ring-1 ring-ink/10" },
  { name: "Success", hex: "#059669", note: "ticks, shipped, allowed", cls: "bg-[#059669]" },
  { name: "Terminal bg", hex: "#101418", note: "code/training motifs only", cls: "bg-[#101418]" },
]

const typeScale = [
  { label: "Hero headline", cls: "text-6xl font-medium tracking-tight", px: "60–88px · Afacad Medium · leading 1.05", text: "AI ideas, actually shipped" },
  { label: "Section heading", cls: "text-5xl font-medium tracking-tight", px: "44–52px · Afacad Medium", text: "What I've shipped recently" },
  { label: "Card title", cls: "text-[34px] leading-[1.15] font-medium tracking-tight", px: "30–34px · Afacad Medium", text: "Predicting food waste before it hits the bin" },
  { label: "Body", cls: "text-[16px] leading-relaxed text-soft", px: "15–17px · Afacad Regular · soft gray · max ~46ch", text: "A copilot is only as good as its worst answer. We versioned prompts like code and shipped only what passed." },
  { label: "Kicker / label", cls: "text-[13px] font-semibold tracking-widest text-soft", px: "11–13px · SemiBold · ALL CAPS · +tracking", text: "ENTERPRISE COPILOT ROLLOUT" },
]

const rules = [
  ["Light, always", "White ground with two soft ambient blobs (cyan top-right ~35%, peach bottom-left ~28%, heavily blurred). No dark pages; dark exists only inside terminal panels."],
  ["One teal moment", "One accent word per headline, one primary button per view. Teal loses its meaning if it's everywhere."],
  ["Cards carry content", "Pastel tinted cards, 40px radius, generous 48px padding, cycling tints in order: cyan → peach → mint → lilac."],
  ["Sentence case", "Headlines are sentences someone would say. ALL-CAPS is reserved for tiny kickers, tags and labels with letter-spacing."],
  ["The work shows itself", "Prefer a live/animated artefact (terminal run, eval bars, checklist, trend line) over claims. Numbers over adjectives."],
  ["Motion is a whisper", "Fade-up reveals ~0.7s, hover lifts of a few px, one rotating element per page. Everything respects prefers-reduced-motion."],
  ["No costume jewellery", "No stock photos, robots, glowing brains, gradients on text, drop shadows heavier than 10% ink, or emoji storms."],
]

export default function DesignGuide() {
  const [copied, setCopied] = useState<string | null>(null)
  const copy = (hex: string) => {
    navigator.clipboard?.writeText(hex)
    setCopied(hex)
    setTimeout(() => setCopied(null), 1200)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      {/* header */}
      <p className="text-[13px] font-semibold tracking-widest text-soft">DESIGN SYSTEM · V1 · 2026</p>
      <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-6xl">
        How things should <span className="text-accent">look</span> around here.
      </h1>
      <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-soft">
        The living style guide behind kanwalaalijah.com. Everything on this page renders with the
        production tokens, so what you see is the source of truth. For generating social images
        programmatically, use the machine-readable kit in{" "}
        <code className="rounded bg-ink/5 px-2 py-0.5 text-[14px]">social_posting_design/</code>.
      </p>

      {/* colors */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Colour</h2>
      <p className="mt-2 text-[15px] text-soft">Click a swatch to copy its hex.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {colors.map((c) => (
          <button
            key={c.hex + c.name}
            onClick={() => copy(c.hex)}
            className="group rounded-2xl border border-ink/10 bg-white/70 p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`h-16 rounded-xl ${c.cls}`} />
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-[14px] font-semibold">{c.name}</span>
              <span className="font-mono text-[12px] text-soft">{copied === c.hex ? "copied!" : c.hex}</span>
            </div>
            <p className="text-[12.5px] text-soft">{c.note}</p>
          </button>
        ))}
      </div>

      {/* typography */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Typography</h2>
      <p className="mt-2 max-w-2xl text-[15px] text-soft">
        One family: <b className="text-ink">Afacad</b> (Google Fonts), weights 400–700. Tight
        leading on display sizes, relaxed on body. One teal word per headline, maximum.
      </p>
      <div className="mt-6 space-y-6 rounded-[28px] border border-ink/10 bg-white/70 p-8">
        {typeScale.map((t) => (
          <div key={t.label} className="border-b border-ink/10 pb-6 last:border-0 last:pb-0">
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[12px] font-semibold tracking-widest text-soft">{t.label.toUpperCase()}</span>
              <span className="font-mono text-[12px] text-soft">{t.px}</span>
            </div>
            <div className={t.cls}>{t.text}</div>
          </div>
        ))}
      </div>

      {/* components */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Components</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-ink/10 bg-white/70 p-8">
          <p className="text-[12px] font-semibold tracking-widest text-soft">PILLS & CHIPS</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-accentdark">TAG PILL</span>
            <span className="rounded-full bg-accent px-5 py-2 text-[12px] font-semibold tracking-widest text-white">PRIMARY ACTION</span>
            <span className="rounded-full bg-ink/5 px-4 py-1.5 text-[12px] font-semibold tracking-widest text-ink/70">✦ SECTION CHIP</span>
          </div>
          <p className="mt-4 text-[13.5px] text-soft">Outline pills for tags, solid teal for the single primary action, gray chip above section headings.</p>
        </div>
        <div className="rounded-[28px] border border-ink/10 bg-white/70 p-8">
          <p className="text-[12px] font-semibold tracking-widest text-soft">METRIC</p>
          <div className="mt-4 flex gap-10">
            <div>
              <div className="text-4xl font-semibold tracking-tight">2,600+</div>
              <div className="mt-1 text-[11px] font-semibold tracking-widest text-soft">HOURS SAVED PER YEAR</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tight">-70%</div>
              <div className="mt-1 text-[11px] font-semibold tracking-widest text-soft">INSIGHT TURNAROUND</div>
            </div>
          </div>
          <p className="mt-4 text-[13.5px] text-soft">Big semibold number, tiny tracked label. Numbers do the bragging; sentences stay humble.</p>
        </div>
      </div>

      {/* card demo */}
      <div className="play mt-6 rounded-[40px] bg-[#f4f9fa] p-10 md:p-12">
        <p className="text-[13px] font-semibold tracking-widest text-soft">CONTENT CARD · HOVER PATTERNS LIVE HERE</p>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-medium tracking-tight">A card is one idea, fully dressed</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-soft">
              Kicker, title, two lines of body, tags, then either a metric pair or a motif panel.
              Never both. 40px radius, 48px padding, tint cycled per position.
            </p>
            <div className="mt-5 flex gap-2.5">
              <span className="rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-accentdark">MOTIF</span>
              <span className="rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-accentdark">TERMINAL</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-ink/10 ring-1 ring-ink/10">
            <div className="rounded-xl bg-[#101418] p-5 font-mono text-[12.5px] leading-6 text-emerald-300/90">
              <div className="text-cyan-300">$ finetune --base multilingual-7b</div>
              <div>epoch 4/6   loss 0.687   val_acc 86.1%</div>
              <div>epoch 6/6   loss 0.341   val_acc 93.8%</div>
              <div className="font-semibold text-emerald-300">✔ +38% dialect accuracy vs base</div>
            </div>
            <p className="mt-3 text-[12.5px] text-soft">
              &quot;The work shows itself&quot;: motifs are plausible freezes of real work — terminal runs,
              eval bars, checklists, trend lines, decision logs.
            </p>
          </div>
        </div>
      </div>

      {/* motion */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Motion</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          ["Reveal", "Sections fade up 26px over 0.7s as they enter the viewport. Once."],
          ["Hover lift", "Cards rise a few px with a soft cyan-tinted shadow; screenshots straighten from a 2° tilt."],
          ["One performer", "A single rotating element per page (the hero line). Demos replay once per hover, guarded against loops."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-[28px] border border-ink/10 bg-white/70 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg hover:shadow-cyan-900/5">
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-soft">{d}</p>
          </div>
        ))}
      </div>

      {/* rules */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">The rules</h2>
      <div className="mt-6 overflow-hidden rounded-[28px] border border-ink/10 bg-white/70">
        {rules.map(([t, d], i) => (
          <div key={t} className={`grid gap-1 p-6 md:grid-cols-[220px_1fr] ${i ? "border-t border-ink/10" : ""}`}>
            <div className="font-semibold">{t}</div>
            <div className="text-[15px] leading-relaxed text-soft">{d}</div>
          </div>
        ))}
      </div>

      {/* usage */}
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Using it in another project</h2>
      <div className="mt-6 rounded-[28px] border border-ink/10 bg-white/70 p-8">
        <p className="text-[15px] leading-relaxed text-soft">
          Copy these tokens into your stack of choice; the names match the site&apos;s Tailwind theme
          and the Pillow kit&apos;s <code className="rounded bg-ink/5 px-1.5 text-[13px]">brand.py</code>.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-xl bg-[#101418] p-5 font-mono text-[13px] leading-6 text-emerald-100/90">{`--color-ink:     #0b0b0b;   --color-soft:   #6d7275;
--color-accent:  #00959f;   --color-accentdark: #007a83;
--tints: #f4f9fa, #faf6f2, #f3faf5, #f5f4fb;  /* cycle in order */
--radius-card: 40px;  --radius-panel: 20px;  --pill: 999px;
font-family: 'Afacad', sans-serif;  /* 400/500/600/700 */
blobs: cyan rgb(186,230,240) @35% top-right · peach rgb(255,224,200) @28% bottom-left`}</pre>
        <p className="mt-5 text-[15px] leading-relaxed text-soft">
          For generated images (LinkedIn, carousels, newsletter):{" "}
          <code className="rounded bg-ink/5 px-1.5 text-[13px]">automation-agent-for-socials/social_posting_design/</code>{" "}
          — read <b className="text-ink">DESIGN_GUIDELINE.md</b>, call{" "}
          <code className="rounded bg-ink/5 px-1.5 text-[13px]">generate_post.py</code> /{" "}
          <code className="rounded bg-ink/5 px-1.5 text-[13px]">generate_carousel.py</code>.
        </p>
      </div>

      <footer className="mt-16 border-t border-ink/10 pt-6 text-[13px] text-soft">
        Kanwal Aalijah · design system v1 · this page is the source of truth
      </footer>
    </div>
  )
}
