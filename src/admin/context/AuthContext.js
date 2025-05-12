import React, { createContext, useState, useEffect, useContext } from 'react';

// Contexto de autenticação
const AuthContext = createContext();

// Provider do contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Verificar se há um usuário logado no localStorage ao iniciar
  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Função de login
  const login = (email, password) => {
    // Credenciais fixas para demonstração
    if (email === 'admin@synthcorp.com' && password === 'admin123') {
      const user = { email, name: 'Administrador', role: 'admin' };
      localStorage.setItem('adminUser', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    }
    return Promise.reject(new Error('Credenciais inválidas'));
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem('adminUser');
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};