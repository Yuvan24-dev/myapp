import './App.css';
import Herojs from './Hero.js';
import SliderSection from './Slider.js';
import AboutSection from './Find.js';

function App() {
  return (
   <div className='px-sm-4 px-xl-5 py-sm-4 py-xl-4 '>
    <section className='hero_area Full_body'>
    <Herojs />    
    <SliderSection />
    <AboutSection />
    </section>
    </div>
  );
}
export default App;


