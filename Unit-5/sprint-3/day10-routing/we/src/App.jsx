
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Hello } from './components/Hello';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/:userid" element={<UserDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
       
    </div>
  );
}

export default App;
