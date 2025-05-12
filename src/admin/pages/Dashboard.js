import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

const Dashboard = () => {
  const [stats, setStats] = useState({
    solutions: 0,
    careers: 0,
    blog: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [lastLogin, setLastLogin] = useState('21h ago from newzealand');
  const [isLoading, setIsLoading] = useState(true);

  // Dados para o resumo de tráfego
  const trafficSummary = [
    { name: 'Visitantes Únicos', value: '8,267', change: '+12.4%', trend: 'up' },
    { name: 'Tempo Médio', value: '3m 45s', change: '-2.1%', trend: 'down' },
    { name: 'Taxa de Rejeição', value: '42.3%', change: '-8.7%', trend: 'up' }
  ];

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      // Carregar estatísticas do localStorage
      const solutions = JSON.parse(localStorage.getItem('solutions')) || [];
      const careers = JSON.parse(localStorage.getItem('careers')) || [];
      const blog = JSON.parse(localStorage.getItem('blog')) || [];

      setStats({
        solutions: solutions.length || 12,
        careers: careers.length || 4,
        blog: blog.length || 8
      });

      // Simular atividades recentes
      setRecentActivities([
        { id: 1, type: 'blog', action: 'Novo post adicionado', title: 'Como a IA está transformando negócios', date: '2 horas atrás' },
        { id: 2, type: 'career', action: 'Vaga atualizada', title: 'Desenvolvedor Full Stack', date: '1 dia atrás' },
        { id: 3, type: 'solution', action: 'Nova solução adicionada', title: 'Sistema de Gestão Integrada', date: '3 dias atrás' },
        { id: 4, type: 'blog', action: 'Post editado', title: 'Segurança Cibernética em 2024', date: '5 dias atrás' },
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  // Função para determinar a cor do ícone baseado no tipo de atividade
  const getActivityColor = (type) => {
    switch(type) {
      case 'blog': return 'bg-purple-500';
      case 'career': return 'bg-green-500';
      case 'solution': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  // Função para determinar o ícone baseado no tipo de atividade
  const getActivityIcon = (type) => {
    switch(type) {
      case 'blog':
        return (
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'career':
        return (
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'solution':
        return (
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  // Dados para o gráfico de sessões
  const sessionData = [
    { name: 'Organic', value: '1,43k', percentage: '45%' },
    { name: 'Direct', value: '983', percentage: '30%' },
    { name: 'Referral', value: '490', percentage: '15%' },
    { name: 'Social', value: '294', percentage: '10%' }
  ];

  // Dados para estatísticas de dispositivo
  const deviceStats = {
    uptime: '99.4%',
    firstSeen: '12 Jun 2024',
    collectedTime: '23h 18m',
    memorySpace: '478 GB / 2TB'
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Kenneth Osborne</h1>
          <div className="text-sm text-gray-500">Seu último login: {lastLogin}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded-md text-sm">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Últimos 7 dias</span>
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded-md text-sm">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>Exportar</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded-md text-sm">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resumo de Tráfego */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {trafficSummary.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-500 text-sm">{item.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${item.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {item.change}
              </span>
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Sessions By Channel */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Sessões por Canal</h2>
          <div className="flex items-center justify-center mb-4 relative">
            <div className="w-32 h-32 rounded-full border-8 border-blue-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-gray-500">Pontuação</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {sessionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{item.value}</span>
                  <span className="text-xs text-gray-500">({item.percentage})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Eventos</h2>
          <div className="flex space-x-4 mb-4">
            <button className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-800">Crítico</button>
            <button className="text-xs px-2 py-1 rounded-md bg-red-100 text-red-800">Erro</button>
            <button className="text-xs px-2 py-1 rounded-md bg-orange-100 text-orange-800">Aviso</button>
          </div>
          <div className="h-40 flex items-center justify-center">
            <div className="w-full h-32 relative">
              {/* Gráfico simplificado */}
              <div className="absolute inset-0 flex items-end justify-between">
                <div className="w-2 bg-blue-500 h-20 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-24 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-16 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-28 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-22 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-18 rounded-t"></div>
                <div className="w-2 bg-blue-500 h-26 rounded-t"></div>
              </div>
              <div className="absolute inset-0 flex items-end justify-between opacity-50">
                <div className="w-2 bg-red-500 h-16 rounded-t"></div>
                <div className="w-2 bg-red-500 h-20 rounded-t"></div>
                <div className="w-2 bg-red-500 h-12 rounded-t"></div>
                <div className="w-2 bg-red-500 h-24 rounded-t"></div>
                <div className="w-2 bg-red-500 h-18 rounded-t"></div>
                <div className="w-2 bg-red-500 h-14 rounded-t"></div>
                <div className="w-2 bg-red-500 h-22 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Estatísticas do Dispositivo</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Tempo de Atividade</span>
              <span className="font-medium">{deviceStats.uptime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Primeiro Acesso</span>
              <span className="font-medium">{deviceStats.firstSeen}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tempo Coletado</span>
              <span className="font-medium">{deviceStats.collectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Espaço de Memória</span>
              <span className="font-medium">{deviceStats.memorySpace}</span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Estatísticas do Conteúdo */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Estatísticas do Conteúdo</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-md mr-3">
                  <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Soluções</div>
                  <div className="font-semibold">{stats.solutions}</div>
                </div>
              </div>
              <Link to="/admin/solutions" className="text-blue-600 hover:text-blue-800">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-md mr-3">
                  <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Vagas</div>
                  <div className="font-semibold">{stats.careers}</div>
                </div>
              </div>
              <Link to="/admin/careers" className="text-green-600 hover:text-green-800">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-md mr-3">
                  <svg className="h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Posts do Blog</div>
                  <div className="font-semibold">{stats.blog}</div>
                </div>
              </div>
              <Link to="/admin/blog" className="text-purple-600 hover:text-purple-800">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Atividades Recentes */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Atividades Recentes</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">Ver Todas</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`p-2 rounded-md ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{activity.action}</h3>
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                  <p className="text-gray-600">{activity.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Carregar Mais
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

// Dados para o gráfico de sessões
const sessionData = [
  { name: 'Organic', value: '1,43k', percentage: '45%' },
  { name: 'Direct', value: '983', percentage: '30%' },
  { name: 'Referral', value: '490', percentage: '15%' },
  { name: 'Social', value: '294', percentage: '10%' }
];

// Dados para estatísticas de dispositivo
const deviceStats = {
  uptime: '99.4%',
  firstSeen: '12 Jun 2024',
  collectedTime: '23h 18m',
  memorySpace: '478 GB / 2TB'
};

export default Dashboard;