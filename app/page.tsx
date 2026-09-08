"use client"

import { useEffect, useRef, useState } from "react"

const heroLines = [
  "I turn AI ideas into products people actually use",
  "I've shipped 13 AI products across gov, retail & fintech",
  "I help governments adopt AI they can trust",
  "I build AI teams that keep shipping after I leave",
]

/* ---------------- products ---------------- */

type Product = {
  name: string
  company: string
  title: string
  desc: string
  role: string
  about: string
  tech: string[]
  clients?: string[]
  stats?: { n: string; l: string }[]
  gallery: { src: string; caption: string }[]
  tags: string[]
  metrics: { n: string; l: string }[]
  img: string
  url: string
  tint: string
}

const products: Product[] = [
  {
    name: "SilaCities",
    company: "Sila Insights",
    title: "helping city planners ask their city anything",
    desc: "An urban-intelligence platform that fuses spatial, social and economic signals into plain-language answers, with every claim cited to its source.",
    role: "Principal product manager. Directed the product end to end and ran the 12-engineer delivery organisation behind it.",
    about:
      "GUS is the platform city teams use to ask any question about their city and get a cited answer back. Nine workspaces sit on one shared grid: a chat that answers with maps and sources, a socio-economic atlas with seven analytical lenses, a full GIS workspace, goal-based report writing, 0–100 site-qualification scoring and narrative fieldnotes. Three engines feed it: sentiment across 20+ Arabic dialects, real-time footfall and visitor flows, and computer vision reading physical conditions.",
    tech: ["ARABIC NLP · 20+ DIALECTS", "SENTIMENT ANALYSIS", "COMPUTER VISION", "GEOSPATIAL AI", "CITED RETRIEVAL", "REAL-TIME FOOTFALL"],
    clients: ["RCRC RIYADH", "DMT ABU DHABI", "RTA DUBAI", "CADC", "MODON", "ROME MUNICIPALITY"],
    stats: [
      { n: "500M+", l: "PEOPLE COVERED" },
      { n: "81+", l: "LIVEABILITY INDICATORS" },
      { n: "1M+", l: "ENRICHED OBSERVATIONS" },
      { n: "1 day", l: "DIAGNOSIS, FROM 11 WKS" },
    ],
    gallery: [
      { src: "/shots/sila/chat.jpg", caption: "GUS Chat: ask the city, get a cited answer with a map" },
      { src: "/shots/sila/atlas.jpg", caption: "Socio-economic atlas: satisfaction on a shared hex grid" },
      { src: "/shots/sila/map.jpg", caption: "GIS workspace with AI-assisted layer building" },
      { src: "/shots/sila/squid.jpg", caption: "SQUID: 0–100 site-qualification scoring" },
      { src: "/shots/sila/consult.jpg", caption: "Consult: goal-based reports in PDF, Word or PowerPoint" },
      { src: "/shots/sila/fieldnotes.jpg", caption: "Fieldnotes: scrollable narrative mapping" },
    ],
    tags: ["GOV TECH", "GEN AI", "SMART CITIES"],
    metrics: [
      { n: "AED 6.2M", l: "PROGRAMMES DEPLOYED" },
      { n: "100%", l: "ANSWERS WITH SOURCES" },
    ],
    img: "/shots/silacities.jpeg",
    url: "https://www.silacities.com/",
    tint: "bg-[#f4f9fa]",
  },
  {
    name: "Zewst",
    company: "Hauraki",
    title: "predicting food waste before it hits the bin",
    desc: "An AI platform for restaurants spanning POS, inventory, labour and recipes, with demand forecasting that flags waste before it happens.",
    role: "Lead product manager at Hauraki. Owned roadmap and delivery from zero to one, through to 60+ locations, working across data science and engineering.",
    about:
      "Zewst runs the whole restaurant on one system: point of sale, inventory, labour scheduling and recipe engineering, tied together by demand forecasting. The models predict what each location will sell, so ordering and prep match reality instead of habit, and waste gets flagged before it happens rather than counted afterwards.",
    tech: ["DEMAND FORECASTING", "PREDICTIVE ML", "POS + INVENTORY", "RECIPE ENGINEERING"],
    gallery: [{ src: "/shots/zewst.jpeg", caption: "Zewst: forecasting, inventory and POS in one place" }],
    tags: ["PREDICTIVE ML", "RESTAURANT TECH", "0 TO 1"],
    metrics: [
      { n: "-45%", l: "FOOD WASTE IN PILOTS" },
      { n: "60+", l: "LOCATIONS LIVE" },
    ],
    img: "/shots/zewst.jpeg",
    url: "https://www.zewst.com/",
    tint: "bg-[#f3faf5]",
  },
  {
    name: "TrueTrends",
    company: "Sila Insights",
    title: "spotting consumer trends weeks before they break",
    desc: "A generative-AI trend platform that surfaces emerging consumer and cultural shifts 3–4 weeks ahead of the market, for banks, FMCG and finance teams.",
    role: "Principal product manager. Owned strategy, delivery and go-to-market; first revenue in 60 days, then scale across finance, FMCG and banking.",
    about:
      "TrueTrends reads social and cultural chatter at scale and separates real consumer shifts from noise, early enough to act on. Generative models cluster emerging conversations, score their momentum and explain each trend in plain language, so strategy teams in finance, FMCG and banking see what's coming 3–4 weeks before it shows up in the market.",
    tech: ["GEN AI", "TREND DETECTION", "SOCIAL ANALYTICS", "ARABIC + ENGLISH NLP"],
    gallery: [{ src: "/shots/truetrends.jpeg", caption: "TrueTrends: emerging shifts scored and explained" }],
    tags: ["GEN AI", "TREND INTELLIGENCE", "B2B SAAS"],
    metrics: [
      { n: "AED 624K", l: "REVENUE IN 60 DAYS" },
      { n: "3–4 wks", l: "AHEAD OF THE MARKET" },
    ],
    img: "/shots/truetrends.jpeg",
    url: "https://www.silainsights.com/products/truetrends",
    tint: "bg-[#faf6f2]",
  },
  {
    name: "FoodHealth",
    company: "Hauraki",
    title: "matching food to the person eating it",
    desc: "The data-science engine that scores food products against individual dietary needs, and carried a company's pivot into food-health.",
    role: "Lead product manager at Hauraki. Directed the data-science build that carried the pivot and the AED 27.5M raise.",
    about:
      "FoodHealth started as the data-science engine behind Bitewell: models that score every food product against an individual's dietary needs, allergies and goals, instead of one-size-fits-all nutrition labels. The engine worked well enough to carry the company's pivot into food-health, and the scoring technology now runs under the FoodHealth brand.",
    tech: ["NUTRITION SCORING MODELS", "PERSONALISATION", "PRODUCT DATA PIPELINE", "RECOMMENDERS"],
    gallery: [{ src: "/shots/foodhealth.jpeg", caption: "FoodHealth: every product scored for the person eating it" }],
    tags: ["DATA SCIENCE", "PERSONALISATION", "HEALTHTECH"],
    metrics: [
      { n: "AED 27.5M", l: "RAISED ON THE PIVOT" },
      { n: "77%", l: "USER SATISFACTION" },
    ],
    img: "/shots/foodhealth.jpeg",
    url: "https://www.foodhealth.co/",
    tint: "bg-[#f5f4fb]",
  },
  {
    name: "Pinch",
    company: "Hauraki",
    title: "cutting the middleman out of restaurant delivery",
    desc: "A three-sided marketplace for Pakistan connecting restaurants, riders and customers directly, with POS, online ordering and payments built in.",
    role: "Lead product manager at Hauraki. Led product, growth and the delivery team as adoption scaled from 10 to 500+ restaurants.",
    about:
      "Pinch connects the three sides of food delivery without an aggregator in the middle. Restaurants get an online store, POS, rider management, analytics and digital payments, and set their own prices. Riders bring their own schedule and keep more of every trip; restaurants can even bring their own riders. Customers pay store prices instead of marked-up menus. The result: platform fees under 4% instead of the aggregators' 18%.",
    tech: ["MARKETPLACE PLATFORM", "POS + ONLINE STORE", "RIDER DISPATCH", "DIGITAL PAYMENTS", "AGENTIC AUTOMATION"],
    stats: [
      { n: "5×", l: "GMV IN 6 MONTHS" },
      { n: "+35%", l: "DELIVERY ACCURACY" },
      { n: "+6.2", l: "NPS POINTS" },
      { n: "3", l: "SIDES, NO MIDDLEMAN" },
    ],
    gallery: [{ src: "/shots/pinch.jpeg", caption: "Pinch: restaurants, riders and customers, connected directly" }],
    tags: ["MARKETPLACE", "RESTAURANT TECH", "0 TO 1"],
    metrics: [
      { n: "500+", l: "RESTAURANTS, FROM 10" },
      { n: "<4%", l: "PLATFORM FEES, FROM 18%" },
    ],
    img: "/shots/pinch.jpeg",
    url: "https://www.pinch.pk/",
    tint: "bg-[#f4f9fa]",
  },
]

/* ---------------- demos ---------------- */

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-ink/10 ring-1 ring-ink/10">
      {children}
    </div>
  )
}

function TrainingDemo() {
  const rows = [
    "$ finetune --base multilingual-7b \\",
    "    --data ar_sentiment_84k --epochs 6",
    "epoch 1/6   loss 2.412   val_acc 61.2%",
    "epoch 2/6   loss 1.735   val_acc 71.8%",
    "epoch 3/6   loss 1.106   val_acc 79.4%",
    "epoch 4/6   loss 0.687   val_acc 86.1%",
    "epoch 5/6   loss 0.442   val_acc 91.0%",
    "epoch 6/6   loss 0.341   val_acc 93.8%",
    "✔ dialect sentiment: +38% vs base model",
  ]
  return (
    <Panel>
      <div className="rounded-xl bg-[#101418] p-5 font-mono text-[12.5px] leading-6 text-emerald-300/90">
        {rows.map((r, i) => (
          <div key={i} className="seq" style={{ "--i": i } as React.CSSProperties}>
            {r.startsWith("$") || r.startsWith("    --") ? (
              <span className="text-cyan-300">{r}</span>
            ) : r.startsWith("✔") ? (
              <span className="font-semibold text-emerald-300">{r}</span>
            ) : (
              r
            )}
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 70" className="mt-4 w-full">
        <polyline
          className="draw"
          points="0,8 40,16 85,28 130,42 180,52 235,60 300,64"
          fill="none"
          stroke="#00959f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text x="2" y="66" fontSize="9" fill="#6d7275">loss ↓</text>
      </svg>
    </Panel>
  )
}

function PromptDemo() {
  const versions = [
    { v: "v1", t: "“Summarise this report”", score: 42 },
    { v: "v2", t: "+ role  + constraints", score: 68 },
    { v: "v3", t: "+ examples  + output schema", score: 84 },
    { v: "v4", t: "+ edge-case rules  + eval loop", score: 96 },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">PROMPT EVAL RUNS</p>
      <div className="space-y-4">
        {versions.map((p, i) => (
          <div key={p.v} className="seq" style={{ "--i": i } as React.CSSProperties}>
            <div className="flex items-baseline justify-between text-[13.5px]">
              <span>
                <span className="mr-2 font-mono font-semibold text-accentdark">{p.v}</span>
                <span className="text-soft">{p.t}</span>
              </span>
              <span className="font-semibold">{p.score}%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-ink/8">
              <div
                className="bar-fill h-2 rounded-full bg-accent"
                style={{ width: `${p.score}%`, "--i": i } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
        <div className="seq pt-1 text-[13px] font-semibold text-emerald-600" style={{ "--i": 4 } as React.CSSProperties}>
          ✔ shipped to 3 departments
        </div>
      </div>
    </Panel>
  )
}

function AgentDemo() {
  const nodes = ["trigger", "retrieve", "reason", "act", "log"]
  return (
    <Panel>
      <p className="mb-5 text-[11px] font-semibold tracking-widest text-soft">ONE OF 40+ LIVE WORKFLOWS</p>
      <div className="flex flex-wrap items-center gap-1">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-1">
            <div
              className="node rounded-xl border border-accent/30 bg-[#f4f9fa] px-3 py-2 text-[12px] font-semibold text-accentdark"
              style={{ "--i": i } as React.CSSProperties}
            >
              {n}
            </div>
            {i < nodes.length - 1 && <span className="text-ink/25">→</span>}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2 font-mono text-[12px] text-soft">
        {[
          "09:00  weekly report drafted → approved",
          "09:02  42 invoices reconciled",
          "09:07  anomaly flagged → human notified",
        ].map((r, i) => (
          <div key={r} className="seq" style={{ "--i": i + 5 } as React.CSSProperties}>{r}</div>
        ))}
      </div>
      <div className="seq mt-5 border-t border-ink/10 pt-4 text-[13px]" style={{ "--i": 8 } as React.CSSProperties}>
        <span className="font-semibold text-accentdark">2,600+ hours</span>
        <span className="text-soft"> of manual work retired every year</span>
      </div>
    </Panel>
  )
}

function FuturesDemo() {
  const ring1 = [
    { t: "compute costs", x: 18, y: 22 },
    { t: "talent shifts", x: 78, y: 18 },
    { t: "new liability", x: 84, y: 62 },
    { t: "public trust", x: 14, y: 66 },
  ]
  const ring2 = [
    { t: "procurement rules", x: 40, y: 8 },
    { t: "insurance markets", x: 92, y: 38 },
    { t: "reskilling budgets", x: 60, y: 88 },
    { t: "vendor consolidation", x: 6, y: 42 },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">FUTURES WHEEL · SECOND-ORDER EFFECTS</p>
      <div className="relative h-64 w-full">
        <div
          className="wheel-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-4 py-2 text-[12.5px] font-semibold text-white"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          frontier model ships
        </div>
        {ring1.map((n, i) => (
          <div
            key={n.t}
            className="wheel-node absolute rounded-full border border-accent/40 bg-[#f4f9fa] px-3 py-1.5 text-[11.5px] font-medium text-accentdark"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)", "--i": i + 1 } as React.CSSProperties}
          >
            {n.t}
          </div>
        ))}
        {ring2.map((n, i) => (
          <div
            key={n.t}
            className="wheel-node absolute rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[11px] text-soft"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)", "--i": i + 5 } as React.CSSProperties}
          >
            {n.t}
          </div>
        ))}
      </div>
    </Panel>
  )
}

function AuditDemo() {
  const checks = [
    "functionality against approved spec",
    "data residency & compliance",
    "security posture & access",
    "bias, safety & failure modes",
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">SOLUTION AUDIT · RUN #214</p>
      <div className="space-y-3">
        {checks.map((c, i) => (
          <div key={c} className="seq flex items-center gap-3 text-[14px]" style={{ "--i": i } as React.CSSProperties}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] text-emerald-700">✓</span>
            <span>{c}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-6 flex h-20 items-center justify-center">
        <div className="stamp rounded-lg border-[3px] border-emerald-600 px-5 py-2 text-[15px] font-bold tracking-widest text-emerald-600">
          FIT FOR DEPLOYMENT
        </div>
      </div>
    </Panel>
  )
}

function GuardrailDemo() {
  const pairs = [
    { from: "“high-risk systems require oversight”", to: "approval gate before every release" },
    { from: "“decisions must be explainable”", to: "decision log on every agent action" },
    { from: "“data must stay in-country”", to: "residency checks in the pipeline" },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">POLICY → PRACTICE</p>
      <div className="space-y-4">
        {pairs.map((p, i) => (
          <div key={p.to} className="seq" style={{ "--i": i } as React.CSSProperties}>
            <div className="text-[13px] text-soft italic">{p.from}</div>
            <div className="mt-1 flex items-center gap-2 text-[13.5px] font-medium">
              <span className="text-accent">↳</span> {p.to}
            </div>
          </div>
        ))}
      </div>
      <div className="seq mt-5 flex gap-2 border-t border-ink/10 pt-4" style={{ "--i": 3 } as React.CSSProperties}>
        <span className="rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold tracking-wider text-ink/70">ISO/IEC 42001</span>
        <span className="rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold tracking-wider text-ink/70">NIST AI RMF</span>
      </div>
    </Panel>
  )
}

function OversightDemo() {
  const logs = [
    { a: "draft weekly summary", ok: true },
    { a: "email external vendor", ok: false, why: "escalated" },
    { a: "update planning sheet", ok: true },
    { a: "bulk-delete records", ok: false, why: "blocked" },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">AGENT DECISION LOG · LIVE</p>
      <div className="space-y-2.5 font-mono text-[12.5px]">
        {logs.map((l, i) => (
          <div key={l.a} className="seq flex items-center justify-between gap-3" style={{ "--i": i } as React.CSSProperties}>
            <span className="truncate">agent → {l.a}</span>
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                l.ok ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
              }`}
            >
              {l.ok ? "✓ allowed" : `✗ ${l.why}`}
            </span>
          </div>
        ))}
      </div>
      <div className="seq mt-5 border-t border-ink/10 pt-4 text-[13px] text-soft" style={{ "--i": 4 } as React.CSSProperties}>
        every action logged · every verdict explainable ·{" "}
        <span className="font-semibold text-ink">zero silent failures</span>
      </div>
    </Panel>
  )
}

function TaxonomyDemo() {
  const branches = [
    { d: 0, t: "products", cls: "font-semibold text-ink" },
    { d: 1, t: "├─ electronics", cls: "text-soft" },
    { d: 2, t: "│   ├─ wearables", cls: "text-soft" },
    { d: 3, t: "│   └─ audio", cls: "text-soft" },
    { d: 4, t: "└─ apparel", cls: "text-soft" },
    { d: 5, t: "    └─ activewear", cls: "text-soft" },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">SPARK CLUSTER · TAXONOMY BUILD</p>
      <div className="rounded-xl bg-[#f8fafb] p-4 font-mono text-[13px] leading-7">
        {branches.map((b) => (
          <div key={b.t} className={`branch ${b.cls}`} style={{ "--i": b.d } as React.CSSProperties}>{b.t}</div>
        ))}
        <div className="slot mt-1 rounded-md px-2 py-1 text-[12.5px] text-emerald-700" style={{ "--i": 7 } as React.CSSProperties}>
          + &quot;smart rings&quot; → slotted under wearables · no rebuild
        </div>
      </div>
      <div className="seq mt-4 text-[13px] text-soft" style={{ "--i": 9 } as React.CSSProperties}>
        millions of terms · the tree evolves as data streams in
      </div>
    </Panel>
  )
}

function UrbanDemo() {
  const palette = ["bg-ink/6", "bg-accent/15", "bg-accent/30", "bg-accent/55", "bg-accent/80"]
  const cells = [
    1, 2, 1, 0, 3, 4, 2, 0,
    0, 2, 3, 1, 4, 3, 1, 1,
    1, 0, 4, 2, 2, 1, 0, 2,
    2, 1, 3, 4, 1, 0, 1, 0,
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">CITY SIGNALS · DENSITY & DEMAND</p>
      <div className="grid grid-cols-8 gap-1.5">
        {cells.map((c, i) => (
          <div
            key={i}
            className={`wheel-node aspect-square rounded-md ${palette[c]}`}
            style={{ "--i": i * 0.18 } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="mt-4 space-y-1.5 text-[13px] text-soft">
        {["↑ transit demand rising in the north-east grid", "↳ recommend: re-time signals + add feeder route"].map((t, i) => (
          <div key={t} className="seq" style={{ "--i": i + 8 } as React.CSSProperties}>{t}</div>
        ))}
      </div>
    </Panel>
  )
}

function TrendKsaDemo() {
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">SOCIAL SIGNALS · KSA MARKET</p>
      <svg viewBox="0 0 300 80" className="w-full">
        <polyline
          className="draw"
          points="0,64 40,60 80,62 115,55 150,50 185,38 220,30 255,16 300,8"
          fill="none"
          stroke="#00959f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {["#عروض", "home fitness", "specialty coffee"].map((t, i) => (
          <span key={t} className="wheel-node rounded-full bg-[#f4f9fa] px-3 py-1.5 text-[12px] font-semibold text-accentdark" style={{ "--i": i + 3 } as React.CSSProperties}>
            trend detected · {t}
          </span>
        ))}
      </div>
      <div className="seq mt-4 border-t border-ink/10 pt-3 text-[13px] text-soft" style={{ "--i": 6 } as React.CSSProperties}>
        millions of posts in · weeks of lead time out
      </div>
    </Panel>
  )
}

function SustainDemo() {
  const bars = [
    { t: "circular fashion", w: 82 },
    { t: "ev adoption", w: 74 },
    { t: "local produce", w: 61 },
    { t: "plastic-free", w: 48 },
  ]
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">SUSTAINABILITY SIGNALS · RISING TOPICS</p>
      <div className="space-y-3.5">
        {bars.map((b, i) => (
          <div key={b.t} className="seq" style={{ "--i": i } as React.CSSProperties}>
            <div className="flex justify-between text-[13px]"><span>{b.t}</span><span className="font-semibold text-emerald-600">↑</span></div>
            <div className="mt-1 h-2 rounded-full bg-ink/8">
              <div className="bar-fill h-2 rounded-full bg-emerald-500/80" style={{ width: `${b.w}%`, "--i": i } as React.CSSProperties} />
            </div>
          </div>
        ))}
      </div>
      <div className="seq mt-4 border-t border-ink/10 pt-3 text-[13px] text-soft" style={{ "--i": 5 } as React.CSSProperties}>
        green intent surfacing in consumer chatter, tracked over time
      </div>
    </Panel>
  )
}

function TrafficDemo() {
  return (
    <Panel>
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-soft">SIGNAL TIMING · SIDE BY SIDE</p>
      <div className="space-y-5">
        <div>
          <p className="mb-2 text-[12px] text-soft">fixed-time signals</p>
          <div className="relative h-7 overflow-hidden rounded-full bg-ink/6">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="car-slow absolute top-1/2 h-3 w-5 -translate-y-1/2 rounded-sm bg-ink/40" style={{ "--i": i } as React.CSSProperties} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-[12px] text-soft">AI-adaptive signals</p>
          <div className="relative h-7 overflow-hidden rounded-full bg-[#e8f6f7]">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="car absolute top-1/2 h-3 w-5 -translate-y-1/2 rounded-sm bg-accent" style={{ "--i": i, "--speed": "2.2s" } as React.CSSProperties} />
            ))}
          </div>
        </div>
      </div>
      <div className="seq mt-5 border-t border-ink/10 pt-3 text-[13px] text-soft" style={{ "--i": 4 } as React.CSSProperties}>
        two cities, two signal philosophies, one comparative lens
      </div>
    </Panel>
  )
}

/* ---------------- tab content ---------------- */

type DemoCase = {
  kicker: string
  url?: string
  title: string
  desc: string
  tags: string[]
  metrics: { n: string; l: string }[]
  tint: string
  demo: React.ComponentType
}

const transformCases: DemoCase[] = [
  {
    kicker: "REGIONAL NLP PROGRAMME",
    title: "Fine-tuning a model until it speaks the region's language",
    desc: "Off-the-shelf models kept missing dialect and sarcasm. We fine-tuned on regional data, built proper evals, and made Arabic a first-class citizen.",
    tags: ["FINE-TUNING", "ARABIC NLP", "EVALS"],
    metrics: [
      { n: "-70%", l: "INSIGHT TURNAROUND" },
      { n: "+38%", l: "DIALECT ACCURACY VS BASE" },
    ],
    tint: "bg-[#f4f9fa]",
    demo: TrainingDemo,
  },
  {
    kicker: "ENTERPRISE COPILOT ROLLOUT",
    title: "Fine-tuning prompts until people actually trust them",
    desc: "A copilot is only as good as its worst answer. We versioned prompts like code, scored them against eval sets, and shipped only what passed.",
    tags: ["PROMPT ENGINEERING", "EVALS", "COPILOTS"],
    metrics: [
      { n: ">85%", l: "STAFF ADOPTION" },
      { n: "3×", l: "FASTER PLANNING TASKS" },
    ],
    tint: "bg-[#faf6f2]",
    demo: PromptDemo,
  },
  {
    kicker: "PROGRAMME-WIDE AUTOMATION",
    title: "Agents that quietly do the boring work",
    desc: "Reports, reconciliation, monitoring: agentic workflows that run every morning before anyone logs in, with a human only where judgement matters.",
    tags: ["AGENTIC WORKFLOWS", "ORCHESTRATION", "OPS"],
    metrics: [
      { n: "2,600+", l: "HOURS SAVED PER YEAR" },
      { n: "35%", l: "EFFICIENCY GAIN" },
    ],
    tint: "bg-[#f3faf5]",
    demo: AgentDemo,
  },
  {
    kicker: "LEADERSHIP FORESIGHT",
    title: "Mapping what AI does to your industry before it does it",
    desc: "Futures wheels, scenario mapping and intelligence briefings that turn 'AI is coming' into decisions leadership can actually take this quarter.",
    tags: ["STRATEGY", "FUTURES WHEEL", "FORESIGHT"],
    metrics: [
      { n: "5", l: "MARKETS TRACKED" },
      { n: "C-SUITE", l: "BRIEFING CADENCE" },
    ],
    tint: "bg-[#f5f4fb]",
    demo: FuturesDemo,
  },
]

const governCases: DemoCase[] = [
  {
    kicker: "PUBLIC-SECTOR ASSURANCE",
    title: "Auditing AI before government puts it in front of people",
    desc: "End-to-end technical audits of enterprise AI solutions: functionality, data compliance and security posture, validated against government-approved standards.",
    tags: ["TECHNICAL AUDIT", "CERTIFICATION", "CLOUD AI"],
    metrics: [
      { n: "E2E", l: "AUDIT COVERAGE" },
      { n: "GOV", l: "APPROVED STANDARDS" },
    ],
    tint: "bg-[#f4f9fa]",
    demo: AuditDemo,
  },
  {
    kicker: "AI MANAGEMENT SYSTEMS",
    title: "Turning regulation into guardrails teams can actually use",
    desc: "Policy text doesn't ship products. I translate emerging AI regulation into practical checks, gates and logs, mapped to the standards auditors ask about.",
    tags: ["ISO 42001", "RISK & BIAS", "POLICY"],
    metrics: [
      { n: "ISO 42001", l: "LEAD IMPLEMENTER" },
      { n: "NIST", l: "AI RMF ALIGNED" },
    ],
    tint: "bg-[#faf6f2]",
    demo: GuardrailDemo,
  },
  {
    kicker: "AGENT OVERSIGHT",
    title: "Keeping autonomous agents on a short, visible leash",
    desc: "As agents get more autonomy, governance moves into the runtime: decision logs, QA verdicts and escalation rules so nothing fails silently.",
    tags: ["AGENT GOVERNANCE", "DECISION LOGS", "SAFETY"],
    metrics: [
      { n: "100%", l: "ACTIONS LOGGED" },
      { n: "0", l: "SILENT FAILURES" },
    ],
    tint: "bg-[#f3faf5]",
    demo: OversightDemo,
  },
]

const researchCases: DemoCase[] = [
  {
    kicker: "IEEE DASC/PICOM 2020 · KIET JOURNAL 2022",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=85EOf9sAAAAJ&citation_for_view=85EOf9sAAAAJ:d1gkVwhDpl0C",
    title: "Teaching big data to organise itself",
    desc: "Scalable taxonomy generation and incremental evolution on Apache Spark: category trees that build themselves from millions of terms, and keep growing as new data streams in, without a rebuild.",
    tags: ["APACHE SPARK", "TAXONOMY", "BIG DATA"],
    metrics: [
      { n: "8+", l: "CITATIONS" },
      { n: "2", l: "PEER-REVIEWED VENUES" },
    ],
    tint: "bg-[#f4f9fa]",
    demo: TaxonomyDemo,
  },
  {
    kicker: "ICCAI 2024",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=85EOf9sAAAAJ&citation_for_view=85EOf9sAAAAJ:u-x6o8ySG0sC",
    title: "Revolutionising urban planning with AI",
    desc: "How cities can read themselves: fusing urban signals so planners see density, demand and gaps as they form, and act before problems calcify into concrete.",
    tags: ["URBAN AI", "SMART CITIES", "PLANNING"],
    metrics: [
      { n: "6", l: "CITATIONS" },
      { n: "2024", l: "CONFERENCE PAPER" },
    ],
    tint: "bg-[#faf6f2]",
    demo: UrbanDemo,
  },
  {
    kicker: "ARXIV 2025",
    url: "https://arxiv.org/abs/2502.16871",
    title: "Detecting market trends from social chatter",
    desc: "Social media analytics over an evolving Gulf market: separating real consumer shifts from noise, early enough for brands to act on them.",
    tags: ["SOCIAL ANALYTICS", "TREND DETECTION", "NLP"],
    metrics: [
      { n: "4", l: "CITATIONS" },
      { n: "KSA", l: "MARKET STUDIED" },
    ],
    tint: "bg-[#f3faf5]",
    demo: TrendKsaDemo,
  },
  {
    kicker: "ARXIV 2025",
    url: "https://arxiv.org/abs/2504.16153",
    title: "Finding the green shift before it's obvious",
    desc: "The same social-analytics lens pointed at sustainability: tracking how eco-intent rises in consumer conversation, topic by topic, over time.",
    tags: ["SUSTAINABILITY", "SOCIAL ANALYTICS", "TRENDS"],
    metrics: [
      { n: "2025", l: "PREPRINT" },
      { n: "ESG", l: "CONSUMER SIGNALS" },
    ],
    tint: "bg-[#f5f4fb]",
    demo: SustainDemo,
  },
  {
    kicker: "ARXIV 2025",
    url: "https://arxiv.org/abs/2506.01974",
    title: "What AI does to a traffic jam",
    desc: "A comparative study of AI-driven traffic and mobility optimisation across two Gulf cities: what adaptive signals, prediction and routing actually change on the road.",
    tags: ["MOBILITY", "TRAFFIC AI", "COMPARATIVE STUDY"],
    metrics: [
      { n: "2", l: "CITIES COMPARED" },
      { n: "2025", l: "PREPRINT" },
    ],
    tint: "bg-[#f4f9fa]",
    demo: TrafficDemo,
  },
]

/* ---------------- track record ---------------- */

type RecordCase = {
  kicker: string
  title: string
  desc: string
  metrics: { n: string; l: string }[]
  tint?: string
}

const TINTS = ["bg-[#f4f9fa]", "bg-[#faf6f2]", "bg-[#f3faf5]", "bg-[#f5f4fb]"]

const trackRecord: RecordCase[] = [
  {
    kicker: "RCRC RIYADH · SOCIAL ATLAS",
    title: "Reading every district of Riyadh at once",
    desc: "Full-spectrum sentiment and liveability analysis for The New Riyadh Plan, across every district of the city.",
    metrics: [
      { n: "4.5M", l: "DATA POINTS ANALYSED" },
      { n: "81", l: "SUBTOPICS TRACKED" },
    ],
  },
  {
    kicker: "DMT ABU DHABI · MUSAFFAH",
    title: "Reading an industrial zone like a city",
    desc: "Spatial GDP modelling, employment profiling and sentiment mapping across Musaffah, the zone behind a fifth of Abu Dhabi's GDP.",
    metrics: [
      { n: "189K", l: "WORKER PROFILES" },
      { n: "20%", l: "OF ABU DHABI GDP" },
    ],
  },
  {
    kicker: "HAJJ SEASON · SENTIMENT AI",
    title: "Measuring 1.67 million pilgrim experiences",
    desc: "Sentiment analysis across the world's largest annual gathering: satisfaction tracked by journey stage, service and language, year on year.",
    metrics: [
      { n: "1.67M", l: "PILGRIMS ANALYSED" },
      { n: "171", l: "COUNTRIES OF ORIGIN" },
    ],
  },
  {
    kicker: "RTA DUBAI · MOBILITY",
    title: "What flexible work did to Dubai traffic",
    desc: "Mapping how flexible and remote work reshaped when and where the city moves, from live traffic and behavioural data.",
    metrics: [
      { n: "24-hr", l: "MOBILITY CURVES" },
      { n: "2024", l: "DELIVERED" },
    ],
  },
  {
    kicker: "CADC · CENTRAL RIYADH",
    title: "A social atlas for regenerating central Riyadh",
    desc: "Employment clusters, sentiment and activity patterns mapped across the five action areas of central Riyadh's regeneration.",
    metrics: [
      { n: "100K+", l: "SOCIAL POSTS READ" },
      { n: "10K+", l: "PLACES MAPPED" },
    ],
  },
  {
    kicker: "MODON · REEM ISLAND",
    title: "Two islands, understood hour by hour",
    desc: "Movement patterns, visitor experience and worker activity profiled across Reem Island's mixed-use developments.",
    metrics: [
      { n: "2", l: "ISLANDS PROFILED" },
      { n: "24-hr", l: "ACTIVITY MAPPED" },
    ],
  },
  {
    kicker: "ROME MUNICIPALITY · SATISFACTION",
    title: "How Romans experience their city's services",
    desc: "A dual-layer satisfaction framework across Rome, processing millions of data points across 15 service domains.",
    metrics: [
      { n: "15", l: "SERVICE DOMAINS" },
      { n: "11", l: "SDG CATEGORIES" },
    ],
  },
  {
    kicker: "NIKE · FINE-TUNED LLMS",
    title: "Search that works in 26 languages",
    desc: "Multilingual search and taxonomy models across a global catalogue, lifting search-to-cart conversion in every market.",
    metrics: [
      { n: "+12%", l: "SEARCH-TO-CART" },
      { n: "26", l: "LANGUAGES" },
    ],
    tint: "bg-[#f4f9fa]",
  },
  {
    kicker: "EIGHTFOLD AI · CHANGE MANAGEMENT",
    title: "Change management for Eightfold adoption",
    desc: "ADKAR-based change management for organisations adopting Eightfold's talent AI: frameworks, workshops and adoption scoring.",
    metrics: [
      { n: "ADKAR", l: "SCORED, NOT GUESSED" },
      { n: "5", l: "STAGES MEASURED" },
    ],
  },
  {
    kicker: "PWC · RAG SWARM",
    title: "A week of private-equity research done in two hours",
    desc: "A swarm of retrieval agents doing the analyst legwork on deal research, supporting $400M in closed deals.",
    metrics: [
      { n: "$400M", l: "DEALS SUPPORTED" },
      { n: "2 hrs", l: "WAS 5–7 DAYS" },
    ],
    tint: "bg-[#faf6f2]",
  },
  {
    kicker: "BLUECROSS BLUESHIELD · AGENTIC RAG",
    title: "Claims that process themselves",
    desc: "Claims automation for a leading US health insurer: a third of claims now settle without a human touching them.",
    metrics: [
      { n: "35%", l: "CLAIMS AUTOMATED" },
      { n: "$14.7M", l: "ANNUAL BENEFIT" },
    ],
    tint: "bg-[#f3faf5]",
  },
  {
    kicker: "EY TAXTECH · DOCUMENT AI",
    title: "Reading tax documents so people don't have to",
    desc: "Document AI for K-1 and K-3 tax forms, with twice the extraction accuracy of the manual process and a 98% on-time filing rate.",
    metrics: [
      { n: "$3M", l: "SAVED PER YEAR" },
      { n: "2×", l: "EXTRACTION ACCURACY" },
    ],
    tint: "bg-[#f5f4fb]",
  },
  {
    kicker: "SAUDI CUSTOMS · POLICY-AWARE RAG",
    title: "Auditing shipments after they clear",
    desc: "Post-clearance audit AI that re-reads cleared shipments against policy and finds the duties that slipped through.",
    metrics: [
      { n: "$50M+", l: "DUTIES RECOVERED" },
      { n: "-32%", l: "REVIEW TIME" },
    ],
    tint: "bg-[#f4f9fa]",
  },
  {
    kicker: "NZ CUSTOMS · RISK ML",
    title: "Flagging the containers worth opening",
    desc: "Risk models that tell customs officers where to look, tripling high-risk container detection. Awarded a WCO Certificate of Merit.",
    metrics: [
      { n: "3×", l: "HIGH-RISK DETECTION" },
      { n: "WCO", l: "CERTIFICATE OF MERIT" },
    ],
    tint: "bg-[#faf6f2]",
  },
  {
    kicker: "ACC INSURANCE · BEHAVIOURAL ML",
    title: "Scoring providers before the fraud compounds",
    desc: "Behavioural fraud-scoring micro-services for New Zealand's national insurer, well ahead of the legacy systems they replaced.",
    metrics: [
      { n: "NZ$18M", l: "RECOVERED PER YEAR" },
      { n: "+30%", l: "PRECISION VS LEGACY" },
    ],
    tint: "bg-[#f3faf5]",
  },
  {
    kicker: "TRINIDAD & TOBAGO CUSTOMS · GRAPH RAG",
    title: "Finding under-declared duties in the data",
    desc: "A graph model over customs declarations that flags likely revenue evasion, live within 30 days of kick-off.",
    metrics: [
      { n: "$3.4M", l: "FLAGGED IN Q1" },
      { n: "30 days", l: "TO PRODUCTION" },
    ],
    tint: "bg-[#f5f4fb]",
  },
  {
    kicker: "DEALFLOW DILIGENCE · AGENTIC KG-RAG",
    title: "M&A due diligence in days instead of weeks",
    desc: "An agentic knowledge-graph system that reads the deal room, compressing a 4–6 week diligence cycle into under a week.",
    metrics: [
      { n: "380%", l: "ROI" },
      { n: "5–7 days", l: "WAS 4–6 WEEKS" },
    ],
    tint: "bg-[#f4f9fa]",
  },
  {
    kicker: "NIVELO · LOW-LATENCY ML",
    title: "Catching ACH fraud in 140 milliseconds",
    desc: "A real-time fraud engine scoring payments as they move, fast enough to sit inside the transaction itself.",
    metrics: [
      { n: "92%", l: "DETECTION ACCURACY" },
      { n: "140ms", l: "DECISION LATENCY" },
    ],
    tint: "bg-[#faf6f2]",
  },
  {
    kicker: "CENTRALITY · MULTI-SIGNAL ML",
    title: "Trading models that carried a quarter of fund PnL",
    desc: "ICO-scoring and crypto-trading models for a hedge fund, beating an ETH buy-and-hold strategy on CAGR.",
    metrics: [
      { n: "24%", l: "OF FUND PNL" },
      { n: "+18%", l: "CAGR VS ETH HOLD" },
    ],
    tint: "bg-[#f3faf5]",
  },
  {
    kicker: "HEALTHDEX · HOMOMORPHIC ENCRYPTION",
    title: "A health-data marketplace that never sees the data",
    desc: "Health records analysed under homomorphic encryption, so insight moves while raw data stays private.",
    metrics: [
      { n: "$6M", l: "SERIES A SECURED" },
      { n: "$25M", l: "GMV PROJECTED" },
    ],
    tint: "bg-[#f5f4fb]",
  },
  {
    kicker: "BIOSYNAPSE · KNOWLEDGE GRAPH",
    title: "Shrinking drug-target discovery by 40%",
    desc: "An agentic knowledge graph over biomedical literature that surfaced three drug-repurposing candidates on the way.",
    metrics: [
      { n: "-40%", l: "DISCOVERY TIME" },
      { n: "3", l: "REPURPOSING CANDIDATES" },
    ],
    tint: "bg-[#f4f9fa]",
  },
  {
    kicker: "FACTORYFLOW AI · VOICE AI",
    title: "Machines that ask for maintenance",
    desc: "Predictive maintenance with a voice assistant on the factory floor, so technicians talk to the machines they fix.",
    metrics: [
      { n: "285%", l: "ROI" },
      { n: "-25%", l: "UNPLANNED DOWNTIME" },
    ],
    tint: "bg-[#faf6f2]",
  },
  {
    kicker: "AMPLIFYINFLUENCE · MULTIMODAL GEN AI",
    title: "Creator campaigns personalised at scale",
    desc: "Multimodal generation that tailors creative per creator, letting brands run five times more micro-influencer collaborations.",
    metrics: [
      { n: "+35%", l: "ROAS" },
      { n: "5×", l: "CREATOR COLLABS" },
    ],
    tint: "bg-[#f3faf5]",
  },
  {
    kicker: "MASI · LLM FINE-TUNING",
    title: "Translation for languages big models forget",
    desc: "Fine-tuned translation models for low-resource languages, bringing bilingual education to 4,800 rural students.",
    metrics: [
      { n: "+19", l: "BLEU LIFT" },
      { n: "4,800", l: "STUDENTS REACHED" },
    ],
    tint: "bg-[#f4f9fa]",
  },
  {
    kicker: "AUCKLAND BLUES · MULTIMODAL ML",
    title: "Predicting injuries before match day",
    desc: "Multimodal models on training-ground data that flag soft-tissue injury risk while there's still time to rest a player.",
    metrics: [
      { n: "-21%", l: "MATCH-DAY INJURIES" },
      { n: "Edge", l: "ON-DEVICE DEPLOYMENT" },
    ],
    tint: "bg-[#faf6f2]",
  },
  {
    kicker: "UBF · GRAPH RAG",
    title: "Showing donors exactly what their money did",
    desc: "Donor-impact analytics and a grant optimiser for a non-profit, turning clear evidence into 40% more funding.",
    metrics: [
      { n: "+40%", l: "FUNDING SECURED" },
      { n: "8 wks", l: "TO PRODUCTION" },
    ],
    tint: "bg-[#f3faf5]",
  },
]

/* ---------------- project walkthroughs (modal) ---------------- */

type ProjectDetail = {
  problem: string
  built: string
  changed: string
  flow: { nodes: string[]; logs: string[] }
  bars: { label: string; display: string; value: number; muted?: boolean }[]
}

const projectDetails: Record<string, ProjectDetail> = {
  "RCRC RIYADH · SOCIAL ATLAS": {
    problem:
      "The Royal Commission for Riyadh City was writing The New Riyadh Plan, the plan that decides how the capital grows for decades. The team needed to know how residents experience each district: safety, transport, green space, noise, services. Surveys could reach a few thousand people. Riyadh has over seven million.",
    built:
      "We deployed the social atlas across the whole city. It reads public posts, reviews and location signals in the dialects Riyadh writes in, classifies each one into 12 urban topics and 81 subtopics, and pins it to the district it talks about. 4.5 million data points went through the pipeline. The output is a map: pick a district and see what residents praise, what they complain about, and how it compares to the district next door.",
    changed:
      "The commission got district-level evidence for the plan in 2024, covering every district instead of a sampled few. Planning discussions that used to run on anecdote now start from the same map.",
    flow: {
      nodes: ["city signals", "arabic NLP", "topic classify", "district grid", "planning brief"],
      logs: ["4.5M data points ingested", "12 topics · 81 subtopics", "✓ every district covered"],
    },
    bars: [
      { label: "district coverage · fieldwork", display: "samples", value: 30, muted: true },
      { label: "with the social atlas", display: "all districts", value: 100 },
    ],
  },
  "DMT ABU DHABI · MUSAFFAH": {
    problem:
      "Musaffah is Abu Dhabi's industrial engine: the workshops, factories and yards behind a fifth of the emirate's GDP. The Department of Municipalities and Transport was planning the zone's next phase and had almost no picture of it as a place: who works there, where value is created, how the zone feels to the people inside it.",
    built:
      "We modelled the zone's GDP spatially, block by block, so DMT could see where value concentrates. On top of that we built 189,000 worker profiles from employment and activity data, then layered sentiment mapping over the zone. Three views of the same place: economic, human and lived.",
    changed:
      "DMT received the evidence base in 2025. Decisions about upgrading Musaffah now start from a map of what the zone earns, who runs it and where it hurts.",
    flow: {
      nodes: ["zone data", "GDP model", "worker profiles", "sentiment map", "planning brief"],
      logs: ["189K worker profiles built", "GDP mapped block by block", "✓ delivered to DMT 2025"],
    },
    bars: [
      { label: "share of Abu Dhabi GDP in one zone", display: "20%", value: 20 },
      { label: "worker profiles built", display: "189K", value: 90, muted: true },
    ],
  },
  "HAJJ SEASON · SENTIMENT AI": {
    problem:
      "Every year 1.67 million pilgrims from 171 countries move through five days of Hajj. Feedback existed, but it arrived in more than a hundred languages, tied to no particular place or service, and there was no way to compare one year against the next.",
    built:
      "We ran Arabic-native sentiment models over pilgrim feedback in 100+ languages, including Urdu, Indonesian, Turkish and Malay. Every signal was anchored to a stage of the journey and scored per service: transport, accommodation, crowd management, wayfinding, food, healthcare, safety. Then we compared 2024 against 2022, service by service.",
    changed:
      "The analysis showed exactly where the experience improved and where it lagged. Accommodation satisfaction rose 12 points year on year and food quality rose 8, while transport sat 5 points below the acceptable threshold and crowd management 11 below. Non-Saudi pilgrims reported consistently lower satisfaction than Saudi pilgrims, which pointed at specific gaps to close.",
    flow: {
      nodes: ["pilgrim feedback", "arabic-native models", "journey stages", "service scores", "YoY compare"],
      logs: ["100+ languages processed", "accommodation +12 · food +8", "✓ gaps mapped by stage"],
    },
    bars: [
      { label: "accommodation satisfaction YoY", display: "+12 pts", value: 84 },
      { label: "crowd management vs threshold", display: "-11 pts", value: 38, muted: true },
    ],
  },
  "RTA DUBAI · MOBILITY": {
    problem:
      "After remote and flexible work took hold, Dubai's Roads and Transport Authority suspected the city no longer moves on a nine-to-five rhythm. Transport planning still assumed the old peaks, and nobody could say how far reality had drifted from the assumption.",
    built:
      "We fused live traffic feeds with behavioural data and built 24-hour mobility curves for the city, then compared the curves from before and after the shift to flexible work. The analysis shows when demand now rises, where it moved to, and which corridors carry it.",
    changed:
      "RTA got a before-and-after picture of real demand in 2024. The effect of flexible work on the roads stopped being a suspicion and became a measured curve.",
    flow: {
      nodes: ["live feeds", "behaviour signals", "demand model", "before / after", "policy brief"],
      logs: ["24-hour curves built", "old peaks vs new peaks", "✓ new demand pattern mapped"],
    },
    bars: [
      { label: "demand picture · before", display: "9-to-5 assumption", value: 40, muted: true },
      { label: "after", display: "24-hour curves", value: 95 },
    ],
  },
  "CADC · CENTRAL RIYADH": {
    problem:
      "The Central Area Development Company is regenerating the heart of Riyadh across five action areas. Regeneration means choosing: which blocks change, what gets protected, where investment goes first. Site visits and static studies were not enough to make those calls.",
    built:
      "We built a social atlas of central Riyadh from more than 100,000 social posts and 10,000 mapped places. It shows where employment clusters, how people feel about each area, and when and where activity happens through the day, broken down per action area.",
    changed:
      "The programme got a shared evidence layer in 2025. Each of the five action areas now has its own profile of work, sentiment and activity to plan against.",
    flow: {
      nodes: ["social posts", "places", "clusters", "action areas", "regeneration brief"],
      logs: ["100K+ posts classified", "10K+ places mapped", "✓ five action areas profiled"],
    },
    bars: [
      { label: "places mapped", display: "10K+", value: 85 },
      { label: "action areas covered", display: "5 of 5", value: 100, muted: true },
    ],
  },
  "MODON · REEM ISLAND": {
    problem:
      "MODON manages Reem Island's mixed-use developments, places that live on rhythm: office workers in the morning, residents in the evening, visitors at the weekend. The developer had masterplans and occupancy numbers, but no view of how the islands are used hour by hour.",
    built:
      "We profiled movement patterns, visitor experience and worker activity across two islands and turned them into 24-hour activity maps. The maps show which areas fill and empty, when, and with whom.",
    changed:
      "MODON received the profiles in 2025. Leasing, amenity and event decisions now have an hourly picture of the islands behind them.",
    flow: {
      nodes: ["movement data", "visitor signals", "worker activity", "24-hr profile", "asset decisions"],
      logs: ["2 islands profiled", "24-hour rhythms mapped", "✓ delivered to MODON 2025"],
    },
    bars: [
      { label: "view of the islands · before", display: "static plans", value: 35, muted: true },
      { label: "after", display: "hour by hour", value: 95 },
    ],
  },
  "ROME MUNICIPALITY · SATISFACTION": {
    problem:
      "Rome's municipality measures service performance: buses run, waste gets collected, permits get issued. But performance numbers and how Romans feel about the services are different things, and the gap between the two is where complaints and mistrust grow.",
    built:
      "We deployed a dual-layer satisfaction framework across the city, processing millions of data points. Fifteen service domains were each scored 0 to 10 from citizen signals, and the scores were aligned to 11 SDG categories so the city could report against international goals.",
    changed:
      "Rome got a city-wide read of experienced service quality in 2024, sitting next to its measured performance. Where the two diverge is now visible per domain.",
    flow: {
      nodes: ["citizen signals", "sentiment models", "15 domains", "SDG mapping", "city dashboard"],
      logs: ["millions of data points read", "15 domains scored 0–10", "✓ mapped to 11 SDGs"],
    },
    bars: [
      { label: "service domains scored", display: "15", value: 88 },
      { label: "SDG categories aligned", display: "11", value: 65, muted: true },
    ],
  },
  "NIKE · FINE-TUNED LLMS": {
    problem:
      "Nike sells in dozens of markets, and shoppers search in their own language. The catalogue's taxonomy worked well in English and progressively worse everywhere else. A shopper typing 'zapatillas running mujer' got weaker results than one typing 'women's running shoes', and abandoned carts followed.",
    built:
      "As part of Nike's global data programme, we fine-tuned multilingual language models to map any query in 26 languages onto one shared product taxonomy. The models learned the catalogue, not just the languages, so slang, misspellings and local product terms resolve to the right categories. Retraining pipelines keep new products and new phrasing flowing in without anyone writing rules.",
    changed:
      "Search-to-cart conversion rose 12% across markets. The same programme standardised the taxonomy and data lineage underneath, which lifted SKU-level forecast accuracy 25%.",
    flow: {
      nodes: ["query", "language model", "shared taxonomy", "ranked results", "cart"],
      logs: ['"zapatillas running mujer"', "→ running shoes · women · road", "✓ search-to-cart +12%"],
    },
    bars: [
      { label: "search-to-cart · before", display: "baseline", value: 58, muted: true },
      { label: "after fine-tuning", display: "+12%", value: 65 },
    ],
  },
  "EIGHTFOLD AI · CHANGE MANAGEMENT": {
    problem:
      "Organisations licensed Eightfold's talent intelligence platform and expected recruiting to change on its own. It didn't. Recruiters kept their spreadsheets and their old workflows, and adoption was handled with a one-off training session.",
    built:
      "I built the change management practice around Eightfold rollouts using ADKAR. Every team was scored on the five stages: awareness, desire, knowledge, ability, reinforcement. Readiness formulas turned the scores into decisions: a team low on desire got a sponsor-led workshop, a team low on ability got hands-on labs. After each round we re-scored and moved teams to the next stage.",
    changed:
      "Rollouts were managed on measured adoption scores instead of attendance sheets. Workshops landed on the stage each team was stuck at, and sponsors could see progress between rounds.",
    flow: {
      nodes: ["rollout", "ADKAR baseline", "stage scores", "targeted workshops", "re-score"],
      logs: ["team 4: awareness 4.1 · desire 2.3", "desire gap → sponsor workshop", "✓ re-scored after rollout"],
    },
    bars: [
      { label: "adoption approach · typical", display: "training email", value: 30, muted: true },
      { label: "with the ADKAR framework", display: "5 stages scored", value: 90 },
    ],
  },
  "PWC · RAG SWARM": {
    problem:
      "PwC's private-equity analysts spent five to seven days building a research pack for each target company: filings, news archives, expert-call transcripts, all read by hand. Deals move faster than that, and partners were making early calls before the research landed.",
    built:
      "We built a swarm of retrieval agents that split the work the way an analyst team would. One agent reads regulatory filings, one tracks news, one mines expert-call transcripts. A lead agent merges their findings into a memo where every claim carries a citation back to its source, 214 of them in a typical pack.",
    changed:
      "The research cycle went from a week to two hours. The memos supported over $400M in closed deals, and analysts moved from assembling packs to challenging them.",
    flow: {
      nodes: ["target", "filings agent", "news agent", "transcript agent", "sourced memo"],
      logs: ["3 agents reading in parallel…", "merge: 214 citations attached", "✓ memo ready in 1h 52m"],
    },
    bars: [
      { label: "research cycle · analysts", display: "5–7 days", value: 100, muted: true },
      { label: "with the agent swarm", display: "2 hrs", value: 4 },
    ],
  },
  "BLUECROSS BLUESHIELD · AGENTIC RAG": {
    problem:
      "A BlueCross BlueShield plan was putting every claim through human adjudicators, routine or not. Backlogs grew, costs grew with them, and the easy third of claims cost as much to handle as the hard ones.",
    built:
      "We built an agentic pipeline that reads each incoming claim, retrieves the member's policy and history, and checks the rules. Routine claims settle automatically. Anything uncertain routes to a human with the pipeline's reasoning attached, so the adjudicator starts from a reasoned draft instead of a blank screen.",
    changed:
      "35% of claims now settle without a human touching them, worth $14.7M a year. Adjudicators spend their time on the claims that need judgement.",
    flow: {
      nodes: ["claim", "retrieve policy", "rule check", "auto-settle", "human review"],
      logs: ["claim 48123: routine → settled", "claim 48124: flagged → reviewer", "✓ 35% straight-through"],
    },
    bars: [
      { label: "claims needing a human · before", display: "100%", value: 100, muted: true },
      { label: "after", display: "65%", value: 65 },
    ],
  },
  "EY TAXTECH · DOCUMENT AI": {
    problem:
      "Every tax season, EY processed K-1 and K-3 forms arriving as scans in a thousand different layouts. Seasonal teams keyed the fields in by hand, errors surfaced at filing time, and the cost scaled with headcount.",
    built:
      "We trained document AI on the forms themselves, so it recognises layouts it has never seen before. On top sits a smart queue: every extracted field carries a confidence score, low-confidence extractions go to reviewers first, and high-confidence ones flow straight through.",
    changed:
      "Extraction accuracy doubled, $3M a year in labour came back, and on-time filing reached 98%. The same season's work now needs a fraction of the manual keying.",
    flow: {
      nodes: ["scanned form", "layout detect", "field extraction", "confidence score", "smart queue"],
      logs: ["K-1 · 2019 layout variant", "34 fields · 31 high-confidence", "✓ 3 fields routed to review"],
    },
    bars: [
      { label: "extraction accuracy · manual", display: "1×", value: 45, muted: true },
      { label: "document AI", display: "2×", value: 90 },
    ],
  },
  "SAUDI CUSTOMS · POLICY-AWARE RAG": {
    problem:
      "Once a shipment cleared Saudi customs, checking it again meant re-reading the declaration against tariff policy by hand. With millions of declarations a year, almost nothing was re-checked, and under-paid duties stayed under-paid.",
    built:
      "We built policy-aware retrieval that re-reads every cleared declaration against the tariff rules it should have met: HS codes against invoices, declared values against policy. Each mismatch is ranked by the duty at stake, so auditors start their day with the most expensive gaps.",
    changed:
      "More than $50M in unpaid duties was recovered in the first six months, and audit review time fell by a third.",
    flow: {
      nodes: ["cleared shipment", "declaration", "tariff policy", "mismatch score", "audit queue"],
      logs: ["HS code vs invoice: mismatch", "est. duty gap: $214,000", "✓ queued for audit · rank 3"],
    },
    bars: [
      { label: "review time · before", display: "100%", value: 100, muted: true },
      { label: "after", display: "-32%", value: 68 },
    ],
  },
  "NZ CUSTOMS · RISK ML": {
    problem:
      "New Zealand Customs can physically open only a small fraction of inbound containers. The picks ran on manual rules, and smuggling networks had learned those rules well enough to route around them.",
    built:
      "We built risk models over manifests, trade history and routing patterns that score every inbound container before it lands. Each flag comes with its reasons, route anomalies, declared-weight mismatches, trader history, so officers know why they're opening a particular box.",
    changed:
      "High-risk detection tripled per inspection, and the work was recognised with a World Customs Organization Certificate of Merit.",
    flow: {
      nodes: ["manifest", "trade history", "risk model", "score", "inspection list"],
      logs: ["container QX-2214 · risk 0.91", "reason: route + declared weight", "✓ detection 3× vs rules"],
    },
    bars: [
      { label: "high-risk finds per inspection", display: "1×", value: 30, muted: true },
      { label: "with risk models", display: "3×", value: 90 },
    ],
  },
  "ACC INSURANCE · BEHAVIOURAL ML": {
    problem:
      "ACC, New Zealand's national accident insurer, knew provider fraud was hiding inside millions of legitimate claims. The legacy rules flagged so many honest providers that investigators spent most of their time clearing false alarms.",
    built:
      "We built behavioural models that score each provider on how their billing drifts from their peers over time, instead of judging single suspicious claims. A provider drifting 3 sigma from their peer group over six months becomes a case file. The models ship as micro-services that claims teams call during normal processing.",
    changed:
      "NZ$18M a year is now recovered, at 30% better precision than the legacy rules. Investigators open cases that are worth opening.",
    flow: {
      nodes: ["claims stream", "peer baseline", "drift score", "case file", "investigator"],
      logs: ["provider 8841: billing drift ↑", "peer gap: 3.2σ over 6 months", "✓ case opened · recovered"],
    },
    bars: [
      { label: "fraud precision · legacy rules", display: "1×", value: 55, muted: true },
      { label: "behavioural models", display: "+30%", value: 72 },
    ],
  },
  "TRINIDAD & TOBAGO CUSTOMS · GRAPH RAG": {
    problem:
      "Trinidad and Tobago's customs authority suspected duties were being under-declared across importers and brokers that looked unrelated on paper. Checking case by case could never see the network.",
    built:
      "We built a graph over declarations linking importers, brokers, routes and declared values, with models that flag clusters where the numbers don't add up: fourteen importers declaring 40% under their peers while moving on the same routes. The system went live 30 days after kick-off.",
    changed:
      "$3.4M in under-declared duties was flagged in the first quarter, and the hit rate tripled against the previous approach.",
    flow: {
      nodes: ["declarations", "entity graph", "cluster detect", "value check", "flag"],
      logs: ["cluster: 14 linked importers", "declared value 40% under peers", "✓ $3.4M flagged in Q1"],
    },
    bars: [
      { label: "evasion hit rate · before", display: "1×", value: 30, muted: true },
      { label: "graph model", display: "3×", value: 90 },
    ],
  },
  "DEALFLOW DILIGENCE · AGENTIC KG-RAG": {
    problem:
      "In M&A, every deal room is thousands of contracts, statements and disclosures read under deadline. Diligence took four to six weeks of senior time, on deals worth upwards of $50M each.",
    built:
      "We built agents that construct a knowledge graph of the target company while they read: entities, obligations, change-of-control clauses, cross-references between documents. Diligence checklists are then answered from the graph, each answer citing the documents behind it. In one deal, 4,120 documents went in and 92% of the checklist came back pre-answered.",
    changed:
      "Diligence now runs in five to seven days instead of four to six weeks, and the build returned 380% ROI.",
    flow: {
      nodes: ["deal room", "reading agents", "knowledge graph", "checklist answers", "citations"],
      logs: ["4,120 documents ingested", "change-of-control: 17 hits", "✓ checklist 92% pre-answered"],
    },
    bars: [
      { label: "diligence cycle · before", display: "4–6 wks", value: 100, muted: true },
      { label: "with the agents", display: "5–7 days", value: 20 },
    ],
  },
  "NIVELO · LOW-LATENCY ML": {
    problem:
      "ACH payments clear in seconds, and fraud moves with them. Nivelo's clients were scoring payments with batch models that caught fraud hours after the money had left, when recovery is expensive and often impossible.",
    built:
      "We rebuilt the scoring engine for the hot path. Features compute inline as the payment moves, and the models were compressed until a full decision fits inside 140 milliseconds. That is fast enough to sit inside the transaction and hold a payment before release instead of chasing it afterwards.",
    changed:
      "The engine catches fraud in flight at 92% accuracy. It worked well enough that the client licensed it as a standalone product, which opened a new revenue stream.",
    flow: {
      nodes: ["payment", "inline features", "model", "decision · 140ms", "release / hold"],
      logs: ["txn 77120 scored in 138ms", "risk 0.96 → hold", "✓ 92% detection accuracy"],
    },
    bars: [
      { label: "decision time · batch models", display: "hours", value: 100, muted: true },
      { label: "in-flight engine", display: "140ms", value: 3 },
    ],
  },
  "CENTRALITY · MULTI-SIGNAL ML": {
    problem:
      "Centrality's fund was trading crypto in a market that moves on three things at once: chain activity, order books and crowd mood. Human traders could watch one of them at a time.",
    built:
      "We built models that blend on-chain activity, order-book depth and social sentiment into trading and ICO-scoring signals. Positions are sized and risk-capped automatically, so a strong signal never becomes an oversized bet.",
    changed:
      "The models contributed 24% of fund PnL and ran 18% CAGR ahead of simply holding ETH over the same period.",
    flow: {
      nodes: ["on-chain", "order book", "sentiment", "signal blend", "position"],
      logs: ["3 signal families agree: long", "position sized · risk-capped", "✓ 24% of fund PnL"],
    },
    bars: [
      { label: "ETH buy-and-hold", display: "baseline", value: 55, muted: true },
      { label: "strategy CAGR", display: "+18%", value: 73 },
    ],
  },
  "HEALTHDEX · HOMOMORPHIC ENCRYPTION": {
    problem:
      "Health researchers wanted access to patient data. Patients and regulators wanted the data never to leave. Every existing marketplace resolved that tension by handing over copies, and a copy handed over is gone for good.",
    built:
      "We built the marketplace on homomorphic encryption, so the analysis travels instead of the data. A buyer submits a query, computation runs on the encrypted records, and only the answer comes out. The records are never decrypted, not even by the platform itself.",
    changed:
      "The model raised a $6M Series A with $25M GMV projected, because it could promise what no copy-based marketplace could: the data stays put.",
    flow: {
      nodes: ["encrypted records", "buyer query", "compute on ciphertext", "answer out", "data stays put"],
      logs: ["query run · nothing decrypted", "result released to buyer", "✓ raw data never moved"],
    },
    bars: [
      { label: "queries answered under encryption", display: "100%", value: 100 },
      { label: "raw records exposed", display: "none", value: 3, muted: true },
    ],
  },
  "BIOSYNAPSE · KNOWLEDGE GRAPH": {
    problem:
      "Drug-target discovery meant scientists cross-reading thousands of papers, and the connections between findings died inside PDFs. Two papers that jointly point at a target could sit unread in different journals for years.",
    built:
      "We built an agentic knowledge graph that reads biomedical literature continuously, around 12,400 papers linked in a typical month. It extracts genes, pathways, compounds and diseases and links them; when new edges close a loop, the system proposes ranked target hypotheses for the lab to review.",
    changed:
      "Target-discovery time fell 40%, and three drug-repurposing candidates surfaced from connections nobody had put together, with multi-million dollar value projected over five years.",
    flow: {
      nodes: ["papers", "entity extraction", "knowledge graph", "hypothesis rank", "lab review"],
      logs: ["12,400 papers linked this month", "pathway ↔ compound: new edge", "✓ 3 repurposing candidates"],
    },
    bars: [
      { label: "target discovery time · before", display: "100%", value: 100, muted: true },
      { label: "with the graph", display: "-40%", value: 60 },
    ],
  },
  "FACTORYFLOW AI · VOICE AI": {
    problem:
      "The plant's sensors saw failures coming, but the alerts landed in dashboards on desks. Technicians on the floor work with gloves on and hands full, and by the time someone read the dashboard, the bearing had already gone.",
    built:
      "We kept the predictive models on machine telemetry and changed how they reach people: a voice assistant on the floor. A technician hears that bearing three is running hot with about two days left, replies that it's replaced, and the fix is logged hands-free.",
    changed:
      "Unplanned downtime fell 25% and the programme returned 285% ROI, mostly because predictions finally reached the people who could act on them in time.",
    flow: {
      nodes: ["telemetry", "failure model", "voice alert", "technician", "fix logged"],
      logs: ['"bearing 3 runs hot, 2 days left"', '"replaced it, closing the job"', "✓ downtime -25%"],
    },
    bars: [
      { label: "unplanned downtime · before", display: "100%", value: 100, muted: true },
      { label: "with voice alerts", display: "-25%", value: 75 },
    ],
  },
  "AMPLIFYINFLUENCE · MULTIMODAL GEN AI": {
    problem:
      "Brands could afford custom creative for ten big influencers, or the same generic kit for a thousand small ones. Micro-influencers convert well, but no creative team can hand-produce a thousand tailored campaigns.",
    built:
      "We built multimodal generation that tailors visuals, copy and offers to each creator's audience and style, around 1,200 variants in a campaign. Brand guardrails are checked on every render before anything ships, so scale doesn't cost control of the brand.",
    changed:
      "Return on ad spend rose 35%, and brands ran five times more micro-influencer collaborations at once without growing the creative team.",
    flow: {
      nodes: ["brand kit", "creator profile", "generate variants", "guardrail check", "campaign"],
      logs: ["1,200 variants rendered", "brand check: all pass", "✓ ROAS +35%"],
    },
    bars: [
      { label: "collaborations per campaign", display: "1×", value: 20, muted: true },
      { label: "with generation", display: "5×", value: 100 },
    ],
  },
  "MASI · LLM FINE-TUNING": {
    problem:
      "Large translation models skip the languages textbooks aren't written in. In rural classrooms that meant students studying in a language they didn't speak at home, because no model handled theirs.",
    built:
      "We fine-tuned translation models for low-resource languages on community-sourced parallel text, with native speakers reviewing the output before anything reached a classroom. Each training round was scored on BLEU against the base model, so quality was measured, not assumed.",
    changed:
      "The models gained 19 BLEU points over the base, and bilingual study materials reached 4,800 rural students.",
    flow: {
      nodes: ["parallel text", "fine-tune", "native review", "materials", "classroom"],
      logs: ["epoch 4 · BLEU 31 → 43", "reviewer pass: 96% adequate", "✓ 4,800 students reached"],
    },
    bars: [
      { label: "BLEU · base model", display: "base", value: 40, muted: true },
      { label: "fine-tuned", display: "+19", value: 75 },
    ],
  },
  "AUCKLAND BLUES · MULTIMODAL ML": {
    problem:
      "Soft-tissue injuries were costing the Auckland Blues players in match weeks, and they looked random. The signals existed, GPS loads, wellness surveys, gym data, but they lived in three systems nobody had fused.",
    built:
      "We fused training load, movement and recovery signals into multimodal models that run on-device at the training ground. Every player gets a daily risk flag, and a high flag turns into a modified session while there's still time to rest.",
    changed:
      "Match-day soft-tissue injuries fell 21%. Selection conversations now include a risk number, not just a feeling.",
    flow: {
      nodes: ["GPS load", "wellness", "gym data", "risk model", "coach call"],
      logs: ["player 7: hamstring load ↑", "risk high → modified session", "✓ injuries -21%"],
    },
    bars: [
      { label: "match-day injuries · before", display: "100%", value: 100, muted: true },
      { label: "with daily risk flags", display: "-21%", value: 79 },
    ],
  },
  "UBF · GRAPH RAG": {
    problem:
      "The foundation could tell donors where their money went, but not what it changed. Grant applications leaned on anecdotes, and funders increasingly asked for evidence.",
    built:
      "We built a graph linking donations to programmes to measured outcomes, covering three years of programme data. Retrieval over the graph writes evidence-backed impact reports and answers grant questions with the specific outcomes linked to each claim.",
    changed:
      "Funding secured rose 40%, and the system was live eight weeks after kick-off.",
    flow: {
      nodes: ["donation", "programme", "outcome data", "impact graph", "grant report"],
      logs: ['grant Q: "evidence of impact?"', "linked: 12 outcomes · 3 years", "✓ funding +40%"],
    },
    bars: [
      { label: "funding secured · before", display: "baseline", value: 60, muted: true },
      { label: "with impact evidence", display: "+40%", value: 84 },
    ],
  },
}

function ProjectModal({ c, onClose }: { c: RecordCase; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const d = projectDetails[c.kicker]
  const tint = TINTS[Math.max(trackRecord.indexOf(c), 0) % 4]

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-ink/25 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
    >
      <div
        className="modal-panel w-full max-w-4xl overflow-hidden rounded-[40px] bg-white shadow-2xl shadow-ink/20 ring-1 ring-ink/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-scroll play max-h-[90vh] overflow-y-auto p-7 md:p-12">
        <div className="flex items-start justify-between gap-6">
          <p className="text-[12px] font-semibold tracking-widest text-soft">{c.kicker}</p>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-[15px] text-soft transition hover:border-accent hover:text-accent"
          >
            ✕
          </button>
        </div>
        <h3 className="mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-[34px] md:leading-[1.15]">{c.title}</h3>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-soft">THE PROBLEM</p>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">{d.problem}</p>
            <p className="mt-6 text-[11px] font-semibold tracking-widest text-soft">SOLUTION</p>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">{d.built}</p>
            <p className="mt-6 text-[11px] font-semibold tracking-widest text-soft">RESULT</p>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">{d.changed}</p>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-5">
              {c.metrics.map((m) => (
                <div key={m.l}>
                  <div className="text-2xl font-semibold tracking-tight whitespace-nowrap">{m.n}</div>
                  <div className="mt-1 text-[10px] font-semibold tracking-widest text-soft">{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={`rounded-2xl p-5 ${tint}`}>
              <p className="text-[10px] font-semibold tracking-widest text-soft">HOW IT RAN</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2.5">
                {d.flow.nodes.map((n, i) => (
                  <span key={n} className="flex items-center gap-2">
                    <span
                      className="node rounded-full border border-accent/40 bg-white px-3 py-1.5 text-[11px] font-semibold tracking-wide text-accentdark"
                      style={{ "--i": i } as React.CSSProperties}
                    >
                      {n}
                    </span>
                    {i < d.flow.nodes.length - 1 && (
                      <span className="seq text-[13px] text-soft/60" style={{ "--i": i } as React.CSSProperties}>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-[#101418] p-4 font-mono text-[12px] leading-6 text-emerald-300/90">
                {d.flow.logs.map((l, i) => (
                  <div
                    key={i}
                    className="seq"
                    style={{ "--i": d.flow.nodes.length * 0.9 + i } as React.CSSProperties}
                  >
                    {l.startsWith("✓") ? <span className="font-semibold text-emerald-300">{l}</span> : l}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 shadow-lg shadow-ink/10 ring-1 ring-ink/10">
              <p className="text-[10px] font-semibold tracking-widest text-soft">BEFORE & AFTER</p>
              <div className="mt-4 space-y-4">
                {d.bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="flex items-baseline justify-between gap-4 text-[11px] font-semibold tracking-wide text-soft">
                      <span>{b.label}</span>
                      <span className="text-[13px] tracking-tight text-ink">{b.display}</span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-ink/5">
                      <div
                        className={`bar-fill h-full rounded-full ${b.muted ? "bg-ink/20" : "bg-accent"}`}
                        style={{ width: `${b.value}%`, "--i": i + 6 } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

function Gallery({ images }: { images: { src: string; caption: string }[] }) {
  const [idx, setIdx] = useState(0)
  const many = images.length > 1
  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-ink/10 ring-1 ring-ink/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[idx].src} alt={images[idx].caption} className="w-full" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="text-[13px] leading-snug text-soft">{images[idx].caption}</p>
        {many && (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setIdx((idx - 1 + images.length) % images.length)}
              aria-label="Previous screen"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-[14px] text-soft transition hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <span className="text-[11px] font-semibold tracking-widest text-soft">
              {idx + 1}/{images.length}
            </span>
            <button
              type="button"
              onClick={() => setIdx((idx + 1) % images.length)}
              aria-label="Next screen"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-[14px] text-soft transition hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ProductModal({ p, onClose }: { p: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-ink/25 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
    >
      <div
        className="modal-panel w-full max-w-5xl overflow-hidden rounded-[40px] bg-white shadow-2xl shadow-ink/20 ring-1 ring-ink/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-scroll max-h-[90vh] overflow-y-auto p-7 md:p-12">
          <div className="flex items-start justify-between gap-6">
            <p className="text-[12px] font-semibold tracking-widest text-soft">
              {p.name.toUpperCase()} · BY {p.company.toUpperCase()}
            </p>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              aria-label="Close"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-[15px] text-soft transition hover:border-accent hover:text-accent"
            >
              ✕
            </button>
          </div>
          <h3 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-[34px] md:leading-[1.15]">
            <span className="text-accentdark">{p.name}</span>: {p.title}
          </h3>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="shrink-0 text-[11px] font-semibold tracking-widest text-accentdark">MY ROLE</span>
            <span className="max-w-xl text-[14px] leading-relaxed text-soft">{p.role}</span>
          </div>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold tracking-widest text-soft">THE PRODUCT</p>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{p.about}</p>
              <p className="mt-6 text-[11px] font-semibold tracking-widest text-soft">TECH INSIDE</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-accent/50 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-widest text-accentdark">
                    {t}
                  </span>
                ))}
              </div>
              {p.clients && (
                <>
                  <p className="mt-6 text-[11px] font-semibold tracking-widest text-soft">DEPLOYED WITH</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.clients.map((t) => (
                      <span key={t} className="rounded-full bg-ink/5 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-widest text-ink/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/10 pt-5">
                {p.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="text-2xl font-semibold tracking-tight whitespace-nowrap">{m.n}</div>
                    <div className="mt-1 text-[10px] font-semibold tracking-widest text-soft">{m.l}</div>
                  </div>
                ))}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-6 py-3 text-[12px] font-semibold tracking-widest text-white transition hover:bg-accentdark"
                >
                  VIEW LIVE
                </a>
              </div>
            </div>

            <div>
              <Gallery images={p.gallery} />
              {p.stats && (
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl bg-white p-5 shadow-lg shadow-ink/10 ring-1 ring-ink/10">
                  {p.stats.map((s) => (
                    <div key={s.l}>
                      <div className="text-xl font-semibold tracking-tight whitespace-nowrap">{s.n}</div>
                      <div className="mt-0.5 text-[10px] font-semibold tracking-widest text-soft">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const tabs = [
  { id: "products", label: "PRODUCTS", heading: "What I've shipped recently" },
  { id: "record", label: "CONSULTING PROJECTS", heading: "Consulting and client projects" },
  { id: "transform", label: "AI TRANSFORMATION & STRATEGY", heading: "How I change the way organisations work" },
  { id: "govern", label: "AI GOVERNANCE", heading: "How I keep AI worth trusting" },
  { id: "research", label: "SCHOLARLY RESEARCH", heading: "Research I've published" },
] as const

type TabId = (typeof tabs)[number]["id"]

/* ---------------- strengths ---------------- */

const strengths = [
  { icon: "🚀", title: "From idea to production", desc: "13 AI products shipped in ten years. I take things past the demo stage, into the hands of real users, with numbers attached." },
  { icon: "🏛️", title: "Trusted with government AI", desc: "At the Dubai Future Foundation I help assess and certify AI solutions for government use, so I know what responsible adoption actually takes." },
  { icon: "🧭", title: "Product & programme in one", desc: "Roadmap, delivery, and the AI inside it. I've led cross-functional teams of up to 38 engineers across three continents." },
  { icon: "🗣️", title: "Arabic-first AI experience", desc: "I've shipped NLP that genuinely understands Arabic, sentiment, dialects and all, across 100+ languages." },
  { icon: "🌱", title: "Teams that outlast me", desc: "I've built AI delivery organisations from scratch three times. The goal is always a team that keeps shipping without me." },
  { icon: "🔬", title: "Grounded in research", desc: "Published in data science and predictive modelling, with an MSc in Computer Science. The craft has foundations." },
]

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

function useReveal(dep: unknown) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    const demos = root.querySelectorAll(".play-on-view")
    const io2 = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("play"), io2.unobserve(e.target))),
      { threshold: 0.25 }
    )
    demos.forEach((el) => io2.observe(el))
    return () => {
      io.disconnect()
      io2.disconnect()
    }
  }, [dep])
  return ref
}

/* ---------------- page ---------------- */

export default function Home() {
  const [line, setLine] = useState(0)
  const [tab, setTab] = useState<TabId>("products")
  const [replay, setReplay] = useState<Record<string, number>>({})
  const [openCase, setOpenCase] = useState<RecordCase | null>(null)
  const [openProduct, setOpenProduct] = useState<Product | null>(null)
  const hoveredRef = useRef<string | null>(null)
  const rootRef = useReveal(tab)

  useEffect(() => {
    const t = setInterval(() => setLine((i) => (i + 1) % heroLines.length), 3600)
    return () => clearInterval(t)
  }, [])

  // deep links: #t/<tab id> opens a tab, #p/<slug> opens a project or product modal
  useEffect(() => {
    const h = decodeURIComponent(window.location.hash)
    const tm = h.match(/^#t\/(\w+)$/)
    const pm = h.match(/^#p\/([\w-]+)$/)
    if (tm && tabs.some((t) => t.id === tm[1])) {
      setTab(tm[1] as TabId)
    } else if (pm) {
      const rc = trackRecord.find((c) => slugify(c.kicker) === pm[1])
      const p = rc ? null : products.find((x) => slugify(x.name) === pm[1])
      if (rc) {
        setTab("record")
        setOpenCase(rc)
      } else if (p) {
        setTab("products")
        setOpenProduct(p)
      } else return
    } else return
    setTimeout(() => document.getElementById("work")?.scrollIntoView(), 150)
  }, [])

  const activeTab = tabs.find((t) => t.id === tab)!
  const demoCases = tab === "transform" ? transformCases : tab === "govern" ? governCases : tab === "research" ? researchCases : null

  return (
    <div ref={rootRef}>
      {/* nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="text-xl font-semibold tracking-tight">
            Kanwal<span className="text-accent"> Aalijah</span>
          </a>
          <nav className="flex items-center gap-6 text-[15px] text-soft">
            <a href="#work" className="transition hover:text-ink">Work</a>
            <a href="#about" className="transition hover:text-ink">About</a>
            <a
              href="https://www.linkedin.com/in/kanwal-aalijah/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold tracking-wide text-white transition hover:bg-accentdark"
            >
              LINKEDIN
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="flex min-h-[78vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-lg text-soft">
            Welcome! I&apos;m Kanwal <span className="sparkle text-accent">✳</span>
          </p>
          <h1
            key={line}
            className="hero-swap mt-5 max-w-3xl text-4xl leading-tight font-medium tracking-tight md:text-6xl"
          >
            {heroLines[line]}
          </h1>
          <p className="mt-8 text-[15px] text-soft">
            AI programme &amp; product leader · Dubai, working worldwide
          </p>
          <a
            href="#work"
            className="mt-10 rounded-full border border-ink/20 px-6 py-2.5 text-[14px] font-semibold tracking-wide transition hover:border-accent hover:text-accent"
          >
            SEE THE WORK ↓
          </a>
        </section>

        {/* get in touch strip */}
        <div className="border-y border-ink/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-[14px] text-soft md:px-10">
            <span className="font-semibold tracking-widest text-ink/70">GET IN TOUCH</span>
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:kanwal.aalijah@gmail.com" className="transition hover:text-accent">✉️ kanwal.aalijah@gmail.com</a>
              <a href="https://www.linkedin.com/in/kanwal-aalijah/" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">💼 LinkedIn</a>
              <span>📍 Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* leadership scope band */}
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4 md:px-10">
            {[
              { n: "13", l: "AI PRODUCTS SHIPPED" },
              { n: "38", l: "ENGINEERS LED AT PEAK" },
              { n: "3", l: "AI TEAMS BUILT FROM SCRATCH" },
              { n: "10+", l: "YEARS SHIPPING AI" },
            ].map((s) => (
              <div key={s.l} className="reveal">
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">{s.n}</div>
                <div className="mt-2 text-[11px] font-semibold tracking-widest text-soft">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* work: tabbed */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="reveal text-center">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-ink/5 p-1.5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`rounded-full px-5 py-2 text-[12px] font-semibold tracking-widest transition ${
                    tab === t.id ? "bg-accent text-white shadow-sm" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <h2 key={tab} className="hero-swap mt-6 text-4xl font-medium tracking-tight md:text-5xl">
              {activeTab.heading}
            </h2>
            {tab === "record" && (
              <p className="mx-auto mt-4 max-w-2xl text-[14px] text-soft">
                Client and consulting engagements from ten years of shipping AI: government, finance,
                retail, health and sport, from Rome to Riyadh to Auckland.
              </p>
            )}
            {tab === "research" && (
              <p className="mt-4 text-[14px] text-soft">
                33 citations · h-index 4 ·{" "}
                <a href="https://scholar.google.com/citations?user=85EOf9sAAAAJ" target="_blank" rel="noopener noreferrer" className="font-semibold text-accentdark underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
                  full profile on Google Scholar
                </a>
              </p>
            )}
          </div>

          {/* products */}
          {tab === "products" && (
            <div className="mt-14 space-y-10">
              {products.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setOpenProduct(c)}
                  className={`group reveal grid cursor-pointer items-center gap-10 rounded-[40px] p-10 text-left transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-900/5 md:p-12 lg:grid-cols-2 ${c.tint}`}
                >
                  <div className={i % 2 ? "lg:order-2" : ""}>
                    <h3 className="text-3xl font-medium tracking-tight md:text-[34px] md:leading-[1.15]">
                      <span className="text-accentdark">{c.name}</span>: {c.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-soft">{c.desc}</p>
                    <div className="mt-4 flex items-baseline gap-3">
                      <span className="shrink-0 text-[11px] font-semibold tracking-widest text-accentdark">MY ROLE</span>
                      <span className="text-[14px] text-soft">{c.role.split(". ")[0].split(" at ")[0].replace(/\.$/, "")}</span>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {c.tags.map((t) => (
                        <span key={t} className="rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-accentdark">{t}</span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6">
                      {c.metrics.map((m) => (
                        <div key={m.l}>
                          <div className="text-3xl font-semibold tracking-tight whitespace-nowrap">{m.n}</div>
                          <div className="mt-1 text-[11px] font-semibold tracking-widest text-soft">{m.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="demo-blink mt-6 text-right text-[11px] font-semibold tracking-widest text-accentdark">
                      DEMO
                    </div>
                  </div>
                  <div className={i % 2 ? "lg:order-1" : ""}>
                    <div className="shot-tilt overflow-hidden rounded-2xl bg-white shadow-lg shadow-ink/10 ring-1 ring-ink/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.img} alt={c.title} className="w-full" loading="lazy" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* track record: compact grid */}
          {tab === "record" && (
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {trackRecord.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setOpenCase(c)}
                  className={`reveal group cursor-pointer rounded-[28px] p-8 text-left transition duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-900/5 ${TINTS[i % 4]}`}
                >
                  <p className="text-[11px] font-semibold tracking-widest text-soft">{c.kicker}</p>
                  <h3 className="mt-2.5 text-[22px] leading-snug font-medium tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-soft">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-4">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-[22px] font-semibold tracking-tight whitespace-nowrap">{m.n}</div>
                        <div className="mt-0.5 text-[10px] font-semibold tracking-widest text-soft">{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="demo-blink mt-5 text-right text-[11px] font-semibold tracking-widest text-accentdark">
                    DEMO
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* transformation & governance: live demos */}
          {demoCases && (
            <div className="mt-14 space-y-10">
              {demoCases.map((c, i) => {
                const Demo = c.demo
                const k = `${tab}-${i}`
                return (
                  <div
                    key={c.title}
                    onMouseEnter={() => {
                      if (hoveredRef.current !== k) {
                        hoveredRef.current = k
                        setReplay((r) => ({ ...r, [k]: (r[k] || 0) + 1 }))
                      }
                    }}
                    onMouseLeave={() => {
                      if (hoveredRef.current === k) hoveredRef.current = null
                    }}
                    className={`play-on-view reveal grid items-center gap-10 rounded-[40px] p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-900/5 md:p-12 lg:grid-cols-2 ${c.tint}`}
                  >
                    <div className={i % 2 ? "lg:order-2" : ""}>
                      <p className="text-[13px] font-semibold tracking-widest text-soft">{c.kicker}</p>
                      <h3 className="mt-3 text-3xl font-medium tracking-tight md:text-[34px] md:leading-[1.15]">{c.title}</h3>
                      <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-soft">{c.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {c.tags.map((t) => (
                          <span key={t} className="rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-accentdark">{t}</span>
                        ))}
                      </div>
                      <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6">
                        {c.metrics.map((m) => (
                          <div key={m.l}>
                            <div className="text-3xl font-semibold tracking-tight whitespace-nowrap">{m.n}</div>
                            <div className="mt-1 text-[11px] font-semibold tracking-widest text-soft">{m.l}</div>
                          </div>
                        ))}
                      </div>
                      {c.url && (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-[12px] font-semibold tracking-widest text-white transition hover:bg-accentdark"
                        >
                          READ PAPER
                        </a>
                      )}
                    </div>
                    <div className={i % 2 ? "lg:order-1" : ""} key={`${k}-${replay[k] || 0}`}>
                      <Demo />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* strengths */}
        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="reveal text-center">
            <span className="inline-block rounded-full bg-ink/5 px-5 py-2 text-[12px] font-semibold tracking-widest text-ink/70">✦ WHY ME</span>
            <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">My key strengths</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title} className="reveal group rounded-[28px] border border-ink/10 bg-white/70 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg hover:shadow-cyan-900/5">
                <div className="text-3xl transition-transform duration-300 group-hover:scale-125">{s.icon}</div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* about */}
        <section id="about" className="mx-auto max-w-3xl px-6 pb-28 text-center md:px-10">
          <div className="reveal">
            <span className="inline-block rounded-full bg-ink/5 px-5 py-2 text-[12px] font-semibold tracking-widest text-ink/70">✦ ABOUT</span>
            <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">A little about me</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-soft">
              I started in data science and have spent the last ten years building AI products
              that are used by people around the world. I have directed multi-million AED product
              portfolios, built AI delivery organisations from scratch three times, and led teams
              of up to 38 engineers across three continents. Today I lead AI programmes at the
              Dubai Future Foundation, inside the Dubai Centre for AI, helping government adopt
              AI responsibly. Along the way I picked up an MSc in Computer Science, an ISO/IEC 42001
              Lead Implementer certification, three AI Innovation Awards, and a soft spot for
              products that quietly work.
            </p>
            <p className="mt-8 text-[15px] text-soft">
              The longer story is on{" "}
              <a href="https://www.linkedin.com/in/kanwal-aalijah/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accentdark underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-[14px] text-soft md:px-10">
          <span className="font-semibold tracking-widest text-ink/70">GET IN TOUCH</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:kanwal.aalijah@gmail.com" className="transition hover:text-accent">✉️ kanwal.aalijah@gmail.com</a>
            <a href="https://www.linkedin.com/in/kanwal-aalijah/" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">💼 LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=85EOf9sAAAAJ" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">🎓 Scholar</a>
            <span>📍 Dubai, UAE</span>
          </div>
          <span className="w-full text-[12px] text-soft/60 md:w-auto">© 2026 Kanwal Aalijah</span>
        </div>
      </footer>

      {openCase && <ProjectModal key={openCase.title} c={openCase} onClose={() => setOpenCase(null)} />}
      {openProduct && <ProductModal key={openProduct.title} p={openProduct} onClose={() => setOpenProduct(null)} />}
    </div>
  )
}
