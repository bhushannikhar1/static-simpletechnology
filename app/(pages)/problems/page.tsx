"use client";

import { useState } from "react";
import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header";
import Link from "next/link";

export default function Problems() {
  const problemList = [
    {
      title: "Why does your business need a digital presence, and how can you start building one?",
      link: "why-build-digital-presence",
      description: "A practical guide to building a digital foundation for your business—from owning a domain and using professional email to creating a website, becoming discoverable online, building trust, and making it easier for customers to connect with you.",
      status: "PUBLISHED",
      tags: ["Digital Presence", "Small Business", "Strategy", "Non-Technical Audience"]
    },
    {
      title: "Why Is Cloud Spending Often Unaccountable in Organizations?",
      link: "cloud-spending-unaccountable",
      description: "An analysis of hidden variables, decentralized provisioning, and why traditional finance structures struggle to track real-time cloud operational expenses.",
      status: "PUBLISHED",
      tags: ["FinOps", "Governance", "Finance"]
    },
    {
      title: "Why Cloud Infrastructure Becomes Inefficient Over Time",
      link: "cloud-infra-inefficient-overtime",
      description: "Exploring the phenomenon of 'cloud drift'—how architectural neglect, legacy migrations, and unmanaged scaling slowly degrade system efficiency.",
      status: "PUBLISHED",
      tags: ["Architecture", "Infrastructure", "Scaling"]
    },
    {
      title: "Why Cloud Optimization Is Not Straightforward",
      link: "cloud-optimization-not-straightforward",
      description: "Why simple cost-cutting exercises fail, and why true cloud efficiency requires balancing performance margins, engineering trade-offs, and software design.",
      status: "PUBLISHED",
      tags: ["FinOps", "Performance", "Optimization"]
    },
    {
      title: "How Organizations Should Approach Cloud Migration",
      link: "approach-cloud-migration",
      description: "A framework for transitioning workloads safely without replicating on-premises operational antipatterns or blowing past initial budgets.",
      status: "PUBLISHED",
      tags: ["Migration", "Strategy", "Operations"]
    },
    {
      title: "Why Go to the Cloud When On-Premises Servers Exist?",
      link: "why-go-cloud",
      description: "A deep dive into the strategic advantages, scaling challenges, and economic realities that drove modern business architectures away from private hardware.",
      status: "PUBLISHED",
      tags: ["Strategy", "Economics", "Infrastructure"]
    },
  ];

  // State to hold user input text
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Break the input string into individual search terms using commas or spaces
  // 2. Filter out empty strings caused by trailing or double punctuation
  const searchTerms = searchQuery
    .split(/[,,]/) // Splits on commas. Switch to /[,\s]+/ if you want space-splitting too
    .map(term => term.trim().toLowerCase())
    .filter(term => term.length > 0);

  // Filters items dynamically based on multi-term search
  const filteredProblems = problemList.filter((item) => {
    // If search box is completely empty, display everything
    if (searchTerms.length === 0) return true;

    // Matches if ANY typed term matches the title, description, or tags (OR Logic)
    // To require matching ALL terms instead, change `.some` below to `.every`
    return searchTerms.some((term) => {
      const matchTitle = item.title.toLowerCase().includes(term);
      const matchDesc = item.description.toLowerCase().includes(term);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(term));

      return matchTitle || matchDesc || matchTags;
    });
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-grow">
        {/* Page Hero Header Zone */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Systemic Problems
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl">
              A collection of architectural breakdowns, financial blindspots, and operational bottlenecks commonly found across modern cloud-native systems.
            </p>
          </div>
        </section>

        {/* Dynamic Search & Content List Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">

            {/* Navigable Control Hub: Sticky Input Shell */}
            <div className="mb-10">
              <div className="relative rounded-2xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  {/* Search Icon */}
                  <svg className="h-5 w-5 text-muted-foreground" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tags using commas (e.g. economics, strategy)..."
                  className="block w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-base placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:text-lg"
                />
              </div>

              {/* Dynamic Status Label */}
              <div className="mt-3 flex items-center justify-between px-1 text-sm text-muted-foreground">
                <span>
                  Showing {filteredProblems.length} of {problemList.length} analysis essays
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-primary hover:underline font-medium text-xs"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            </div>

            {/* Empty State fallback handler */}
            {filteredProblems.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center">
                <svg className="mx-auto h-12 w-12 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-foreground">No matches found</h3>
                <p className="mt-2 text-sm text-muted-foreground">We couldn&apos;t find any engineering breakdown matching &ldquo;{searchQuery}&rdquo;</p>
              </div>
            )}

            {/* List Results Container Layout */}
            <div className="space-y-6">
              {filteredProblems.map((item, index) => (
                <article
                  key={index}
                  className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-md hover:border-muted-foreground/30"
                >
                  <div className="flex flex-col justify-between items-start gap-4">
                    <div className="space-y-3 w-full">
                      {/* Meta Layout Line */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                          {item.status}
                        </span>

                        {/* Render individual tags mapping */}
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Main Navigation Hyperlink Header */}
                      <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                        <Link href={`/problems/${item.link}`} className="focus:outline-none">
                          <span className="absolute inset-0 rounded-2xl" aria-hidden="true" />
                          {item.title}
                        </Link>
                      </h2>

                      {/* Description Body Line Clamp */}
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 md:text-base">
                        {item.description || "Read through our full analytical breakdown, root cause analysis, and remediation strategies for this architectural pattern."}
                      </p>
                    </div>

                    {/* Visual Anchor Indicator for navigation intent */}
                    <div className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline mt-2">
                      Analyze Problem <span>&rarr;</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
