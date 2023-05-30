import './component/Header/Header'
import './App.css';
import './component/Hero/Hero'
import {Header} from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import {Servis} from './component/servis/Servis';
import {Work} from './component/Work/Work';
import {Place} from './component/Place/Place';
import { Footer } from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Servis/>
      <Work/>
      <Place/>
      <Footer/>
    </div>
  );
}

export default App;
