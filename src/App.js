import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Stocks from './pages/Stocks';
import StockDetails from './pages/StockDetails';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/stocks/:symbol' element={<StockDetails />} />
      </Routes>
    </div>
  );
}

export default App;
