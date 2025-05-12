import React from 'react';
import { FaLaptopCode, FaRobot, FaDatabase, FaCloudUploadAlt, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const Solutions = () => {
  const solutionCategories = [
    {
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas para necessidades específicas do seu negócio",
      icon: <FaLaptopCode className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Sistemas Web Empresariais",
          description: "Plataformas robustas para gerenciamento de processos internos, com interfaces intuitivas e alto desempenho.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Portais de E-commerce",
          description: "Lojas virtuais completas com gestão de estoque, pagamentos e experiência de compra otimizada.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Inteligência Artificial",
      description: "Tecnologias avançadas de IA para automatizar e otimizar processos",
      icon: <FaRobot className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Chatbots Inteligentes",
          description: "Assistentes virtuais que utilizam processamento de linguagem natural para atendimento ao cliente 24/7.",
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sistemas de Recomendação",
          description: "Algoritmos que analisam comportamentos e preferências para oferecer recomendações personalizadas.",
          image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Big Data & Analytics",
      description: "Transforme dados em insights valiosos para seu negócio",
      icon: <FaDatabase className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Dashboards Analíticos",
          description: "Visualizações interativas que transformam dados complexos em informações acionáveis.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Previsão de Demanda",
          description: "Modelos preditivos que antecipam tendências de mercado e comportamento do consumidor.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Cloud Computing",
      description: "Infraestrutura escalável e segura para suas aplicações",
      icon: <FaCloudUploadAlt className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Migração para Nuvem",
          description: "Transferência segura de sistemas legados para ambientes cloud modernos e otimizados.",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Arquitetura Serverless",
          description: "Desenvolvimento de aplicações sem gerenciamento de infraestrutura, reduzindo custos e complexidade.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Cibersegurança",
      description: "Proteja seus dados e sistemas contra ameaças digitais",
      icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Análise de Vulnerabilidades",
          description: "Identificação proativa de pontos fracos em sistemas e aplicações antes que sejam explorados.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "SOC como Serviço",
          description: "Centro de operações de segurança dedicado ao monitoramento contínuo de sua infraestrutura.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android",
      icon: <FaMobileAlt className="text-5xl text-blue-600 mb-4" />,
      solutions: [
        {
          name: "Apps Corporativos",
          description: "Aplicativos personalizados para otimizar processos internos e aumentar a produtividade da equipe.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Aplicativos de Fidelidade",
          description: "Plataformas móveis para engajamento de clientes com programas de recompensas e benefícios.",
          image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Nossas Soluções</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Soluções Tecnológicas Inovadoras</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Desenvolvemos tecnologias de ponta para impulsionar a transformação digital da sua empresa e garantir vantagem competitiva no mercado.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-20 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Tecnologia avançada" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Transforme seu Negócio com Tecnologia</h3>
            <p className="text-blue-100 max-w-2xl mb-8 text-lg">
              Nossas soluções tecnológicas são projetadas para resolver desafios complexos e impulsionar o crescimento sustentável da sua empresa.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-lg font-medium">
              Solicitar Demonstração
            </button>
          </div>
        </div>

        {/* Solution Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutionCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 text-center group"
            >
              <div className="flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors">
                Explorar Soluções
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Solutions */}
        {solutionCategories.map((category, idx) => (
          <div key={idx} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-1 bg-blue-600"></div>
              <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.solutions.map((solution, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h4 className="text-xl font-bold mb-3">{solution.name}</h4>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors">
                      Saiba mais
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Pronto para implementar nossas soluções?</h3>
              <p className="text-blue-100 mb-6 lg:mb-0">
                Entre em contato com nossa equipe para uma consultoria personalizada e descubra como podemos ajudar a transformar seu negócio.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium shadow-md">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;