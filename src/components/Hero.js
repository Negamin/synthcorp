import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-blue-600">Soluções tecnológicas</span> para transformar seu negócio
            </h1>
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              Desenvolvemos tecnologias inovadoras que impulsionam a transformação digital
              e o crescimento sustentável da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors shadow-md font-medium text-center">
                Solicitar Orçamento
              </a>
              <a href="#services" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-md hover:bg-gray-50 transition-colors shadow-sm font-medium text-center">
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Right side - Small Animated Chip SVG */}
          <div className="flex justify-center items-center">
            <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center">

              {/* Chips menores ao redor (mais quantidade e novas posições/cores) */}
              <div className="absolute left-6 top-10 animate-orbit1">
                <svg width="70" height="70" viewBox="0 0 512 512" className="opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="120" y="120" width="272" height="272" rx="40" fill="#f4f8ff" stroke="#2196f3" strokeWidth="10"/>
                </svg>
              </div>
              <div className="absolute right-8 top-24 animate-orbit2">
                <svg width="50" height="50" viewBox="0 0 512 512" className="opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="160" y="160" width="192" height="192" rx="32" fill="#e3e3e3" stroke="#1976d2" strokeWidth="8"/>
                </svg>
              </div>
              <div className="absolute left-20 bottom-8 animate-orbit3">
                <svg width="60" height="60" viewBox="0 0 512 512" className="opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="200" y="200" width="112" height="112" rx="16" fill="#e3e3e3" stroke="#1565c0" strokeWidth="6"/>
                </svg>
              </div>
              <div className="absolute right-10 bottom-14 animate-orbit4">
                <svg width="55" height="55" viewBox="0 0 512 512" className="opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="210" y="210" width="92" height="92" rx="14" fill="#e3e3e3" stroke="#0d47a1" strokeWidth="5"/>
                </svg>
              </div>
              <div className="absolute left-1/2 -top-6 animate-orbit5">
                <svg width="30" height="30" viewBox="0 0 512 512" className="opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="230" y="230" width="52" height="52" rx="8" fill="#e3e3e3" stroke="#1565c0" strokeWidth="4"/>
                </svg>
              </div>
              <div className="absolute right-1/2 -bottom-8 animate-orbit6">
                <svg width="48" height="48" viewBox="0 0 512 512" className="opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="240" y="240" width="32" height="32" rx="6" fill="#e3e3e3" stroke="#1976d2" strokeWidth="3"/>
                </svg>
              </div>

              {/* SVG Chip Icon - Chip principal animado (movimento aleatório, com sombra) */}
              <svg
                className="relative z-10 animate-mainchip-random drop-shadow-chip"
                width="320"
                height="320"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="96" y="96" width="320" height="320" rx="48" fill="#fff" stroke="#222" strokeWidth="16"/>
                {/* Pins */}
                {Array.from({length: 8}).map((_, i) => (
                  <rect key={i} x={60 + i*48} y="64" width="16" height="32" rx="4" fill="#222"/>
                ))}
                {Array.from({length: 8}).map((_, i) => (
                  <rect key={i+8} x={60 + i*48} y="416" width="16" height="32" rx="4" fill="#222"/>
                ))}
                {Array.from({length: 8}).map((_, i) => (
                  <rect key={i+16} x="64" y={60 + i*48} width="32" height="16" rx="4" fill="#222"/>
                ))}
                {Array.from({length: 8}).map((_, i) => (
                  <rect key={i+24} x="416" y={60 + i*48} width="32" height="16" rx="4" fill="#222"/>
                ))}
                {/* Inner chip */}
                <rect x="176" y="176" width="160" height="160" rx="24" fill="#e3e3e3" stroke="#222" strokeWidth="8"/>
                {/* CPU Text */}
                <text x="210" y="250" fontFamily="monospace" fontWeight="bold" fontSize="64" fill="#222">CPU</text>
                {/* Triangle Mark */}
                <polygon points="200,320 240,320 200,360" fill="#222"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animation */}
      <style jsx>{`
        @keyframes mainchip-random {
          0% { transform: translate(0px, 0px) scale(1); }
          13% { transform: translate(-18px, -10px) scale(1.01); }
          27% { transform: translate(22px, 8px) scale(1.02); }
          41% { transform: translate(-14px, 20px) scale(0.98); }
          57% { transform: translate(18px, -18px) scale(1.03); }
          71% { transform: translate(-12px, 13px) scale(1.01); }
          85% { transform: translate(8px, -16px) scale(1.02); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-mainchip-random {
          animation: mainchip-random 8s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes orbit1 {
          0% { transform: translateY(0) rotate(-2deg) scale(1); }
          50% { transform: translateY(-18px) rotate(6deg) scale(1.07); }
          100% { transform: translateY(0) rotate(-2deg) scale(1); }
        }
        .animate-orbit1 {
          animation: orbit1 3.2s infinite ease-in-out;
        }
        @keyframes orbit2 {
          0% { transform: translateX(0) scale(1); }
          50% { transform: translateX(20px) scale(1.1); }
          100% { transform: translateX(0) scale(1); }
        }
        .animate-orbit2 {
          animation: orbit2 2.6s infinite ease-in-out;
        }
        @keyframes orbit3 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(14px) scale(0.95); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-orbit3 {
          animation: orbit3 3.8s infinite ease-in-out;
        }
        @keyframes orbit4 {
          0% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-18px) scale(1.08); }
          100% { transform: translateX(0) scale(1); }
        }
        .animate-orbit4 {
          animation: orbit4 3.5s infinite ease-in-out;
        }
        @keyframes orbit5 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-orbit5 {
          animation: orbit5 2.9s infinite ease-in-out;
        }
        @keyframes orbit6 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(10px) scale(1.04); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-orbit6 {
          animation: orbit6 3.1s infinite ease-in-out;
        }
        .drop-shadow-chip {
          filter: drop-shadow(0 8px 18px rgba(30,40,80,0.18)) drop-shadow(0 2px 8px rgba(30,40,80,0.10));
        }
      `}</style>
    </section>
  );
};

export default Hero;
