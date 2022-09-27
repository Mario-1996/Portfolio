import styles from './Banner.module.css';

function Content() {
    return (
        <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              </div>
            </nav>
          </div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 pt-8 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
            <h1 className="mb-2 font-mono text-4xl text-black md:text-6xl">
              Bem-vindo ao meu <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 pt-2 text-indigo-700 overflow-x-hidden whitespace-nowrap text-brand-accent">
                  Portfólio
                </span>
                <span
                  className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}"
                ></span>
              </span>
            </h1>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-10">
        <img className=" h-96 w-96 sm:h-72 md:h-96 lg:w-full lg:h-full" src="LogoMario.jpeg" alt=""/>
      </div>
    </div>
        
    )
}

export default Content