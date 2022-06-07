import logo from './logo.svg';
import './App.css';
import './style/output.css'
import Banner from './components/Banner';
import About from './components/About';
import Roadmap from './components/Roadmap';
import '../node_modules/@fortawesome/fontawesome/styles.css'
import Tokenomics from './components/Tokenomics';
import Footer from './components/footer';
function App() {
  return (
    <div className='static'>
      <Banner/>
      <About/>
      <Roadmap/>
      <Tokenomics/>
      <Footer/>
    </div>
  );
}

export default App;
