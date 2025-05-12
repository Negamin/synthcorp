import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Como a Inteligência Artificial está Transformando os Negócios",
    category: "Tecnologia",
    date: "15 de Junho, 2024",
    excerpt: "Descubra como empresas estão utilizando IA para automatizar processos e melhorar a tomada de decisões.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    author: "Ana Silva",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    title: "Segurança Cibernética: Protegendo sua Empresa em 2024",
    category: "Segurança",
    date: "28 de Maio, 2024",
    excerpt: "Conheça as principais ameaças digitais e como implementar estratégias eficazes de proteção para sua empresa.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    author: "Carlos Mendes",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    title: "Transformação Digital: Por Onde Começar",
    category: "Estratégia",
    date: "10 de Maio, 2024",
    excerpt: "Um guia prático para empresas que desejam iniciar sua jornada de transformação digital com sucesso.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    author: "Mariana Costa",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    title: "Cloud Computing: Reduzindo Custos e Aumentando a Eficiência",
    category: "Infraestrutura",
    date: "2 de Maio, 2024",
    excerpt: "Como a migração para a nuvem pode otimizar recursos e proporcionar escalabilidade para seu negócio.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    author: "Roberto Alves",
    authorImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const Blog = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-1 h-6 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Nosso Blog</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigos e Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compartilhamos conhecimento, tendências e melhores práticas sobre tecnologia e transformação digital.
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{blogPosts[0].category}</span>
                <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors">
                <a href={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</a>
              </h3>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center">
                <img 
                  src={blogPosts[0].authorImage} 
                  alt={blogPosts[0].author} 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span className="text-gray-700 font-medium">{blogPosts[0].author}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex items-center">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-gray-700 text-sm">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Inscreva-se em nossa Newsletter</h3>
              <p className="text-blue-100 mb-6 lg:mb-0">
                Receba nossos artigos mais recentes e fique por dentro das últimas tendências em tecnologia.
              </p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-grow px-4 py-3 rounded-md text-gray-700 focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium shadow-md whitespace-nowrap">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;