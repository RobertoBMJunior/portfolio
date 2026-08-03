'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  const telefone = '5561999743703'
  const mensagem = encodeURIComponent(
    'Olá! Vi o seu portfólio. Vamos conversar?'
  )
  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagem}`

  return (
    <>
      <header
        id="header"
        className="
          fixed
          inset-x-0
          top-0
          z-50
          h-25
          border-b
          border-white/40
          bg-white/72
          backdrop-blur-[18px]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            justify-between
            px-6
          "
        >
          {/* Logo */}

          <a
            href="#"
            className="text-2xl font-bold text-(--secondary)"
            onClick={closeMenu}
          >
            Roberto Júnior
          </a>

          {/* Menu Desktop */}

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {[
                ['Sobre mim', '#about-me'],
                ['Projetos', '#projects'],
                ['Tecnologias', '#technologies'],
                ['Contato', '#footer'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      relative
                      font-medium
                      text-(--gray-700)
                      transition-all
                      duration-300
                      hover:text-(--primary)
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-0.5
                      after:w-0
                      after:bg-(--primary)
                      after:transition-all
                      after:duration-300

                      hover:after:w-full
                    "
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão Desktop */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              lg:flex
              items-center
              justify-center
              rounded-full
              bg-(--primary)
              px-6.5
              py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-(--primary-dark)
            "
          >
            Vamos conversar
          </a>

          {/* Botão Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-lg
              p-2
              transition-colors
              duration-300
              hover:bg-slate-100
              lg:hidden
            "
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X size={30} weight="bold" />
            ) : (
              <List size={30} weight="bold" />
            )}
          </button>
        </div>
      </header>

      {/* Backdrop */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-40
          bg-black/25
          transition-all
          duration-300
          lg:hidden

          ${
            menuOpen
              ? 'visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }
        `}
      />

      {/* Menu Mobile */}

      <nav
        className={`
          fixed
          top-25
          left-0
          right-0
          z-50
          border-b
          border-slate-200
          bg-white
          shadow-xl

          origin-top
          transition-all
          duration-300

          lg:hidden

          ${
            menuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-6 pointer-events-none opacity-0'
          }
        `}
      >
        <ul className="flex flex-col">
          <li>
            <a
              href="#about-me"
              onClick={closeMenu}
              className="block border-b border-slate-100 px-6 py-5 font-medium hover:bg-slate-50"
            >
              Sobre mim
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block border-b border-slate-100 px-6 py-5 font-medium hover:bg-slate-50"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              onClick={closeMenu}
              className="block border-b border-slate-100 px-6 py-5 font-medium hover:bg-slate-50"
            >
              Tecnologias
            </a>
          </li>

          <li>
            <a
              href="#footer"
              onClick={closeMenu}
              className="block border-b border-slate-100 px-6 py-5 font-medium hover:bg-slate-50"
            >
              Contato
            </a>
          </li>

          <li className="p-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                flex
                justify-center
                rounded-full
                bg-(--primary)
                px-6
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-(--primary-dark)
              "
            >
              Vamos conversar
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
