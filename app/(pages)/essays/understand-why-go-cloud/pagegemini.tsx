import FooterSection from "@/components/custom/footer";
import { HeroHeader } from "@/components/custom/header2";
import Link from "next/link";
// Import the text from our separate file to prevent code truncation issues
// import { sanitizedEssayContent } from ".essay-content";

export const sanitizedEssayContent = `<article>
<hr>
<p>For many organizations, cloud computing today feels so common that it is often treated as the default way to build and operate modern software systems. New startups frequently begin directly on cloud platforms without ever considering physical infrastructure ownership, while large enterprises continue migrating workloads from traditional data centers into cloud-native environments.</p>
<p>Yet an important foundational question is often overlooked:</p>
<p>Why did organizations move toward cloud infrastructure in the first place when local servers and privately managed data centers already existed?</p>
<p>Understanding this question is important because cloud computing did not emerge merely as a technological trend. It emerged as a response to operational, financial, organizational, and scalability limitations that became increasingly difficult for businesses to manage through traditional infrastructure models.</p>
<p>At the same time, cloud computing should not be viewed as a magical replacement for all infrastructure problems. While cloud platforms solved many constraints associated with traditional infrastructure ownership, they also introduced new operational behaviors, governance challenges, and efficiency problems that organizations continue to struggle with today.</p>
<p>Understanding both sides of this transformation is essential for technical teams, engineering leadership, finance teams, executives, auditors, procurement teams, platform engineering groups, and business stakeholders who influence infrastructure decisions.</p>
<p>Cloud computing is not simply about "servers on the internet." It fundamentally changed how organizations consume, scale, finance, govern, and think about computing resources.</p>

<hr>
<h1 class="text-3xl">Traditional Infrastructure and the Era of Local Servers</h1>
<p>Before large-scale cloud adoption, organizations typically operated applications using physical servers purchased and maintained either within their own facilities or inside rented data centers.</p>
<p>In this model, businesses were responsible for:</p>
<ul>
<li>purchasing hardware,</li>
<li>planning infrastructure capacity,</li>
<li>maintaining networking equipment,</li>
<li>ensuring redundancy,</li>
<li>managing physical security,</li>
<li>replacing failed hardware,</li>
<li>upgrading systems,</li>
<li>operating backup systems,</li>
<li>and maintaining teams capable of managing this infrastructure.</li>
</ul>
<p>For many years, this model worked because software systems were relatively smaller in scale, geographic distribution was limited, and infrastructure growth happened more gradually.</p>
<p>However, as software systems became increasingly internet-driven, globally distributed, and operationally critical, the limitations of traditional infrastructure ownership became more visible.</p>

<hr>
<h1>The Operational Constraints of Traditional Infrastructure</h1>
<p>One of the biggest challenges with physical infrastructure was the requirement to plan infrastructure capacity in advance.</p>
<p>Organizations needed to estimate:</p>
<ul>
<li>expected customer growth,</li>
<li>future traffic,</li>
<li>storage expansion,</li>
<li>compute requirements,</li>
<li>redundancy needs,</li>
<li>and disaster recovery capacity.</li>
</ul>
<p>This planning process was difficult because infrastructure procurement was slow and often expensive.</p>
<p>If organizations underestimated future demand:</p>
<ul>
<li>systems could become overloaded,</li>
<li>applications could slow down,</li>
<li>outages could occur,</li>
<li>and customer experience could degrade.</li>
</ul>
<p>If organizations overestimated demand:</p>
<ul>
<li>expensive infrastructure remained underutilized,</li>
<li>operational costs increased,</li>
<li>and capital became locked into unused capacity.</li>
</ul>
<p>This created a difficult balancing problem between reliability, growth planning, and financial efficiency.</p>
<p>Unlike software, physical infrastructure could not be provisioned instantly. Expanding capacity required:</p>
<ul>
<li>hardware procurement,</li>
<li>delivery timelines,</li>
<li>installation,</li>
<li>networking setup,</li>
<li>compatibility validation,</li>
<li>and operational deployment.</li>
</ul>
<p>As your organization scaled, infrastructure planning itself became a significant operational responsibility.</p>

<hr>
<h1>Hardware Ownership Introduced Continuous Operational Burden</h1>
<p>Owning infrastructure also meant owning operational responsibility.</p>
<p>Physical hardware inevitably experiences failures over long operational timelines:</p>
<ul>
<li>disks fail,</li>
<li>memory modules degrade,</li>
<li>power systems malfunction,</li>
<li>networking equipment becomes unstable,</li>
<li>and hardware generations become obsolete.</li>
</ul>
<p>As a result, organizations needed to continuously maintain:</p>
<ul>
<li>redundancy systems,</li>
<li>failover capacity,</li>
<li>backup infrastructure,</li>
<li>replacement inventory,</li>
<li>monitoring systems,</li>
<li>and specialized operational teams.</li>
</ul>
<p>This operational overhead existed regardless of whether infrastructure utilization remained high or low.</p>
<p>In many cases, businesses needed to maintain excess infrastructure purely to ensure resilience during unexpected failures or traffic spikes. Even if this reserve capacity remained unused for long periods, organizations still carried the financial and operational responsibility for maintaining it.</p>
<p>Infrastructure therefore became not only a technical asset, but also a long-term operational commitment.</p>

<hr>
<h1>Geographic Expansion Was Expensive and Complex</h1>
<p>As businesses became increasingly global, another major limitation emerged.</p>
<p>Applications hosted in a single geographic location often introduced latency for users located far away from that infrastructure. While milliseconds may appear insignificant in isolation, network latency accumulates across user interactions and directly affects:</p>
<ul>
<li>application responsiveness,</li>
<li>customer experience,</li>
<li>platform reliability perception,</li>
<li>and overall product usability.</li>
</ul>
<p>Organizations expanding internationally therefore faced difficult infrastructure decisions.</p>
<p>To improve global user experience, companies often needed to:</p>
<ul>
<li>establish additional data centers,</li>
<li>replicate infrastructure across regions,</li>
<li>maintain regional redundancy,</li>
<li>hire operational teams in multiple locations,</li>
<li>and coordinate infrastructure management globally.</li>
</ul>
<p>This significantly increased operational complexity and capital expenditure.</p>
<p>Infrastructure location could begin influencing business expansion decisions themselves. Organizations sometimes needed to consider proximity to infrastructure availability alongside actual business strategy or market priorities.</p>

<hr>
<h1>Traditional Infrastructure Required Significant Capital Investment</h1>
<p>Physical infrastructure ownership also imposed major financial constraints.</p>
<p>Servers, networking equipment, storage systems, cooling infrastructure, backup systems, and data center operations required large upfront capital expenditure (CAPEX).</p>
<p>This created several challenges:</p>
<ul>
<li>capital became tied to infrastructure instead of business growth,</li>
<li>liquidity reduced,</li>
<li>forecasting became more difficult,</li>
<li>and capital allocation efficiency dropped.</li>
</ul>
</article>`;

type EssayDetail = {
  id: string;
  slug: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  description: string | null;
  content: string | null;
};

type EssayPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EssayDetailPage({ params }: EssayPageProps) {
  const { slug } = await params;
  
  const essay = {
    status: "PUBLISHED",
    description: "An inquiry into the operational shifts, capacity constraints, and financial realities that drove modern business architectures away from private hardware.",
    title: "Understand Why Go Cloud When Local Servers Exist"
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          
          {/* Back Action Navigation Link */}
          <div className="mb-10">
            <Link 
              href="/problems" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <span>&larr;</span> Back to Problems Analysis
            </Link>
          </div>

          {/* Premium Article Header Block */}
          <header className="space-y-4 mb-12 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                {essay.status}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                System Architecture Deep-Dive
              </span>
            </div>
            
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              {essay.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed pt-2">
              {essay.description}
            </p>
          </header>

          {/* Render Content Wrapper using custom Tailwind selectors to perfectly style incoming HTML */}
          <div 
            className="
              max-w-none focus:outline-none text-foreground
              [&_p]:text-base [&_p]:md:text-lg [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_p]:mb-6
              [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-4
              [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_ul]:mb-6 [&_ul]:pl-4
              [&_li]:text-base [&_li]:md:text-lg
              [&_hr]:my-10 [&_hr]:border-border
            "
            dangerouslySetInnerHTML={{ __html: sanitizedEssayContent }}
          />
          
          {/* Post Reading Section Divider Line */}
          <footer className="mt-16 pt-8 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
            <p>End of Analysis</p>
            <Link href="/problems" className="text-primary hover:underline font-medium">
              Browse other systemic challenges &rarr;
            </Link>
          </footer>

        </div>
      </main>

      <FooterSection />
    </div>
  );
}
