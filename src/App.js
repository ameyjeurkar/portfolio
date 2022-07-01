import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Portfolio from './components/Portfolio/Portfolio';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutMe />
      <Skills />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
