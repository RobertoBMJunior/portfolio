import Link from 'next/link'
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  const telefone = '5561999743703'
  const mensagem = encodeURIComponent(
    'Olá! Vi o seu portfólio. Vamos conversar?'
  )
  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagem}`

  return (
    <footer className="border-t border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
        {/* Esquerda */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Roberto Júnior</h3>
          <p className="mt-3 leading-7 text-slate-300">
            Desenvolvedor Full Stack especializado na criação de aplicações web
            modernas.
          </p>
        </div>

        {/* Direita */}
        <div className="flex items-center justify-center gap-1">
          <Link
            href={whatsappUrl}
            target="_blank"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-green-400 flex gap-2 flex-col items-center md:flex-row md:items-start"
          >
            <WhatsappLogoIcon size={28} weight="fill" />
            {/* <span>(61) 99974-3703</span> */}
          </Link>

          <Link
            href="https://github.com/RobertoBMJunior"
            target="_blank"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-white flex gap-2 flex-col items-center md:flex-row md:items-start"
          >
            <GithubLogoIcon size={28} weight="fill" />
            {/* <span>RobertoBMJunior</span> */}
          </Link>
          <Link
            href="https://www.linkedin.com/in/roberto-j%C3%BAnior-944551184/"
            target="_blank"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-blue-400 flex gap-2 flex-col items-center md:flex-row md:items-start"
          >
            <LinkedinLogoIcon size={28} weight="fill" />
            {/* <span>roberto-júnior-944551184</span> */}
          </Link>
          {/* <div className="rounded-full p-2 text-slate-400 transition-colors hover:text-green-400 flex gap-2 flex-col items-center md:flex-row md:items-start">
            <EnvelopeIcon size={28} weight="fill" />{' '}
            <span>robertojuniorazul@gmail.com</span>
          </div> */}
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span className="text-center">© 2026 Roberto Júnior</span>
          <span className="text-center">
            Desenvolvido com Next.js e Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
