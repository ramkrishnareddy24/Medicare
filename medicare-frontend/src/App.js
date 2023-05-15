import './App.css';
import Navbar from './components/Navbar';
import UserHome from './components/user/UserHome';
import Login from './components/Login';
import AdminHome from './components/admin/AdminHome';
import { Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/admin/UpdateProduct';
import AddProduct from './components/admin/AddProduct';
import Orders from './components/admin/Orders';
import OrderSummary from './components/user/OrderSummary';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/addProduct' element={<AddProduct/>} />
        <Route path='/admin/updateProduct/:id' element={<UpdateProduct/>} />
        <Route path='/user' element={<UserHome />}/>
        <Route path='/user/checkout' element={<OrderSummary/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
      </Routes>
    </div>
  );
}

export default App;
