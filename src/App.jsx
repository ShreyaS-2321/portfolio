
import AuroraWrapper from './components/AuroraWrapper';
import Navbar from './components/Navbar';
import Hero from './components/hero';

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <AuroraWrapper />
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
