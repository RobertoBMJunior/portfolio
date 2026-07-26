import {
  Atom,
  Buildings,
  CalendarDots,
  Car,
  Certificate,
  Clock,
  InstagramLogo,
  LightningIcon,
  MapPin,
  NavigationArrow,
  ShieldCheck,
  Star,
  Stethoscope,
  UserCircleCheckIcon,
  UsersThree,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

export function Services() {
  const services = [
    {
      title: 'Contato facilitado',
      description:
        'Facilite o primeiro contato e aumente as chances de novos agendamentos.',

      color: {
        bg: 'bg-green-100',
        text: 'text-green-600',
      },

      icon: UserCircleCheckIcon,

      items: [
        {
          icon: WhatsappLogo,
          text: 'WhatsApp flutuante',
        },
        {
          icon: InstagramLogo,
          text: 'Links para redes sociais',
        },
        {
          icon: CalendarDots,
          text: 'Botão para agendamento',
        },
      ],
    },

    {
      title: 'Transmita confiança',
      description:
        'Mostre a estrutura da clínica e apresente sua equipe de forma profissional.',

      color: {
        bg: 'bg-violet-100',
        text: 'text-violet-600',
      },

      icon: LightningIcon,

      items: [
        {
          icon: Buildings,
          text: 'Fotos da clínica',
        },
        {
          icon: UsersThree,
          text: 'Equipe de profissionais',
        },
        {
          icon: ShieldCheck,
          text: 'Ambiente profissional',
        },
      ],
    },

    {
      title: 'Mostre sua autoridade',
      description:
        'Destaque seus diferenciais e aumente a confiança dos pacientes.',

      color: {
        bg: 'bg-amber-100',
        text: 'text-amber-600',
      },

      icon: Atom,

      items: [
        {
          icon: Stethoscope,
          text: 'Especialidades',
        },
        {
          icon: Certificate,
          text: 'Diferenciais da clínica',
        },
        {
          icon: Star,
          text: 'Depoimentos de pacientes',
        },
      ],
    },

    {
      title: 'Localização fácil',
      description:
        'Ajude seus pacientes a encontrar sua clínica com apenas um clique.',

      color: {
        bg: 'bg-sky-100',
        text: 'text-sky-600',
      },

      icon: NavigationArrow,

      items: [
        {
          icon: MapPin,
          text: 'Google Maps integrado',
        },
        {
          icon: Car,
          text: 'Rotas até a clínica',
        },
        {
          icon: Clock,
          text: 'Horário de funcionamento',
        },
      ],
    },
  ]

  return (
    <section id="services" className="scroll-mt-25 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            Serviços
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Tudo o que seu negócio precisa em um único site
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seu site será totalmente personalizado para a identidade da sua
            empresa. Estes são alguns dos recursos mais importantes que estarão
            presentes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const TitleIcon = service.icon

            return (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color.bg}`}
                  >
                    <TitleIcon
                      size={26}
                      weight="fill"
                      className={service.color.text}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon

                    return (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <ItemIcon
                          size={20}
                          weight="fill"
                          className={service.color.text}
                        />

                        <span>{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
