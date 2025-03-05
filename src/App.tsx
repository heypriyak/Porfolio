import { HelmetProvider } from 'react-helmet-async';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SEO } from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;