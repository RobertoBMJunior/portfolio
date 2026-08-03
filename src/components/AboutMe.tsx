export function AboutMe() {
  return (
    <section
      id="about-me"
      className="mx-auto max-w-7xl px-6 py-10 lg:py-20 scroll-mt-25"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
          Olá! Meu nome é Roberto
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
          Um pouco sobre minha formação e objetivos profissionais.
        </p>
      </div>

      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 border-l-[6px] border-l-blue-600 bg-white p-8 shadow-lg lg:p-10">
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Sou{' '}
            <strong className="text-slate-900">Desenvolvedor Full Stack</strong>
            , formado em{' '}
            <strong className="text-slate-900">
              Engenharia Elétrica pela Universidade de Brasília (UnB)
            </strong>
            .
          </p>

          <p>
            Gosto de desenvolver aplicações web completas, criando interfaces
            intuitivas, APIs bem estruturadas e soluções com foco em
            organização, desempenho e uma excelente experiência para o usuário.
          </p>

          <p>
            Estou em busca de uma oportunidade como{' '}
            <strong className="text-slate-900">Desenvolvedor Full Stack</strong>
            , onde eu possa continuar evoluindo tecnicamente, colaborar com uma
            equipe experiente e contribuir para o desenvolvimento de produtos de
            qualidade.
          </p>
        </div>
      </div>
    </section>
  )
}
