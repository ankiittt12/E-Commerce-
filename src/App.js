import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Content from './content';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shirt from './shirt';
import Shoes from './shoes';
import Watches from './watches';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/shirt" element={<Shirt/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/watches" element={<Watches/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
