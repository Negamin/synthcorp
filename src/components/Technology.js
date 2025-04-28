import React from 'react';

const technologies = [
  {
    name: "Desenvolvimento Web Moderno",
    description: "Utilizamos as mais recentes tecnologias de frontend e backend para criar aplicações web rápidas, responsivas e escaláveis que oferecem experiências excepcionais aos usuários.",
    icon: "🌐"
  },
  {
    name: "Aplicações Móveis Nativas",
    description: "Desenvolvemos aplicativos móveis de alta performance para iOS e Android que aproveitam ao máximo os recursos dos dispositivos e oferecem experiências intuitivas.",
    icon: "📱"
  },
  {
    name: "Cloud Computing",
    description: "Implementamos soluções em nuvem que oferecem escalabilidade, segurança e flexibilidade, permitindo que sua empresa se adapte rapidamente às mudanças do mercado.",
    icon: "☁️"
  },
  {
    name: "Automação de Processos",
    description: "Criamos sistemas de automação que eliminam tarefas repetitivas, reduzem erros e permitem que sua equipe se concentre em atividades de maior valor.",
    icon: "⚙️"
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Nossas Tecnologias</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias de Ponta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso conjunto de tecnologias proprietárias impulsiona soluções que geram resultados reais para os negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                  {tech.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Pronto para aproveitar nossas tecnologias?</h3>
              <p className="text-blue-100 mb-6 lg:mb-0">
                Agende uma consulta com nossos especialistas para descobrir como nossas soluções tecnológicas podem transformar seu negócio.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium shadow-md">
                Agendar uma Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
