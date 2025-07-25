
import AuroraWrapper from './components/AuroraWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen ">
      <AuroraWrapper />
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
