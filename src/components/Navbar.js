import React, { useState } from 'react';

const topMenu = [
  { name: "Soluções", href: "#solutions" },
  { name: "Carreiras", href: "#careers" },
  { name: "Blog", href: "#blog" },
  { name: "synthaicorp@proton.me", href: "mailto:synthaicorp@proton.me", isEmail: true },
];

const mainMenu = [
  { name: "Início", href: "#", active: true },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Tecnologia", href: "#technology" },
  { name: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 md:px-12 py-2 border-b border-gray-100 bg-gray-50">
        <div className="text-sm text-gray-500">Transformando empresas com tecnologia desde 2024</div>
        <div className="hidden md:flex items-center gap-6">
          {topMenu.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`text-sm text-gray-500 hover:text-blue-600 transition-colors ${item.isEmail ? "flex items-center gap-1" : ""}`}
            >
              {item.isEmail && <span className="text-blue-600">✉</span>}
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <div className="flex items-center">
          <a href="#" className="block">
            <img src="/logo.png" alt="Synth Corp Logo" className="h-16" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-blue-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8">
            {mainMenu.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={`font-medium hover:text-blue-600 transition-colors ${item.active ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
            Contato
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-100">
          <ul className="space-y-4">
            {mainMenu.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={`block font-medium hover:text-blue-600 transition-colors ${item.active ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
