import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import Blog from './components/Blog';

// Importações para área administrativa
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import PrivateRoute from './admin/components/PrivateRoute';
import { AuthProvider } from './admin/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rotas administrativas */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            
            {/* Rotas públicas */}
            <Route path="/*" element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Services />
                      <About />
                      <Technology />
                      <Portfolio />
                      <Contact />
                    </>
                  } />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
