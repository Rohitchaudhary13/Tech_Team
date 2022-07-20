import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq/>} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
