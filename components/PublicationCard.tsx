import { ExternalLink } from 'lucide-react'

type PublicationCardProps = {
  title: string
  year: string
  authors: string[]
  link: string
  journal: string
}

export default function PublicationCard({ 
  title, 
  year,
  authors,
  link,
  journal 
}: PublicationCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-1">
          {year}
        </header>

        <div className="z-10 sm:col-span-7">
          <h3>
            <a 
              href={link}
              target="_blank"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>{title}</span>
              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            {authors.join("; ")}
          </p>
          <p className="mt-2 text-sm leading-normal">
            {journal}
          </p>
        </div>
      </div>
    </li>
  )
}
