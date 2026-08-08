import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header";
import Link from "next/link";

export default function Problems() {
  const essayList = [
    { 
      title: "Understand Why Go Cloud When Local Servers Exist", 
      link: "understand-why-go-cloud", 
      description: "A deep dive into the strategic advantages, hidden costs, and operational trade-offs between modern cloud infrastructure and traditional local server deployments." 
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Why Go Cloud When Local Servers Exist?
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl">
              Exploring the technical shifts, scaling challenges, and economic realities that drove organizations away from private data centers toward cloud infrastructure.
            </p>
          </div>
        </section>

        {/* Essays List Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-4 mb-8">
              Featured Essays
            </h2>

            <div className="space-y-6">
              {essayList.map((item, index) => (
                <article 
                  key={index} 
                  className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-muted-foreground/30"
                >
                  <div className="flex flex-col justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        <Link href={`/essays/${item.link}`} className="focus:outline-none">
                          {/* Extending click target to the whole card for better UX */}
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
