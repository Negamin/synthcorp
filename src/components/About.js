import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-lg z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Colaboração em equipe" 
              className="rounded-lg shadow-lg relative z-10 w-full h-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Sobre Nós</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneiros em Soluções Tecnológicas Inovadoras</h2>
            
            <p className="text-gray-600 mb-6">
              Fundada em 2024, a Synth AI rapidamente se estabeleceu como uma empresa inovadora em soluções tecnológicas. 
              Nossa missão é tornar tecnologias avançadas acessíveis a empresas de todos os portes, ajudando-as 
              a transformar suas operações e alcançar um crescimento sem precedentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Inovação Constante</h4>
                  <p className="text-gray-600 text-sm">Nossa equipe de desenvolvedores está sempre na vanguarda das novas tecnologias.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Desenvolvimento Responsável</h4>
                  <p className="text-gray-600 text-sm">Priorizamos práticas de desenvolvimento sustentáveis e seguras.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expertise no Setor</h4>
                  <p className="text-gray-600 text-sm">Conhecimento especializado em saúde, finanças e manufatura.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Foco no Sucesso do Cliente</h4>
                  <p className="text-gray-600 text-sm">Suporte dedicado garantindo o sucesso da implementação das suas soluções tecnológicas.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium shadow-sm">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
