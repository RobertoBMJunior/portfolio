import { Eye, LucideIcon } from 'lucide-react'

interface CardExperienceProps {
  icon: LucideIcon
  title: string
  period: string
  description: string
  highlights: string[]
  url_project: string
}

export function CardExperience({
  icon,
  title,
  period,
  description,
  highlights,
  url_project
}: CardExperienceProps) {
  const Icon = icon

  return (
    <article
      className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-blue-300
                hover:shadow-2xl
              "
    >
      <div className="mb-6 flex items-center gap-5">
        <div
          className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-100
                    text-violet-700
                    transition-colors
                    duration-300
                    group-hover:bg-violet-700
                    group-hover:text-white
                  "
        >
          <Icon size={28} strokeWidth={2.2} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

          <span className="text-sm font-medium text-blue-600">{period}</span>
        </div>
      </div>

      <p className="leading-7 text-slate-600">{description}</p>

      <div className="mt-7 flex flex-wrap gap-3">
        {highlights.map((item) => (
          <span
            key={item}
            className="
                      rounded-full
                      bg-slate-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                      flex gap-1 
                    "
          >
            {item}
          </span>
        ))}
      </div>

      <a 
      href={url_project}
      className="bg-violet-600 flex gap-2 items-center p-5 rounded-3xl mt-5">
        <Eye color='white'/>
        <span className='text-white font-medium'>Ver projeto</span>
      </a>
    </article>
  )
}
