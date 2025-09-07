import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="-mt-48 -mb-12 bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
        <div className="bg-[#972f44] ">
          <Projects />

        </div>

          <div
            className="bg-[#d3cbc8] ">
            <Experience />
          </div>
        <div className="relative z-0 bg-gradient-to-r from-[#1E3A5F] via-[#3F5879] to-[#B22234]">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
