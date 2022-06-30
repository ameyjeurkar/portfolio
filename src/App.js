import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
