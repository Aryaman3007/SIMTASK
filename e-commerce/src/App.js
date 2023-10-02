import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import BestSeller from './components/BestSeller/BestSeller';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <BestSeller/>
      <Footer/>
    </div>
  );
}

export default App;
