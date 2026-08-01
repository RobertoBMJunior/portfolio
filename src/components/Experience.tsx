import { BriefcaseBusiness, Dumbbell } from 'lucide-react'
import { CardExperience } from './cards/CardExperience'

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
      url_project: 'https://treinopronto.com/',
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
      url_project: '',
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

      <div className="grid gap-8 lg:grid-cols-1">
        {experiences.map((experience) => {
          return (
            <CardExperience
              key={experience.title}
              icon={experience.icon}
              title={experience.title}
              period={experience.period}
              description={experience.description}
              highlights={experience.highlights}
              url_project={experience.url_project}
            />
          )
        })}
      </div>
    </section>
  )
}
