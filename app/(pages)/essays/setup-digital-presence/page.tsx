"use client";

import FooterSection from "@/components/custom/footer";
import HeroHeader from "@/components/custom/header";
import Link from "next/link";

export default function Problems() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-grow">
        {/* Article Header */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">

            {/* Published */}
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Published
            </div>

            {/* Title */}
            <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Your Business Needs a Digital Front Door
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 tracking-[-0.015em] text-muted-foreground md:text-xl">
              A practical guide for business owners who have little or no
              digital presence—from registering a domain and professional
              email to building a website, appearing on maps, and turning
              the internet into another way to find and serve customers.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["Digital Presence", "Small Business", "Strategy", "Non-Technical Audience"
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">

          <div className="border-t border-border pt-10 md:pt-12">

            {/* Section */}
            <section>
              <ArticleHeading>
                The Problem: Your Business Exists, but the Internet May Not Know It
              </ArticleHeading>

              <ArticleParagraph>
                For many small and growing businesses, the physical business
                exists long before the digital business does.
              </ArticleParagraph>

              <ArticleParagraph>
                You may have a good product, loyal customers, a shop, an
                office, a service team, or years of experience. But when
                someone searches for your business online, they may find
                almost nothing—or perhaps only a social media profile, an
                old directory listing, or a personal email address.
              </ArticleParagraph>

              <ArticleParagraph>
                That is a missed opportunity.
              </ArticleParagraph>

              <ArticleParagraph>
                Today, your online presence is not necessarily about becoming
                a technology company. It is about making your business{" "}
                <strong className="font-semibold text-foreground">
                  easy to find, easy to trust, and easy to contact.
                </strong>
              </ArticleParagraph>

              <ArticleParagraph>
                The good news is that you do not need to understand
                technology to create a professional digital presence. You
                simply need to build a few basic pieces in the right order.
              </ArticleParagraph>
            </section>

            {/* Domain */}
            <section>
              <ArticleHeading>Start With Your Own Domain Name</ArticleHeading>

              <ArticleParagraph>
                The first step is to register a{" "}
                <strong className="font-semibold text-foreground">
                  domain name
                </strong>{" "}
                for your business.
              </ArticleParagraph>

              <ArticleParagraph>
                A domain is simply your business&apos;s address on the
                internet.
              </ArticleParagraph>

              <QuoteBox>yourbusiness.com</QuoteBox>

              <ArticleParagraph>
                Instead of telling customers to search for you, you can give
                them a simple address that belongs to your business.
              </ArticleParagraph>

              <ArticleParagraph>
                Try to choose a domain that is:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Easy to remember",
                  "Easy to spell",
                  "Close to your actual business name",
                  "Short enough to type easily",
                  "Appropriate for the markets you serve",
                ]}
              />

              <ArticleParagraph>
                If your preferred <strong>.com</strong> name is available, it
                is often a good choice. Depending on your business and
                country, other extensions can also make sense.
              </ArticleParagraph>

              <ArticleParagraph>
                The important point is that{" "}
                <strong className="font-semibold text-foreground">
                  your domain should belong to your business.
                </strong>
              </ArticleParagraph>

              <ArticleParagraph>
                Do not build your entire digital identity around a free
                social-media page or an email address that belongs to
                someone else. Social platforms can change their rules, but
                your domain gives you an online identity that you control.
              </ArticleParagraph>
            </section>

            {/* Professional Email */}
            <section>
              <ArticleHeading>
                Use a Professional Email Address
              </ArticleHeading>

              <ArticleParagraph>
                Once you own the domain, the next step is to create
                professional email addresses.
              </ArticleParagraph>

              <ArticleParagraph>
                Instead of:
              </ArticleParagraph>

              <QuoteBox>yourbusiness@gmail.com</QuoteBox>

              <ArticleParagraph>You can use:</ArticleParagraph>

              <QuoteBox>hello@yourbusiness.com</QuoteBox>

              <ArticleParagraph>
                You could also create addresses such as{" "}
                <strong>sales@yourbusiness.com</strong>,{" "}
                <strong>info@yourbusiness.com</strong>, or{" "}
                <strong>support@yourbusiness.com</strong>.
              </ArticleParagraph>

              <ArticleParagraph>
                This small change can make a significant difference in how
                customers perceive your business.
              </ArticleParagraph>

              <ArticleParagraph>
                Imagine two companies sending you quotations. One sends an
                email from a free personal email account. The other sends an
                email from{" "}
                <strong>sales@companyname.com</strong>. The second business
                immediately looks more established.
              </ArticleParagraph>

              <ArticleParagraph>
                A professional email address also makes it easier to
                organize your business communication. You can have separate
                addresses for sales, support, accounts, recruitment, or
                general enquiries without creating separate businesses.
              </ArticleParagraph>
            </section>

            {/* Website */}
            <section>
              <ArticleHeading>Create a Simple Website</ArticleHeading>

              <ArticleParagraph>
                After your domain and email are ready, create a website.
              </ArticleParagraph>

              <ArticleParagraph>
                Your website does not need to be complicated.
              </ArticleParagraph>

              <ArticleParagraph>
                A small business may need only a few pages:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Home — What does your business do?",
                  "About — Who are you and why should customers trust you?",
                  "Products or Services — What exactly do you offer?",
                  "Contact — How can customers reach you?",
                  "Location — Where can customers find you, if you have a physical location?",
                  "Enquiry / Request a Quote — How can a potential customer start doing business with you?",
                ]}
              />

              <ArticleParagraph>
                For some businesses, that may be enough.
              </ArticleParagraph>

              <ArticleParagraph>
                The purpose of the first website is not to win a design
                award. Its purpose is to answer the questions a potential
                customer is likely to have.
              </ArticleParagraph>

              <QuoteBox>
                Who are you? What do you offer? Where are you located? Why
                should I trust you? How can I contact you?
              </QuoteBox>
            </section>

            {/* Website as business tool */}
            <section>
              <ArticleHeading>
                Your Website Can Do More Than Just Display Information
              </ArticleHeading>

              <ArticleParagraph>
                Once you have a website, consider whether customers can
                actually do business through it. This depends on the type of
                business.
              </ArticleParagraph>

              <ArticleParagraph>
                If you sell products, you might eventually allow customers
                to:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Browse products",
                  "Check prices",
                  "Place orders",
                  "Make payments",
                  "Track orders",
                ]}
              />

              <ArticleParagraph>
                If you provide professional services, customers might be able
                to:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Request a quotation",
                  "Submit their requirements",
                  "Book an appointment",
                  "Schedule a consultation",
                  "Upload documents",
                  "Make payments",
                ]}
              />

              <ArticleParagraph>
                Not every business needs online transactions.
              </ArticleParagraph>

              <QuoteBox>
                Can my website help me get my next customer?
              </QuoteBox>

              <ArticleParagraph>
                That question changes the website from an online brochure
                into a business tool.
              </ArticleParagraph>
            </section>

            {/* Maps */}
            <section>
              <ArticleHeading>
                If You Have a Physical Business, Get Listed on Maps
              </ArticleHeading>

              <ArticleParagraph>
                A website is important, but a physical business needs
                another important digital asset:{" "}
                <strong>its location on online maps.</strong>
              </ArticleParagraph>

              <ArticleParagraph>
                Think about what happens when someone searches:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "restaurant near me",
                  "dentist near me",
                  "plumber near me",
                  "hardware shop in my area",
                  "accountant near me",
                ]}
              />

              <ArticleParagraph>
                People are often not looking for a website. They are looking
                for a nearby business.
              </ArticleParagraph>

              <ArticleParagraph>
                That is why businesses with physical locations should create
                and maintain a business listing on services such as Google
                Maps.
              </ArticleParagraph>

              <ArticleParagraph>
                Make sure your listing contains accurate:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Business name",
                  "Address",
                  "Phone number",
                  "Opening hours",
                  "Website",
                  "Business category",
                  "Photos",
                  "Products or services",
                ]}
              />

              <ArticleParagraph>
                Also encourage genuine customers to leave reviews.
              </ArticleParagraph>

              <ArticleParagraph>
                For a local business, these listings can sometimes be more
                important for acquiring customers than having a sophisticated
                website.
              </ArticleParagraph>
            </section>

            {/* Search */}
            <section>
              <ArticleHeading>
                Make Your Business Easy to Find on Search Engines
              </ArticleHeading>

              <ArticleParagraph>
                Having a website does not automatically mean people will find
                it.
              </ArticleParagraph>

              <ArticleParagraph>
                Search engines need to understand what your business does.
              </ArticleParagraph>

              <ArticleParagraph>
                For example, if you operate a furniture manufacturing company
                in Pune, your website should clearly explain what you
                manufacture and where you operate.
              </ArticleParagraph>

              <ArticleParagraph>
                Instead of having a page that simply says:
              </ArticleParagraph>

              <QuoteBox>Welcome to ABC Industries</QuoteBox>

              <ArticleParagraph>
                you should clearly communicate things such as:
              </ArticleParagraph>

              <QuoteBox>
                Custom Office Furniture Manufacturer in Pune
              </QuoteBox>

              <ArticleParagraph>
                Over time, you can create useful pages and articles answering
                questions customers commonly ask.
              </ArticleParagraph>

              <ArticleParagraph>
                For example:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "How to choose office furniture for a small workspace",
                  "What does custom furniture cost?",
                  "How long does commercial furniture manufacturing take?",
                ]}
              />

              <ArticleParagraph>
                These pages can attract people who are already searching for
                the products or services you provide.
              </ArticleParagraph>
            </section>

            {/* Trust */}
            <section>
              <ArticleHeading>
                Build Trust, Not Just Visibility
              </ArticleHeading>

              <ArticleParagraph>
                Getting found online is only half the job.
              </ArticleParagraph>

              <ArticleParagraph>
                The next question a customer asks is:
              </ArticleParagraph>

              <QuoteBox>“Can I trust this business?”</QuoteBox>

              <ArticleParagraph>
                Your online presence should therefore demonstrate
                credibility.
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Real photographs of your business",
                  "Photographs of your team",
                  "Customer testimonials",
                  "Genuine reviews",
                  "Previous projects",
                  "Case studies",
                  "Certifications",
                  "Awards",
                  "Business history",
                  "Client industries or customers, where appropriate",
                  "Clear contact information",
                ]}
              />

              <ArticleParagraph>
                If you have been operating for 15 years, say so. If you have
                completed 500 projects, explain it. If you work with
                established companies, show that where you have permission
                to do so.
              </ArticleParagraph>

              <ArticleParagraph>
                Your website should not simply tell people that your business
                is good. It should give them{" "}
                <strong>evidence.</strong>
              </ArticleParagraph>
            </section>

            {/* Social Media */}
            <section>
              <ArticleHeading>
                Social Media Is Useful—but It Should Not Be Your Foundation
              </ArticleHeading>

              <ArticleParagraph>
                Social media can help businesses reach customers, demonstrate
                products, publish updates and build relationships.
              </ArticleParagraph>

              <ArticleParagraph>
                Depending on your business, you might use platforms such as
                LinkedIn, Instagram, Facebook, YouTube or others.
              </ArticleParagraph>

              <ArticleParagraph>
                But remember an important principle:
              </ArticleParagraph>

              <QuoteBox>
                Your social-media profile is rented space. Your domain is
                your own digital property.
              </QuoteBox>

              <ArticleParagraph>
                Build your website and domain first, then use social
                platforms to send people toward your business.
              </ArticleParagraph>

              <ArticleParagraph>
                Your different online channels should work together rather
                than exist as disconnected accounts.
              </ArticleParagraph>
            </section>

            {/* Business identity */}
            <section>
              <ArticleHeading>
                Set Up a Business Identity Everywhere
              </ArticleHeading>

              <ArticleParagraph>
                As your digital presence grows, keep your business
                information consistent.
              </ArticleParagraph>

              <ArticleParagraph>Try to use the same:</ArticleParagraph>

              <ArticleList
                items={[
                  "Business name",
                  "Logo",
                  "Phone number",
                  "Website",
                  "Business description",
                  "Address",
                  "Email domain",
                ]}
              />

              <ArticleParagraph>
                across your website, maps, social media and relevant business
                directories.
              </ArticleParagraph>

              <ArticleParagraph>
                Consistency makes a business look more professional and helps
                customers recognize that different online profiles belong to
                the same company.
              </ArticleParagraph>
            </section>

            {/* Claim name */}
            <section>
              <ArticleHeading>
                Claim Your Business Name Online
              </ArticleHeading>

              <ArticleParagraph>
                It is also worth checking whether your business name is
                available across important online platforms.
              </ArticleParagraph>

              <ArticleParagraph>
                You do not necessarily need to actively use every platform.
                But if your business is called “ABC Furniture,” you may want
                to reserve the relevant business name on major platforms
                before someone else does.
              </ArticleParagraph>

              <ArticleParagraph>
                This is especially useful if you expect your business to grow.
              </ArticleParagraph>
            </section>

            {/* Contact */}
            <section>
              <ArticleHeading>
                Add a Simple Way to Contact You
              </ArticleHeading>

              <ArticleParagraph>
                Never make a customer search for your contact information.
              </ArticleParagraph>

              <ArticleParagraph>
                Depending on your business, you could provide:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Phone",
                  "Professional email",
                  "WhatsApp",
                  "Contact form",
                  "Appointment booking",
                  "Physical address",
                  "Map location",
                ]}
              />

              <ArticleParagraph>
                For service businesses, a simple enquiry form can be
                extremely valuable.
              </ArticleParagraph>

              <ArticleParagraph>
                Instead of simply saying “Contact us for more information,”
                ask useful questions:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "What service are you interested in?",
                  "What is your requirement?",
                  "What is your approximate quantity or budget?",
                  "When do you need it?",
                ]}
              />

              <ArticleParagraph>
                This gives your sales team useful information before speaking
                to the customer.
              </ArticleParagraph>
            </section>

            {/* Security */}
            <section>
              <ArticleHeading>Protect Your Digital Business</ArticleHeading>

              <ArticleParagraph>
                Once you start building your digital presence, protect it.
              </ArticleParagraph>

              <ArticleParagraph>
                The domain, website, email and business listings are valuable
                business assets.
              </ArticleParagraph>

              <ArticleParagraph>
                Use strong passwords and two-factor authentication where
                available.
              </ArticleParagraph>

              <ArticleParagraph>
                Make sure the domain is registered using a business-controlled
                account rather than an employee&apos;s personal account.
              </ArticleParagraph>

              <ArticleParagraph>Keep records of:</ArticleParagraph>

              <ArticleList
                items={[
                  "Domain ownership",
                  "Website hosting",
                  "Email administration",
                  "Social-media accounts",
                  "Map/business listings",
                  "Payment accounts",
                  "Renewal dates",
                ]}
              />

              <ArticleParagraph>
                Do not allow one employee or outside vendor to become the
                only person who knows how to access your digital assets.
              </ArticleParagraph>
            </section>

            {/* Day one */}
            <section>
              <ArticleHeading>
                You Don&apos;t Need Everything on Day One
              </ArticleHeading>

              <ArticleParagraph>
                One of the biggest mistakes small businesses make is thinking
                that building an online presence requires a huge website,
                expensive software and a large marketing budget.
              </ArticleParagraph>

              <ArticleParagraph>It does not.</ArticleParagraph>

              <div className="mt-8 space-y-7">
                <Step
                  number="1"
                  title="Establish your identity."
                  text="Register your domain and create professional email."
                />

                <Step
                  number="2"
                  title="Establish your presence."
                  text="Build a simple, professional website."
                />

                <Step
                  number="3"
                  title="Become discoverable."
                  text="Create your business listing on maps and relevant directories."
                />

                <Step
                  number="4"
                  title="Build credibility."
                  text="Add photographs, reviews, testimonials, projects and useful information."
                />

                <Step
                  number="5"
                  title="Generate business."
                  text="Add enquiry forms, quotation requests, bookings, online ordering or payments where appropriate."
                />

                <Step
                  number="6"
                  title="Market continuously."
                  text="Use search, social media, content, email, advertising and other channels appropriate for your industry."
                />
              </div>

              <ArticleParagraph>
                You can build each stage gradually.
              </ArticleParagraph>
            </section>

            {/* Website goal */}
            <section>
              <ArticleHeading>
                The Real Goal Is Not “Having a Website”
              </ArticleHeading>

              <ArticleParagraph>
                A website by itself does not create a digital business.
              </ArticleParagraph>

              <ArticleParagraph>
                The real goal is to create a system where a potential
                customer can:
              </ArticleParagraph>

              <div className="my-8 rounded-xl border border-border bg-card p-5 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Discover you
                </span>{" "}
                → Learn about you → Trust you → Contact you → Buy from you →
                Return to you
              </div>

              <ArticleParagraph>
                For one business, this might happen entirely online.
              </ArticleParagraph>

              <ArticleParagraph>
                For another, the customer may discover the business through
                Google Maps, visit the physical store, and make the purchase
                in person.
              </ArticleParagraph>

              <ArticleParagraph>
                For another, the customer might find an article on the
                website, submit an enquiry, receive a quotation and complete
                the transaction offline.
              </ArticleParagraph>

              <ArticleParagraph>
                There is no single digital strategy that works for every
                business.
              </ArticleParagraph>

              <QuoteBox>
                The better question is: “How do my customers find me,
                evaluate me and ultimately buy from me—and how can digital
                tools make that process easier?”
              </QuoteBox>
            </section>

            {/* Final argument */}
            <section>
              <ArticleHeading>
                A Business That Does Nothing Online Is Becoming Invisible
              </ArticleHeading>

              <ArticleParagraph>
                Customers increasingly search before they buy.
              </ArticleParagraph>

              <ArticleParagraph>
                They check businesses on Google. They look at websites. They
                read reviews. They look at photographs. They compare
                products. They send enquiries. They check locations. They
                look for proof that a business is legitimate.
              </ArticleParagraph>

              <ArticleParagraph>
                If your business has no digital footprint, customers may not
                know that you exist—even if you have been operating
                successfully for years.
              </ArticleParagraph>

              <ArticleParagraph>
                You don&apos;t need to become a technology expert.
              </ArticleParagraph>

              <ArticleParagraph>
                You simply need to establish the basic digital foundation:
              </ArticleParagraph>

              <ArticleList
                items={[
                  "Own your domain.",
                  "Use professional email.",
                  "Create a useful website.",
                  "Register your physical location on maps when applicable.",
                  "Make your business discoverable through search.",
                  "Build trust through reviews, photographs and evidence.",
                  "Give customers an easy way to contact or buy from you.",
                ]}
              />

              <ArticleParagraph>
                Then improve it over time.
              </ArticleParagraph>

              <ArticleParagraph>
                Your digital presence should not be treated as a one-time
                project. It should become another part of running the
                business.
              </ArticleParagraph>
            </section>

            {/* Syntropic CTA */}
            <section className="mt-16 rounded-xl border border-border bg-muted/40 p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Need Help Getting Started?
              </h2>

              <div className="mt-5 space-y-4">
                <p className="text-[15px] leading-7 text-muted-foreground">
                  Building a digital presence can seem complicated when you
                  are busy running your business. You don&apos;t necessarily
                  need to learn how domains, websites, email, search engines
                  and online listings work—you can have someone help you put
                  the foundation in place and maintain it.
                </p>

                <p className="text-[15px] leading-7 text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    Syntropic Solution
                  </strong>{" "}
                  helps businesses establish and maintain their digital
                  presence. They can help you set up your{" "}
                  <strong className="font-semibold text-foreground">
                    business domain, professional email, website, online
                    business listings and other elements of your digital
                    identity
                  </strong>
                  , and can continue to partner with you as your business
                  grows.
                </p>

                <p className="text-[15px] leading-7 text-muted-foreground">
                  The goal is not simply to build a website and leave you on
                  your own. It is to help you establish a digital foundation
                  and keep your business presence{" "}
                  <strong className="font-semibold text-foreground">
                    accurate, professional and active
                  </strong>{" "}
                  over time.
                </p>

                <div className="pt-2">
                  <a
                    href="https://syntropicsolution.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Learn more at syntropicsolution.com
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <p className="pt-3 text-sm italic leading-6 text-muted-foreground">
                  Your business has already built something valuable in the
                  physical world. Your digital presence should make sure
                  people can find it.
                </p>
              </div>
            </section>

          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/* Reusable article components                                                 */
/* -------------------------------------------------------------------------- */

function ArticleHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 mt-14 text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] first:mt-0 md:text-[23px]">
      {children}
    </h2>
  );
}

function ArticleParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-[18px] text-[15px] leading-[1.78] tracking-[-0.008em] text-foreground/75">
      {children}
    </p>
  );
}

function ArticleList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="mb-6 mt-3 list-disc space-y-1 pl-6">
      {items.map((item) => (
        <li
          key={item}
          className="pl-1 text-[15px] leading-[1.75] tracking-[-0.008em] text-foreground/75"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function QuoteBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-7 rounded-r-lg border-l-2 border-foreground/30 bg-muted/50 px-5 py-4">
      <p className="m-0 text-[15px] font-medium leading-7 text-foreground">
        {children}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative flex gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-semibold text-muted-foreground">
        {number}
      </div>

      <p className="m-0 pt-0.5 text-[15px] leading-7 tracking-[-0.008em] text-foreground/75">
        <strong className="font-semibold text-foreground">{title}</strong>{" "}
        {text}
      </p>
    </div>
  );
}