import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import BestSeller from './components/BestSeller/BestSeller';
import Footer from './components/Footer/Footer';
import Sale from './components/Sale/Sale'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/bestseller" element={<BestSeller/>} />
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
        <Main/>
        <BestSeller/>
        <Sale/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
