import Image from 'next/image'
import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-26 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_80%),linear-gradient(180deg,#ffffff,#f8fafc)]"
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
        {/* Texto */}

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span
            className="
              inline-block
              rounded-full
              bg-blue-100
              px-6
              py-2.5
              text-sm
              font-bold
              text-blue-600
            "
          >
            Desenvolvedor Full Stack • Next.js • Node.js
          </span>

          <h1
            className="
              mt-6
              mb-6
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-5xl
            "
          >
            Desenvolvendo aplicações web modernas, escaláveis e com foco na
            melhor experiência do usuário.
          </h1>

          <p
            className="
              mb-9
              max-w-2xl
              text-lg
              leading-8
              text-slate-500
            "
          >
            Desenvolvedor Full Stack com foco em Next.js, React, Node.js e
            TypeScript. Gosto de construir aplicações rápidas, responsivas e bem
            estruturadas, utilizando boas práticas de desenvolvimento,
            componentes reutilizáveis e código limpo.
          </p>

          {/* Cards */}

          <div
            className="
              mb-11
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {[
              'React & Next.js',
              'Node.js & APIs',
              'TypeScript',
              'Clean Code',
            ].map((item) => (
              <div
                key={item}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-6
                  py-5
                  font-medium
                  text-slate-700
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    font-bold
                  "
                >
                  ✓
                </span>

                <span className="transition-colors duration-300 group-hover:text-blue-600">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Botões */}

          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            <a
              href="/curriculo.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-blue-600
                px-9
                py-4
                font-medium
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
              "
            >
              <ArrowDown size={20} weight="bold" />
              Download CV
            </a>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-2
                border-slate-300
                px-9
                py-4
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-600
                hover:bg-white
                hover:text-blue-600
              "
            >
              Ver projetos
            </a>
          </div>

          {/* Links */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              text-slate-500
              lg:justify-start
            "
          >
            <a
              href="https://github.com/SEU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-blue-600"
            >
              <GithubLogo size={22} weight="fill" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/SEU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-blue-600"
            >
              <LinkedinLogo size={22} weight="fill" />
              LinkedIn
            </a>

            <a
              href="mailto:seuemail@email.com"
              className="transition-colors hover:text-blue-600"
            >
              E-mail
            </a>
          </div>
        </div>

        {/* Foto */}

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

                lg:h-[420px]
                lg:w-[330px]

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
