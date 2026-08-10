import Image from 'next/image'

export function Hero() {
  const technologies = [
    { name: 'Next.js', image: '/nextjs.svg' },
    { name: 'React', image: '/reactjs.webp' },
    { name: 'TypeScript', image: '/typescript.png' },
    { name: 'Node.js', image: '/node.png' },
    { name: 'Tailwind', image: '/tailwind.png' },
    { name: 'JavaScript', image: '/Javascript.png' },
    { name: 'Git', image: '/git.png' },
    { name: 'HTML5', image: '/html.png' },
    { name: 'CSS3', image: '/css.png' },
    { name: 'Figma', image: '/figma.png' },
  ]

  return (
    <section
      id="hero"
      className="pt-26 pb-8 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_80%),linear-gradient(180deg,#ffffff,#f8fafc)]"
    >
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-100px)]
          max-w-7xl
          items-center
          gap-2
          px-6
          lg:gap-16
          lg:grid-cols-[6.5fr_3.5fr]
        "
      >
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            className="
              mt-6
              mb-6
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-5xl
            "
          >
            Desenvolvedor Full Stack
          </h1>

          <p
            className="
              mb-10
              lg:max-w-2xl
              text-lg
              leading-8
              text-slate-500
            "
          >
            Desenvolvo aplicações web modernas utilizando React, Next.js,
            Node.js e TypeScript, criando interfaces responsivas, APIs
            escaláveis e experiências focadas em performance, organização de
            código e usabilidade.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-5 lg:justify-start">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-violet-600
                px-9
                py-4
                font-medium
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-700
                hover:shadow-xl
              "
            >
              Ver projetos
            </a>

            <a
              href="/Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-2
                border-amber-300
                bg-white
                px-9
                py-4
                font-medium
                text-amber-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-600
              "
            >
              Visualizar Currículo
            </a>
          </div>

          <div>
            <p
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Tecnologias que utilizo
            </p>

            <div
              id="technologies"
              className="grid grid-cols-3 gap-4 sm:grid-cols-5 scroll-mt-25"
            >
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-300
                    hover:shadow-lg
                  "
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={42}
                    height={42}
                    className="
                      h-10
                      w-10
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="mt-3 text-center text-sm font-medium text-slate-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            order-1
            mt-2
            flex
            justify-center
            lg:order-2
            lg:mb-0
          "
        >
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                -z-10
                scale-110
                rounded-full
                bg-blue-500/20
                blur-3xl
                lg:rounded-[40px]
              "
            />

            <Image
              src="/Roberto.jpg"
              alt="Roberto Júnior"
              width={420}
              height={560}
              priority
              className="
                h-40
                w-40

                sm:h-48
                sm:w-48

                md:h-56
                md:w-56

                lg:h-105
                lg:w-82.5

                rounded-full
                lg:rounded-[28px]

                border-[6px]
                border-white

                object-cover

                shadow-[0_25px_60px_rgba(15,23,42,0.20)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:scale-[1.03]

                animate-floating
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
