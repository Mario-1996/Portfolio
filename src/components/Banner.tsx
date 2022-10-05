import styles from './Banner.module.css';

function Content() {
    return (
        <div className="relative bg-white overflow-hidden mb-10">
           <div className="xl:flex xl:justify-end pt-16">
            <div className="container sm:mx-auto">
                <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
                    <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
                    <h1 className="mb-2 ml-6 font-mono text-4xl text-black md:text-6xl">
                        Bem-vindo ao meu <br className="block md:hidden" />
                    <span className="relative">
                    <span className="h-20 pt-2 text-indigo-700 overflow-x-hidden whitespace-nowrap text-brand-accent">
                      Portfólio
                    </span>
                      <span
                       className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}
                      ></span>
                    </span>
                    </h1>
                    <p className="text-lg text-gray-600 ml-6 mb-6">Neste portfólio irei apresentar um pouco sobre mim, e oque ando estudando atualmente na area da programação. Voçê também ira encontar alguns projetos que ja realizei como desenvolvedor, espero que goste do conteudo.</p>
                    </div>
                    <div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-indigo-50 relative py-20">
                        <div className="h-4/5 w-4/5">
                            <img src="LogoMario.jpeg" className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded" />
                        </div>
                        <div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
                            <svg width={243} height={163} xmlns="http://www.w3.org/2000/svg">
                                <g fill="#667EEA" fillRule="evenodd">
                                    <rect width={5} height={5} rx="2.5" />
                                    <rect x={30} width={5} height={5} rx="2.5" />
                                    <rect x={59} width={5} height={5} rx="2.5" />
                                    <rect x={89} width={5} height={5} rx="2.5" />
                                    <rect x={119} width={5} height={5} rx="2.5" />
                                    <rect x={148} width={5} height={5} rx="2.5" />
                                    <rect x={178} width={5} height={5} rx="2.5" />
                                    <rect x={208} width={5} height={5} rx="2.5" />
                                    <rect x={238} width={5} height={5} rx="2.5" />
                                    <rect y={20} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={20} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={20} width={5} height={5} rx="2.5" />
                                    <rect y={39} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={39} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={39} width={5} height={5} rx="2.5" />
                                    <rect y={60} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={60} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={60} width={5} height={5} rx="2.5" />
                                    <rect y={79} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={79} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={79} width={5} height={5} rx="2.5" />
                                    <rect y={99} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={99} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={99} width={5} height={5} rx="2.5" />
                                    <rect y={119} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={119} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={119} width={5} height={5} rx="2.5" />
                                    <rect y={139} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={139} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={139} width={5} height={5} rx="2.5" />
                                    <rect y={158} width={5} height={5} rx="2.5" />
                                    <rect x={30} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={59} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={89} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={119} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={148} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={178} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={208} y={158} width={5} height={5} rx="2.5" />
                                    <rect x={238} y={158} width={5} height={5} rx="2.5" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
        
    )
}

export default Content