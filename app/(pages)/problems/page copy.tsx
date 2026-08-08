import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header"
import Link from "next/link";
export default function Problems() {
  // const problemList = [
  //   "Why is cloud spending often unaccountable in organizations?",
  //   "Why Cloud Infrastructure turns inefficient overtime",
  //   "Why Cloud Optimization Is Not Straight Forward",
  //   "How Organizations Should Approach Cloud Migration",
  //   "Why Go Cloud When Local Servers Exist?",
  // ];

  const problemList = [
    { title: "Why Is Cloud Spending Often Unaccountable in Organizations?", link: "cloud-spending-unaccountable", description: "", status: "PUBLISHED" },
    { title: "Why Cloud Infrastructure Becomes Inefficient Over Time", link: "cloud-infra-inefficient-overtime" , description: "" , status: "PUBLISHED" },
    { title: "Why Cloud Optimization Is Not Straightforward", link: "cloud-optimization-not-straightforward" , description: "" , status: "PUBLISHED" },
    { title: "How Organizations Should Approach Cloud Migration", link: "approach-cloud-migration" , description: "" , status: "PUBLISHED" },
    { title: "Why Go to the Cloud When On-Premises Servers Exist?", link: "why-go-cloud" , description: "" , status: "PUBLISHED" },
  ];
  return (
    <div>
      <main>
        <HeroHeader />
        <section className="relative bg-background">
          <div className="pt-20 md:pt-28">
            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="relative p-2">
                <h1 className="text-balance px-10 text-4xl font-light tracking-tight text-foreground md:text-5xl">Problems</h1>

                <div className="mt-8 space-y-4 px-10">
                  {problemList.map((item, index) => (
                                        // <div key={index} className="rounded-xl border border-border bg-card p-5">
                                        <div>
                                            {/* <h3 className="text-base font-semibold text-foreground"> */}
                                                <h3 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-2xl">
                                                <Link href={`/problems/${item.link}`} className="transition-colors hover:text-primary">
                                                    {item.title}
                                                </Link>    
                                                </h3>
                                                {/* <Link href={`/essays/${essayLink.essay.slug}`} className="transition-colors hover:text-primary">
                                                    {essayLink.essay.title}
                                                </Link> */}
                                            {/* </h3> */}
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                {item.description ? item.description : ""}
                                            </p>
                                            <p className="mt-3 text-xs text-muted-foreground">
                                                {/* {item.status • {new Date({item.createdAt).toLocaleDateString()} */}
                                            </p>
                                        </div>
                                    ))}
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection></FooterSection>
    </div>
  );
}
