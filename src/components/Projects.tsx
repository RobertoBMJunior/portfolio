import Image from 'next/image'

const projects = [
  {
    title: 'TreinoPronto',
    image: '/treinopronto.png',
    href: 'https://treinopronto.com',
    description:
      'Plataforma para geração personalizada de treinos com foco em desempenho, SEO e excelente experiência do usuário.',
    button: 'Visitar site',
  },
  {
    title: 'Site para Clínica',
    image: '/clinica-odontologica.png',
    href: 'https://sites-profissionais-ashy.vercel.app/',
    description:
      'Site institucional desenvolvido para transmitir credibilidade, apresentar serviços e facilitar o contato entre pacientes e a clínica.',
    button: 'Visitar site',
  },
  {
    title: 'Landing Page',
    image: '/coffee-Delivery.PNG',
    href: 'https://coffee-delivery-ten-blond.vercel.app/',
    description:
      'Landing page criada para demonstrar interfaces modernas, navegação intuitiva e design focado na experiência do usuário.',
    button: 'Visitar site',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-25 px-6 pt-5 pb-10 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          {/* <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            Portfólio
          </span> */}

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Projetos em destaque
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
            Alguns dos projetos desenvolvidos recentemente para demonstrar a
            qualidade, organização e atenção aos detalhes presentes em cada
            trabalho.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-lg
              transition-shadow
              duration-300
              hover:shadow-2xl
              cursor-pointer
            "
            >
              <div className="overflow-hidden rounded-t-[28px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-blue-600
                  transition-all
                  duration-300
                  group-hover:gap-3
                  hover:text-blue-700
                  after:absolute
                  after:inset-0
                "
                >
                  {project.button}
                  <span className="text-xl">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
