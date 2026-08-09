"use client";

import { useState } from "react";
import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header";
import Link from "next/link";

export default function Problems() {
  const essayList = [
    { 
      title: "Understand Why Most Cloud Infrastructure Becomes Inefficient Over Time", 
      link: "understand-why-most-cloud-infrastructure-become-inefficient-overtime", 
      description: "An evaluation of technical drift, configuration variance, and the operational side effects of rapid feature deployment models.",
      tags: ["Infrastructure", "Scaling"]
    },
    { 
      title: "The Architecture Decisions That Create Long-Term Cloud Waste", 
      link: "cloud-architecture-and-waste", 
      description: "How structural patterns chosen during initial design stages unintentionally turn into hard-to-remediate financial bottlenecks over time.",
      tags: ["Architecture", "Scaling"]
    },
  ];

  // State to hold user input text
  const [searchQuery, setSearchQuery] = useState("");

  // Parse the search input into distinct lowercase terms split by commas
  const searchTerms = searchQuery
    .split(",")
    .map(term => term.trim().toLowerCase())
    .filter(term => term.length > 0);

  // Filters items dynamically based on multi-term search matching (OR logic)
  const filteredEssays = essayList.filter((item) => {
    // If search box is completely empty, display all items
    if (searchTerms.length === 0) return true;

    // Returns true if ANY typed term matches the title, description, or tags
    return searchTerms.some((term) => {
      const matchTitle = item.title.toLowerCase().includes(term);
      const matchDesc = item.description.toLowerCase().includes(term);
      const matchTags = item.tags ? item.tags.some(tag => tag.toLowerCase().includes(term)) : false;
      
      return matchTitle || matchDesc || matchTags;
    });
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Why Cloud Infrastructure turns inefficient overtime
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl">
              Why infrastructure turns inefficient overtime
            </p>
          </div>
        </section>

        {/* Dynamic Search & Content List Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            
            {/* Navigable Control Hub: Search Input Box */}
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
                  placeholder="Search by title, description, or tags using commas (e.g. infrastructure, scaling)..."
                  className="block w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-base placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:text-lg"
                />
              </div>
              
              {/* Dynamic Status Label */}
              <div className="mt-3 flex items-center justify-between px-1 text-sm text-muted-foreground">
                <span>
                  Showing {filteredEssays.length} of {essayList.length} featured essays
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

            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-4 mb-8">
              Featured Essays
            </h2>

            {/* Empty State fallback handler */}
            {filteredEssays.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center my-6">
                <svg className="mx-auto h-12 w-12 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-foreground">No matches found</h3>
                <p className="mt-2 text-sm text-muted-foreground">We couldn&apos;t find any essays matching &ldquo;{searchQuery}&rdquo;</p>
              </div>
            )}

            {/* List Results Container Layout */}
            <div className="space-y-6">
              {filteredEssays.map((item, index) => (
                <article 
                  key={index} 
                  className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-muted-foreground/30"
                >
                  <div className="flex flex-col justify-between items-start gap-4">
                    <div className="space-y-3 w-full">
                      
                      {/* Render individual tags mapping */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {item.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx} 
                              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        <Link href={`/essays/${item.link}`} className="focus:outline-none">
                          <span className="absolute inset-0 rounded-2xl" aria-hidden="true" />
                          {item.title}
                        </Link>
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {item.description || "Click to read the full analysis on this architectural transition."}
                      </p>
                    </div>
                    
                    <div className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline">
                      Read essay <span>&rarr;</span>
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
