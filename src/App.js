import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AllParts from './Pages/Parts/AllParts';
import OrderPage from './Hooks/OrderPage';
import Footer from './Pages/Home/Footer';
import Partses from './Pages/Parts/Partses';
import Contact from './Pages/Home/Contact';

function App() {
  return (
    <div>
      <div className=' px-12'>
        <Navbar ></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parts" element={<Partses />} />
        <Route path="/revew" element={<Partses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allparts" element={<AllParts />} />
        <Route path="/orderpage" element={<OrderPage />} />
      </Routes>
      <div className=' px-12'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
