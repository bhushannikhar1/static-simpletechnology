import Link from 'next/link'
import { Lightbulb } from 'lucide-react'
import { ProblemBo } from '@/app/_internal/ProblemListBo'

type ProblemItem = {
    id: string
    slug: string
    title: string
    status: string
    createdAt: Date
    description: string | null
    essayLinks: EssayLinkItem[]
}

type EssayItem = {
    id: string
    slug: string
    title: string
    status: string
    createdAt: Date
    description: string | null
}

type EssayLinkItem = {
    id: string
    essay: EssayItem
}

export default async function ProblemList() {
    const problemBo = new ProblemBo()
    let problems: ProblemItem[] = []
    let error: string | null = null

    try {
        problems = await problemBo.fetchProblemsWithEssays()
    } catch (err) {
        error = err instanceof Error ? err.message : 'Something went wrong'
    }

    return (
        <section className="bg-background py-16 md:py-32 bg-muted dark:bg-background">
            <div className="mx-auto max-w-5xl space-y-12 px-2">
                <h1 className="text-balance px-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">Problems</h1>

                {error && <p>{error}</p>}

                {!error && problems.length === 0 && <p>No problems found.</p>}

                {!error && problems.length > 0 && (
                    <ul className="space-y-4 px-4">
                        {problems.map((problem) => (
                            <li key={problem.id} className="flex items-center justify-between gap-4">
                                <Link
                                    href={`/problems/${problem.slug}`}
                                    className="text-foreground text-xl font-light tracking-tight transition-colors hover:text-primary"
                                >
                                    {problem.title}
                                </Link>
                                {/* <Link
                                    href={`/problems/${problem.slug}`}
                                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
                                >
                                    <Lightbulb className="size-4" aria-hidden="true" />
                                    <span>Better understand problem</span>
                                </Link> */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}