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
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Payment from './Pages/Parts/Payment';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parts" element={<AllParts />} />
        <Route path="/parts/:partsId" element={<OrderPage />} />
        <Route path="/revew" element={<Partses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allparts" element={<AllParts />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
