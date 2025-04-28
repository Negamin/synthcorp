import React from 'react';
import { FaCode, FaMobile, FaShieldAlt, FaChartBar } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-600" />,
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas, responsivas e de alta performance que impulsionam seu negócio."
  },
  {
    icon: <FaMobile className="text-4xl text-blue-600" />,
    title: "Aplicativos Mobile",
    description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android que oferecem experiências excepcionais."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: "Segurança Cibernética",
    description: "Protegemos seus dados e sistemas com soluções avançadas de segurança e monitoramento contínuo."
  },
  {
    icon: <FaChartBar className="text-4xl text-blue-600" />,
    title: "Análise de Dados",
    description: "Transformamos dados em insights valiosos para tomada de decisões estratégicas e crescimento do negócio."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para impulsionar a transformação digital da sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-3xl transform translate-x-8 -translate-y-8 group-hover:bg-blue-100 transition-colors duration-300"></div>
              
              {/* Icon with animated background */}
              <div className="relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
                <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 relative z-10">{service.description}</p>
              
              {/* Animated arrow on hover */}
              <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Saiba mais
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
