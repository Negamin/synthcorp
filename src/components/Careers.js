import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const jobListings = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    department: "Tecnologia",
    location: "São Leopoldo, RS",
    type: "Tempo Integral",
    description: "Estamos procurando um desenvolvedor Full Stack experiente para se juntar à nossa equipe de tecnologia. O candidato ideal terá experiência com React, Node.js e bancos de dados SQL/NoSQL.",
    requirements: [
      "Experiência comprovada com desenvolvimento Full Stack",
      "Proficiência em JavaScript/TypeScript, React e Node.js",
      "Conhecimento de bancos de dados SQL e NoSQL",
      "Experiência com metodologias ágeis",
      "Boa comunicação e trabalho em equipe"
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição",
      "Horário flexível",
      "Home office parcial"
    ]
  },
  {
    id: 2,
    title: "Especialista em Segurança Cibernética",
    department: "Segurança",
    location: "São Leopoldo, RS",
    type: "Tempo Integral",
    description: "Procuramos um especialista em segurança cibernética para fortalecer nossa infraestrutura e proteger dados sensíveis. O profissional será responsável por implementar e monitorar soluções de segurança.",
    requirements: [
      "Experiência em segurança de redes e sistemas",
      "Conhecimento de ferramentas de monitoramento e prevenção de ameaças",
      "Certificações relevantes (CISSP, CEH, CompTIA Security+)",
      "Experiência com análise de vulnerabilidades",
      "Conhecimento de compliance e regulamentações de segurança"
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição",
      "Horário flexível",
      "Home office parcial"
    ]
  },
  {
    id: 3,
    title: "Analista de Dados",
    department: "Análise de Dados",
    location: "Remoto",
    type: "Tempo Integral",
    description: "Estamos em busca de um Analista de Dados para transformar dados brutos em insights valiosos para nossos clientes. O candidato ideal terá experiência com ferramentas de análise e visualização de dados.",
    requirements: [
      "Experiência com análise e visualização de dados",
      "Conhecimento de SQL, Python ou R",
      "Experiência com ferramentas como Power BI, Tableau ou similares",
      "Capacidade de comunicar insights de forma clara",
      "Conhecimento de estatística aplicada"
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição",
      "Trabalho 100% remoto",
      "Auxílio home office"
    ]
  },
  {
    id: 4,
    title: "Gerente de Projetos",
    department: "Gestão",
    location: "São Leopoldo, RS",
    type: "Tempo Integral",
    description: "Procuramos um Gerente de Projetos experiente para liderar equipes multidisciplinares e garantir a entrega de projetos de alta qualidade dentro dos prazos estabelecidos.",
    requirements: [
      "Experiência comprovada em gestão de projetos de tecnologia",
      "Certificação PMP ou similar",
      "Conhecimento de metodologias ágeis e tradicionais",
      "Excelentes habilidades de comunicação e liderança",
      "Capacidade de gerenciar múltiplos projetos simultaneamente"
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição",
      "Horário flexível",
      "Home office parcial"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredJobs = filter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === filter);

  const departments = ['all', ...new Set(jobListings.map(job => job.department))];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Carreiras</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Junte-se à Nossa Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos excepcionais para fazer parte da nossa equipe. Confira nossas vagas abertas e venha construir o futuro da tecnologia conosco.
          </p>
        </div>

        {/* Filtros de departamento */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === dept 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {dept === 'all' ? 'Todas as Vagas' : dept}
            </button>
          ))}
        </div>
        
        {/* Lista de vagas */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map(job => (
            <div 
              key={job.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    {selectedJob === job.id ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Detalhes da vaga */}
              {selectedJob === job.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Requisitos:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Benefícios:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md font-medium">
                    Candidatar-se
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h3>
              <p className="text-gray-600 mb-6 lg:mb-0">
                Envie seu currículo para nosso banco de talentos e entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium shadow-md">
                Enviar Currículo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;