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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AllOrders from './Pages/Dashboard/AllOrders';
import ManageParts from './Pages/Dashboard/ManageParts';
import AddParts from './Pages/Dashboard/AddParts';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Testimonials from './Pages/Home/Testimonials';

function App() {
  return (
    <div className='max-w-7xl  mx-auto px-12 ' >
      {/* className='bg-neutral-content' */}
      <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parts" element={<AllParts />} />
        <Route path="/parts/:partsId" element={<RequireAuth><OrderPage /></RequireAuth>} />
        <Route path="/revew" element={<Partses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allparts" element={<AllParts />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addareview' element={<AddAReview></AddAReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageparts' element={<RequireAdmin><ManageParts></ManageParts></RequireAdmin>}></Route>
          <Route path='allorders' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
          <Route path='addparts' element={<RequireAdmin><AddParts></AddParts></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
