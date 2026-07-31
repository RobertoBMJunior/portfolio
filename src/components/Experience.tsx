import { BriefcaseBusiness, Dumbbell } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      icon: Dumbbell,
      title: 'TreinoPronto',
      period: '01/2026 – 04/2026',
      description:
        'Desenvolvimento completo da plataforma TreinoPronto, desde o planejamento até a publicação. O projeto inclui geração personalizada de treinos, blog otimizado para SEO, interface responsiva e foco em desempenho e experiência do usuário.',
      highlights: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'SEO',
        'Responsividade',
      ],
    },
    {
      icon: BriefcaseBusiness,
      title: 'Desenvolvedor Front-end Freelancer',
      period: '12/2024 – 01/2025',
      description:
        'Desenvolvimento completo do front-end de uma aplicação web em produção utilizando tecnologias modernas, com componentes reutilizáveis, layout responsivo, otimização de performance e foco em organização do código e experiência do usuário.',
      highlights: [
        'Next.js',
        'React',
        'TypeScript',
        'Radix UI',
        'Responsividade',
      ],
    },
  ]

  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
          Experiência
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
          Experiência prática em projetos reais
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          Experiência no desenvolvimento de aplicações web modernas, utilizando
          tecnologias atuais e boas práticas para entregar sites rápidos,
          responsivos e com excelente experiência para o usuário.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {experiences.map((experience) => {
          const Icon = experience.icon

          return (
            <article
              key={experience.title}
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
                  <h3 className="text-2xl font-bold text-slate-900">
                    {experience.title}
                  </h3>

                  <span className="text-sm font-medium text-blue-600">
                    {experience.period}
                  </span>
                </div>
              </div>

              <p className="leading-7 text-slate-600">
                {experience.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {experience.highlights.map((item) => (
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
            </article>
          )
        })}
      </div>
    </section>
  )
}
