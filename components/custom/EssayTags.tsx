interface EssayTagsProps {
  tags: string[];
}

export default function EssayTags({ tags }: EssayTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <>
      {tags.map((tag, index) => (
        <span 
          key={`${tag}-${index}`} 
          className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700 border border-neutral-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:bg-neutral-50 hover:text-neutral-900 cursor-default"
        >
          {tag}
        </span>
      ))}
    </>
  );
}
