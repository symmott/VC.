
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main className="fade-in">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="bg-gray-50">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
      <footer className="py-12 border-t border-gray-100 bg-white text-center">
        <p className="text-gray-400 text-xs mono">© 2024 Visualizing Clarity. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
