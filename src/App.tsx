import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
<<<<<<< HEAD
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    document.title = 'Avinash Reddy Manne | Data Scientist';
=======
import Blog from './components/Blog';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { useVisitorTracking } from './hooks/useVisitorTracking';

function App() {
  useVisitorTracking('home');

  useEffect(() => {
    document.title = 'Portfolio | Your Name';
>>>>>>> 520b41b (Initial portfolio deployment with AI/ML experience and GenAI projects)
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-dark text-text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Blog />
          <Skills />
<<<<<<< HEAD
=======
          <Certifications />
>>>>>>> 520b41b (Initial portfolio deployment with AI/ML experience and GenAI projects)
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;