import { cn } from "@/lib/utils";
import { SimpleTechnologyLogo } from "./simple-technology-logo";

export default function AboutSection() {
  // Shared class for all body paragraphs to ensure perfect consistency
  const bodyTextClass = "mb-6 text-lg text-muted-foreground font-normal leading-relaxed";

  return (
    <section className="dark:bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-none">
          <h1 className="text-balance text-5xl font-light tracking-tight text-foreground md:text-7xl mb-12">
            About <SimpleTechnologyLogo />
          </h1>

          {/* Intro Paragraph */}
          <p className={bodyTextClass}>
            Simple Technology exists to examine why modern technology systems fail
            even when they appear correct, compliant, and well engineered.
          </p>

          <p className={bodyTextClass}>
            Most failures are not caused by missing tools or lack of expertise.
            They emerge from broken assumptions, unclear trust boundaries,
            and poor system-level decision making.
          </p>

          <blockquote className="border-l border-primary/50 pl-6 italic my-12 text-xl md:text-2xl text-foreground/90 font-light tracking-tight">
            "Technology problems are rarely technical. They are structural."
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-16 mb-6 text-foreground text-balance">
            What this site is (and is not)
          </h2>

          <p className={bodyTextClass}>
            This site is a long-form writing and diagnostics space.
            It focuses on cloud systems, security, identity, governance,
            and architectural trade-offs from first principles.
          </p>

          <p className={bodyTextClass}>
            It is not a tutorial blog, a news feed, or a marketing channel.
            Writing here is intentionally slow, opinionated,
            and unconcerned with popularity.
          </p>

          <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-16 mb-6 text-foreground text-balance">
            Independence by design
          </h2>

          <p className={bodyTextClass}>
            The ideas published on Simple Technology are exploratory
            and unconstrained by delivery commitments or client outcomes.
            They are written to surface uncomfortable truths,
            not to sell solutions.
          </p>

          <p className={bodyTextClass}>
            Some of these ideas later mature into formal resolution frameworks.
            Those frameworks are implemented separately.
          </p>
          
          <div className="p-4 rounded-md border border-border text-sm text-muted-foreground italic mb-10 font-normal">
            Organizational resolution work based on these ideas is executed by{" "}
            <a 
              href="https://syntropicbusinesssolution.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              Syntropic Solution
            </a>.
          </div>
          {/* --- END RESTORED TEXT --- */}
          

          <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-16 mb-6 text-foreground text-balance">
            About the author
          </h2>

          <p className={bodyTextClass}>
            Simple Technology is written and maintained by Bhushan Nikhar,
            a systems architect working across cloud platforms,
            identity systems, and large-scale technology environments.
          </p>

          <p className={bodyTextClass}>
            The focus of the work is not tooling expertise,
            but understanding how trust, responsibility,
            and accountability are encoded into systems.
          </p>
        </div>
      </div>
    </section>
  );
}
