import HeroHeader from "@/components/custom/header"

import { Product } from "@/components/illustrations/product"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LogoCloud from "@/components/logo-cloud"



export default function HeroSection() {


  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative bg-background">
          <div className="pt-20 md:pt-28">
            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="relative p-2">
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-between max-md:hidden"
                >
                  <div className="space-y-2 px-12 py-2">
                    <div className="h-2 w-32 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_1.5px,transparent_1.5px,transparent_4px)]" />
                    <div className="h-2 w-20 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_1.5px,transparent_1.5px,transparent_4px)]" />
                  </div>
                  <div className="space-y-2 px-12 py-2">
                    <div className="h-2 w-32 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_1.5px,transparent_1.5px,transparent_4px)]" />
                    <div className="ml-auto h-2 w-20 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_1.5px,transparent_1.5px,transparent_4px)]" />
                  </div>
                </div>

                <div className="mx-auto flex w-fit items-center gap-4">
                  <div
                    aria-hidden
                    className="flex items-center gap-3 max-sm:hidden"
                  >
                    <div className="h-px w-6 bg-border-illustration" />
                    <div className="size-2 rounded-full border border-border-illustration" />

                    <div className="ml-auto h-4 w-6 bg-[repeating-linear-gradient(45deg,var(--color-border-illustration),var(--color-border-illustration)_1px,transparent_1px,transparent_6px)]" />
                  </div>
                  
                  <div
                    aria-hidden
                    className="flex items-center gap-3 max-sm:hidden"
                  >
                    <div className="size-2 rotate-45 border border-border-illustration" />
                    <div className="ml-auto h-4 w-6 bg-[repeating-linear-gradient(0deg,var(--color-border-illustration),var(--color-border-illustration)_1px,transparent_1px,transparent_6px)]" />
                    <div className="h-px w-6 bg-border-illustration" />
                  </div>
                </div>
              </div>
              <div className="mt-6 px-6 text-center *:mx-auto md:mt-10 lg:px-12">
                <h1 className="mb-4 max-w-4xl text-2xl text-balance lg:text-5xl lg:tracking-tight">
                  Understanding why modern technology systems fail — and how trust is designed into them
                </h1>
                <div className="max-w-2xl">
                  <p className="mb-6 text-lg text-balance text-muted-foreground">
                    Simple Technology is an independent writing space focused on cloud systems, security, governance, and architectural decision-making from first principles.
                  </p>
                  <div className="flex items-center justify-between">
                    <div
                      aria-hidden
                      className="flex w-28 scale-85 flex-wrap justify-end gap-2.5 opacity-75"
                    >
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div
                          key={index}
                          aria-hidden
                          className="h-5 w-2.5 max-sm:last:hidden"
                        >
                          <div className="h-1.5 rounded-t-xs bg-card shadow ring-1 ring-foreground/5" />
                          <div className="relative mx-auto h-2 w-2 border-x border-foreground/10 bg-foreground/5" />
                          <div className="h-1.5 rounded-b-xs bg-card shadow ring-1 ring-foreground/5" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button
                        render={<Link href="/problems">Start Reading</Link>}
                        nativeButton={false}
                      />
                    </div>
                    <div
                      aria-hidden
                      className="flex w-28 scale-85 flex-wrap gap-2.5 opacity-75"
                    >
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div
                          key={index}
                          aria-hidden
                          className="h-5 w-2.5 max-sm:last:hidden"
                        >
                          <div className="h-1.5 rounded-t-xs bg-card shadow ring-1 ring-foreground/5" />
                          <div className="relative mx-auto h-2 w-2 border-x border-foreground/10 bg-foreground/5" />
                          <div className="h-1.5 rounded-b-xs bg-card shadow ring-1 ring-foreground/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Product /> */}

            {/* <LogoCloud /> */}
          </div>
        </section>
      </main>
    </>
  )
}
