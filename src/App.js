import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import WorkExperience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
