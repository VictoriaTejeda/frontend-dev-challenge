import './App.css';
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Publicidad } from './components/Publicidad';


function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Cards/>
     <Publicidad/>
    </div>
  );
}

export default App;
