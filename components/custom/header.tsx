"use client"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  X,
  Shield,
  SquareActivity,
  Sparkles,
  Cpu,
  Gem,
  ShoppingBag,
  BookOpen,
  Notebook,
  Croissant,
  Smartphone,
  Rocket,
  Cloud,
  Bot,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { SimpleTechnologyLogo } from "./simple-technology-logo"

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}


const mobileLinks: MobileLink[] = [
  { name: "Problems", href: "/problems" },
  { name: "About Us", href: "/aboutus" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      {...(isScrolled && { "data-scrolled": true })}
      className="fixed inset-x-0 top-0 z-50 has-data-open:h-screen has-data-open:bg-background/50 has-data-open:backdrop-blur"
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-50 h-18 border-transparent ring-1 ring-transparent transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
          "in-data-scrolled:border-b in-data-scrolled:border-foreground/5 in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur",
          "lg:has-data-open:h-[calc(var(--nav-viewport-height,0px)+3.4rem)] lg:has-data-open:border-b lg:has-data-open:bg-card/75 lg:has-data-open:shadow-lg lg:has-data-open:shadow-black/6.5 lg:has-data-open:ring-foreground/5 lg:has-data-open:backdrop-blur",
          "max-lg:h-14 max-lg:overflow-hidden max-lg:border-b max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between lg:py-5">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 hidden h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x opacity-20 in-has-data-open:block"
            />
            <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <SimpleTechnologyLogo   />
              </Link>

              {isLarge && (
                <div className="absolute inset-0 m-auto size-fit">
                  <NavMenu />
                </div>
              )}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                }
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-5 transition-opacity duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 transition-opacity duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              {/*
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  render={<Link href="#">Login</Link>}
                  nativeButton={false}
                  variant="outline"
                  size="sm"
                />
                <Button
                  render={<Link href="#">Get Started</Link>}
                  nativeButton={false}
                  size="sm"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav className="w-full">
      <Accordion className="mt-0.5 space-y-0.5 **:hover:no-underline">
        {mobileLinks.map((link) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={link.groupName}
                value={link.groupName}
                className="group relative before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:border-b before:border-border"
              >
                <AccordionTrigger className="flex items-center justify-between border-b-0 py-3 text-lg font-medium data-open:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature) => (
                      <li key={feature.name}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="grid grid-cols-[auto_1fr] items-center gap-2.5 py-2"
                        >
                          <div
                            aria-hidden
                            className="flex items-center justify-center *:size-4"
                          >
                            {feature.icon}
                          </div>
                          <div className="text-base">{feature.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }
          return null
        })}
      </Accordion>
      {mobileLinks.map((link) => {
        if (link.name && link.href) {
          return (
            <Link
              key={link.name ?? link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative block border-0 border-b py-4 text-lg font-medium"
            >
              {link.name}
            </Link>
          )
        }
        return null
      })}
    </nav>
  )
}

const NavMenu = () => {
  const headerRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    headerRef.current = document.querySelector<HTMLElement>("header")
  }, [])

  const handleValueChange = React.useCallback((value: string) => {
    const header = headerRef.current
    if (!header) return

    if (!value) {
      header.style.removeProperty("--nav-viewport-height")
      return
    }

    const heights: Record<string, number> = {
      product: 280,
      solutions: 220,
    }

    const height = heights[value]
    if (height) {
      header.style.setProperty("--nav-viewport-height", `${height}px`)
    }
  }, [])

  return (
    <NavigationMenu
      onValueChange={handleValueChange}
      className="[--viewport-outer-px:2rem] **:data-[slot=navigation-menu-viewport]:rounded-none **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:bg-transparent **:data-[slot=navigation-menu-viewport]:shadow-none **:data-[slot=navigation-menu-viewport]:ring-0 max-lg:hidden"
    >
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem value="company">
          <NavigationMenuLink
            render={<Link href="/problems">Problems</Link>}
            className={navigationMenuTriggerStyle()}
          />
        </NavigationMenuItem>
        <NavigationMenuItem value="company">
          <NavigationMenuLink
            render={<Link href="/aboutus">About Us</Link>}
            className={navigationMenuTriggerStyle()}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href} className="grid grid-cols-[auto_1fr] gap-2.5">
            <div className="relative flex size-9 items-center justify-center rounded-lg border border-transparent bg-illustration shadow-sm ring-1 ring-foreground/10 *:drop-shadow *:drop-shadow-black/6.5 before:absolute before:inset-0 before:rounded-lg before:bg-radial before:to-foreground/3">
              {children}
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-foreground">{title}</div>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                {description}
              </p>
            </div>
          </Link>
        }
      />
    </li>
  )
}
