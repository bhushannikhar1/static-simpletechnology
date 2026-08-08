import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header"
import Link from "next/link";
export default function Problems() {


  const essayList = [
    { title: "Understand Why Go Cloud When Local Servers Exist", link: "understand-why-go-cloud", description: "" },
  ];

  return (
    <div>
      <main>
        <HeroHeader />
        <section className="relative bg-background">
          <div className="pt-20 md:pt-28">
            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="relative p-2">
                <div className="mt-8 space-y-4 px-10">
                  <h1 className="text-balance px-10 text-4xl font-light tracking-tight text-foreground md:text-5xl">
                    Why Go Cloud When Local Servers Exist?
                  </h1>
                  <p>
                    Why did organizations move toward cloud infrastructure when local servers and privately managed data centers already existed?
                  </p>
                  <h1 className="text-balance px-10 text-2xl font-light tracking-tight text-foreground md:text-2xl">
                    Essays
                  </h1>

                  {essayList.map((item, index) => (
                    <div key={index} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-2xl">
                        <Link href={`/essays/${item.link}`} className="transition-colors hover:text-primary">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description ? item.description : ""}
                      </p>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {/* {item.status • {new Date({item.createdAt).toLocaleDateString()} */}
                      </p>
                    </div>
                    // <p>
                    //   <a href={`/essays/${item.link}`}
                    //     key={index}
                    //     className="text-base font-light tracking-tight text-foreground"
                    //   >
                    //     {item.title}
                    //   </a>
                    // </p>
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
