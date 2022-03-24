import './App.css';
import { Cards } from './components/Cards';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Newsletter } from './components/Newsletter';



function App() {

  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Cards/>
     <Content/>
     <Newsletter/>
    </div>
  );
}

export default App;
