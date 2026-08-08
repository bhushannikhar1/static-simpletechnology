import EssayContentSection from "@/components/essay-content-section";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";

export default async function Essays({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; search?: string }>;
}) {
  const { tag, search } = await searchParams;

  return (
    <div className="bg-muted dark:bg-background">
      <HeroHeader />
      <EssayContentSection tag={tag} search={search} />
      <FooterSection />
    </div>
  );
}