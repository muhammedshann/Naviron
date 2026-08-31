import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About onNavigate={setActivePage} />;
      case 'services':
        return <Services onNavigate={setActivePage} />;
      case 'blog':
        return <Blog onNavigate={setActivePage} />;
      case 'contact':
        return <Contact onNavigate={setActivePage} />;
      case 'home':
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 relative">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">{renderPage()}</main>
      <FloatingWhatsApp />
      <Footer onNavigate={setActivePage} />
    </div>
  );
}
