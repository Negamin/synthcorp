import React from 'react';

const projects = [
  {
    title: "Portal de Atendimento Digital",
    category: "Saúde",
    description: "Plataforma digital que modernizou o atendimento ao paciente, reduzindo o tempo de espera em 60% e melhorando a satisfação do cliente em 45%.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Sistema de Gestão Financeira",
    category: "Finanças",
    description: "Software de gestão financeira que automatizou processos manuais e proporcionou análises em tempo real, aumentando a eficiência operacional em 35%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Plataforma de Automação Industrial",
    category: "Manufatura",
    description: "Sistema integrado que otimizou processos de produção e controle de qualidade, reduzindo custos operacionais em 28% e aumentando a produtividade.",
    image: "https://images.unsplash.com/photo-1581093458791-9d2b06b6c649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Aplicativo de Fidelidade",
    category: "Varejo",
    description: "Aplicativo mobile que revolucionou o programa de fidelidade do cliente, aumentando o engajamento em 75% e as vendas recorrentes em 40%.",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Nosso Portfólio</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Tecnológicas que Geram Resultados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossos casos de estudo mostrando como nossas tecnologias transformaram empresas em diversos setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-blue-300 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{project.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors">
                  Ver Caso de Estudo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium shadow-sm">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
