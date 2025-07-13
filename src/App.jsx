
import AuroraWrapper from './components/AuroraWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen ">
      <AuroraWrapper />
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
