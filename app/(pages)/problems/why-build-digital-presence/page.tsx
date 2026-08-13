"use client";

import { useState } from "react";
import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header";
import Link from "next/link";

export default function Problems() {
  const essayList = [
    {
      title: "Your Business Needs a Digital Front Door",
      link: "setup-digital-presence",
      description:
        "A practical guide for business owners who have little or no digital presence—from registering a domain and professional email to building a website, appearing on maps, and turning the internet into another way to find and serve customers.",
      tags: ["Digital Presence", "Small Business", "Strategy", "Non-Technical Audience"],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const searchTerms = searchQuery
    .split(",")
    .map((term) => term.trim().toLowerCase())
    .filter((term) => term.length > 0);

  const filteredEssays = essayList.filter((item) => {
    if (searchTerms.length === 0) return true;

    return searchTerms.some((term) => {
      const matchTitle = item.title.toLowerCase().includes(term);
      const matchDesc = item.description.toLowerCase().includes(term);

      const matchTags = item.tags
        ? item.tags.some((tag) => tag.toLowerCase().includes(term))
        : false;

      return matchTitle || matchDesc || matchTags;
    });
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-grow">

        {/* ================================================================
            PROBLEM HEADER
        ================================================================= */}

        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 md:py-24">

            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {/* Problem */}
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Why does your business need a digital presence, and how can you start building one?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 tracking-[-0.015em] text-muted-foreground md:text-xl">
              Many businesses operate successfully in the physical world but
              have little or no meaningful presence online. Customers may
              struggle to find them, understand what they offer, verify that
              they are legitimate, or contact them easily.
            </p>

            {/* <div className="mt-7 flex flex-wrap gap-2">
              {["Digital Presence", "Small Business", "Strategy", "Non-Technical Audience"
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div> */}

          </div>
        </section>

        {/* ================================================================
            SEARCH + ESSAYS
        ================================================================= */}

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">

            {/* Search */}
            <div className="mb-12">

              <div className="relative">

                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search essays by title, description, or tags..."
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-border
                    bg-card
                    py-4
                    pl-12
                    pr-4
                    text-base
                    text-foreground
                    placeholder:text-muted-foreground
                    shadow-sm
                    transition-all
                    focus:border-primary
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/20
                    md:text-lg
                  "
                />

              </div>

              {/* Search information */}
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-muted-foreground">

                <span>
                  Showing {filteredEssays.length} of {essayList.length} essays
                </span>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="font-medium text-primary hover:underline"
                  >
                    Clear search
                  </button>
                )}

              </div>

            </div>

            {/* ============================================================
                ESSAY HEADER
            ============================================================= */}

            <div className="mb-7 border-b border-border pb-4">

              <div className="flex items-end justify-between gap-4">

                <h2 className="text-2xl font-semibold tracking-[-0.025em]">
                  Featured Essays
                </h2>

                {/* <span className="hidden text-xs text-muted-foreground sm:block">
                  Practical solutions
                </span> */}

              </div>

            </div>

            {/* ============================================================
                EMPTY STATE
            ============================================================= */}

            {filteredEssays.length === 0 ? (
              <div className="my-6 rounded-xl border border-dashed border-border p-12 text-center">

                <svg
                  className="mx-auto h-10 w-10 text-muted-foreground/60"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>

                <h3 className="mt-4 text-sm font-semibold">
                  No essays found
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Try searching for a different topic, keyword, or tag.
                </p>

              </div>
            ) : (

              /* ============================================================
                 ESSAY LIST
              ============================================================= */

              <div className="space-y-5">

                {filteredEssays.map((item, index) => (

                  <article
                    key={index}
                    className="
                      group
                      relative
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-6
                      transition-all
                      duration-200
                      hover:border-muted-foreground/30
                      hover:shadow-md
                      md:p-7
                    "
                  >

                    {/* Tags */}

                    <div className="mb-4 flex flex-wrap gap-2">

                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            inline-flex
                            items-center
                            rounded-md
                            border
                            border-border
                            bg-muted
                            px-2
                            py-1
                            text-[10px]
                            font-medium
                            tracking-wide
                            text-muted-foreground
                          "
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    {/* Essay title */}

                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-[-0.025em]
                        transition-colors
                        group-hover:text-primary
                        md:text-2xl
                      "
                    >
                      <Link
                        href={`/essays/${item.link}`}
                        className="focus:outline-none"
                      >
                        <span
                          className="absolute inset-0 rounded-xl"
                          aria-hidden="true"
                        />

                        {item.title}
                      </Link>
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        max-w-3xl
                        text-sm
                        leading-7
                        text-muted-foreground
                        md:text-[15px]
                      "
                    >
                      {item.description}
                    </p>

                    {/* Read link */}

                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                      Read essay
                      <span
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </div>

                  </article>

                ))}

              </div>

            )}

          </div>
        </section>

      </main>

      <FooterSection />
    </div>
  );
}