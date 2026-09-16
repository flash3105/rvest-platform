"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Warehouse,
  Truck,
  Users,
  MessageCircle,
  NotebookPen,
  Table2,
  FileCheck2,
} from "lucide-react";

const INK = "#0B2A43";
const INK_SOFT = "#51697C";
const PAPER = "#F6FBFC";
const PAPER_LINE = "#DCE8EC";
const STAMP = "#0E8A97";
const ROUTE = "#0B2A43";

export default function Home() {
  const [reconciled, setReconciled] = useState(false);

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: PAPER, color: INK }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;500;600;700&family=Public+Sans:wght@400;500;600&family=Caveat:wght@500;600&display=swap");
        .font-display {
          font-family: "Zilla Slab", serif;
        }
        .font-body {
          font-family: "Public Sans", sans-serif;
        }
        .font-hand {
          font-family: "Caveat", cursive;
        }
        .stamp {
          font-family: "Zilla Slab", serif;
          letter-spacing: 0.08em;
          transform: rotate(-7deg);
          border: 3px solid ${STAMP};
          color: ${STAMP};
        }
      `}</style>

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: PAPER, borderColor: PAPER_LINE }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image src="/logo.jpeg" alt="Rvest" fill className="object-contain" unoptimized />
              </div>
              <div className="leading-tight">
                <p className="font-display font-semibold text-lg" style={{ color: INK }}>
                  Rvest Fund Group
                </p>
                <p className="text-xs" style={{ color: INK_SOFT }}>
                  Consulting &amp; Analytics
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#problem" className="hover:underline underline-offset-4" style={{ color: INK_SOFT }}>
                Where it breaks
              </a>
              <a href="#solution" className="hover:underline underline-offset-4" style={{ color: INK_SOFT }}>
                How we fix it
              </a>
              <a href="#apps" className="hover:underline underline-offset-4" style={{ color: INK_SOFT }}>
                Apps
              </a>
            </div>
            <a
              href="#apps"
              className="px-4 py-2 text-sm font-medium rounded-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors"
              style={{ backgroundColor: INK }}
            >
              Get started with your apps
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight" style={{ color: INK }}>
            Your numbers don&apos;t agree with each other yet.
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: INK_SOFT }}>
             We build the apps your business runs on day to day — invoicing,
            stock, project tracking — so the work holds together on its own,
            instead of living across a notebook, a spreadsheet, and someone&apos;s
            memory.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#apps"
              className="px-6 py-3 rounded-sm text-white font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: STAMP }}
            >
              Get started with your apps
            </a>
            <p className="text-sm max-w-[220px]" style={{ color: INK_SOFT }}>
              Works with what you already use — your point-of-sale, delivery and spreadsheets, connected.
            </p>
          </div>
        </div>

        {/* Interactive centerpiece: reconciliation widget */}
        <div
          className="rounded-sm border p-6"
          style={{ backgroundColor: "#FFFFFF", borderColor: PAPER_LINE }}
        >
          <p className="text-xs mb-4" style={{ color: INK_SOFT }}>
            Tuesday, 14:20 — one shelf, three counts
          </p>

          <div className="relative min-h-[220px]">
            {/* Chaos state */}
            <div
              className={`grid gap-3 transition-all duration-500 ${
                reconciled ? "opacity-0 -translate-y-2 pointer-events-none absolute inset-0" : "opacity-100"
              }`}
            >
              <div className="flex items-start gap-3 rounded-2xl rounded-tl-sm px-4 py-3 bg-[#DCF1F0] max-w-[85%]">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#0E6B74" }} />
                <p className="text-sm" style={{ color: "#0C4A50" }}>
                  Aisle 4 restocked, maybe 40ish? 🤷
                </p>
              </div>
              <div className="flex items-start gap-3 px-4 py-3 bg-[#F4EFDD] max-w-[85%] ml-auto -rotate-1 shadow-sm">
                <NotebookPen className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#7A6A2E" }} />
                <p className="font-hand text-xl leading-none" style={{ color: "#4A3F14" }}>
                  42, counted twice — Sipho
                </p>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 border font-mono text-sm max-w-[85%]" style={{ borderColor: PAPER_LINE, color: INK }}>
                <Table2 className="w-4 h-4 shrink-0" style={{ color: INK_SOFT }} />
                <span>B4 = 40+2 → 42</span>
              </div>
            </div>

            {/* Reconciled state */}
            <div
              className={`transition-all duration-500 ${
                reconciled ? "opacity-100" : "opacity-0 translate-y-2 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: PAPER_LINE }}>
                <div className="flex items-center gap-3">
                  <FileCheck2 className="w-5 h-5" style={{ color: STAMP }} />
                  <div>
                    <p className="font-medium">Aisle 4 — 42 units on shelf</p>
                    <p className="text-xs" style={{ color: INK_SOFT }}>
                      Logged once, 14:22. Every branch sees this same row.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <span className="stamp px-4 py-1 text-lg font-semibold inline-block">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setReconciled((v) => !v)}
              className="px-5 py-2.5 rounded-sm text-sm font-medium border focus-visible:outline focus-visible:outline-2"
              style={{
                backgroundColor: reconciled ? "transparent" : INK,
                color: reconciled ? INK : "white",
                borderColor: INK,
              }}
            >
              {reconciled ? "Show the chaos again" : "Reconcile"}
            </button>
          </div>
        </div>
      </section>

      {/* Problem section — ledger rows, not a card grid */}
      <section id="problem" className="border-t" style={{ borderColor: PAPER_LINE }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl font-semibold" style={{ color: INK }}>
            Where the count stops matching
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: INK_SOFT }}>
            Every growing operation hits the same wall — it just shows up in different
            handwriting depending on the site.
          </p>

          <div className="mt-12 divide-y" style={{ borderColor: PAPER_LINE }}>
            {[
              {
                icon: Warehouse,
                title: "The stockroom and the spreadsheet disagree",
                body: "Someone counts on paper, someone else types it up later, and by the time head office sees a figure, it's already a memory of a memory.",
              },
              {
                icon: Truck,
                title: "Routes are planned by whoever remembers the roads",
                body: "Fuel and driver hours are usually the second-biggest cost after wages, and they're still set by habit rather than by the shortest path between today's actual stops.",
              },
              {
                icon: Users,
                title: "Every new branch means another person just for admin",
                body: "The paperwork that worked for one site doesn't shrink when you open a second and a third — it multiplies, and so does the headcount needed to chase it.",
              },
            ].map((item, i) => (
              <div key={i} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <item.icon className="w-6 h-6 shrink-0 mt-1" style={{ color: STAMP }} />
                <div>
                  <h3 className="font-display text-xl font-medium" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl" style={{ color: INK_SOFT }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution — the actual apps, and where each one stands */}
      <section id="solution" style={{ backgroundColor: "#EFF7F8" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <div>
            <h2 className="font-display text-3xl font-semibold" style={{ color: INK }}>
              The apps, and where each one stands
            </h2>
            <p className="mt-3 max-w-xl" style={{ color: INK_SOFT }}>
              Not concepts — these are the actual systems we build and connect for
              you, each one handling a piece of the day-to-day so the business runs
              on its own instead of depending on someone remembering to follow up.
            </p>
          </div>

          <div className="divide-y" style={{ borderColor: PAPER_LINE }}>
            {[
              {
                status: "Live",
                statusColor: STAMP,
                title: "Invoicing",
                body: "Every invoice looks the same and goes out the same way, and you can see at a glance who still owes you — instead of hunting through a notebook or a folder of half-finished quotes.",
              },
              {
                status: "Live",
                statusColor: STAMP,
                title: "Inventory management",
                body: "Every branch counts stock the same way, into the same place, so the number on your screen is the number actually sitting on the shelf.",
              },
              {
                status: "Building",
                statusColor: ROUTE,
                title: "Project tracking",
                body: "Work assigned, tracked, and closed out in one place, so a job's status doesn't live only in someone's head or a WhatsApp thread.",
              },
              {
                status: "Roadmap",
                statusColor: INK_SOFT,
                title: "One system, end to end",
                body: "Once invoicing, stock, and project tracking are already talking to each other, we bring them into a single system that runs the whole operation — the direction all of this is building toward.",
              },
            ].map((item, i) => (
              <div key={i} className="py-6 grid sm:grid-cols-[110px_1fr] gap-2 sm:gap-8">
                <span
                  className="text-sm font-medium h-fit"
                  style={{ color: item.statusColor }}
                >
                  {item.status}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl" style={{ color: INK_SOFT }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps CTA */}
      <section id="apps" style={{ backgroundColor: INK }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-white">
            Your day-to-day already runs on these apps. We connect them.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#C7CDD4" }}>
            Invoicing, stock, and project tracking — the tools you&apos;re
            already using to run the business, brought into one place. The goal
            isn&apos;t more software to manage — it&apos;s a business that runs
            its own day-to-day, without you holding it together by hand.
          </p>
          <a
            href="mailto:info@rvestfundgroup.co.za"
            className="mt-8 inline-block px-8 py-4 rounded-sm text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: STAMP, color: "white" }}
          >
            Connect your apps
          </a>
          <p className="mt-4 text-sm" style={{ color: "#8FA2B0" }}>
            info@rvestfundgroup.co.za
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t" style={{ borderColor: PAPER_LINE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-4 opacity-70">
            <div className="relative w-12 h-12">
              <Image src="/logo.jpeg" alt="Rvest" fill className="object-contain" unoptimized/>
            </div>
          </div>
          <p className="font-display italic" style={{ color: INK }}>
            Invest for a better future
          </p>
          <p className="mt-3 text-sm" style={{ color: INK_SOFT }}>
            © {new Date().getFullYear()} Rvest Consulting &amp; Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}