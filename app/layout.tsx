import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kanwal Aalijah",
  description:
    "AI programme and product leader in Dubai. Ten years taking AI from idea to products people actually use — for governments, global brands, and startups.",
  metadataBase: new URL("https://www.kanwalaalijah.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kanwal Aalijah",
    description:
      "AI programme and product leader. Ten years taking AI from idea to products people actually use.",
    url: "https://www.kanwalaalijah.com",
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.kanwalaalijah.com/#kanwal",
  name: "Kanwal Aalijah",
  jobTitle: "AI Programme & Product Leader",
  description:
    "AI programme and product leader with 10+ years shipping AI products for governments and enterprises. Programme Manager for AI at the Dubai Future Foundation. Founder of kan.consulting.",
  email: "mailto:kanwal.aalijah@gmail.com",
  url: "https://www.kanwalaalijah.com",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  worksFor: { "@type": "Organization", name: "Dubai Future Foundation" },
  founderOf: {
    "@type": "ProfessionalService",
    "@id": "https://kan.consulting/#service",
    name: "kan.consulting",
    url: "https://kan.consulting",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "National University of Sciences and Technology (NUST)" },
    { "@type": "CollegeOrUniversity", name: "National University of Computer and Emerging Sciences (FAST)" },
  ],
  knowsAbout: [
    "AI product management",
    "AI programme management",
    "AI governance",
    "ISO/IEC 42001",
    "Generative AI",
    "Arabic NLP",
    "Agentic workflows",
  ],
  sameAs: [
    "https://www.linkedin.com/in/kanwal-aalijah",
    "https://x.com/AalijahKanwal",
    "https://scholar.google.com/citations?user=85EOf9sAAAAJ",
    "https://github.com/KanwalAalijah",
    "https://kan.consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* large-monitor scaling via JS: Lightning CSS strips the `zoom` property from globals.css */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function z(){var w=window.innerWidth;var v=w>=2800?1.75:w>=2100?1.45:w>=1680?1.2:1;document.body.style.zoom=v===1?"":String(v)}window.addEventListener("resize",z);z()})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
