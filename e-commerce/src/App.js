import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';

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
