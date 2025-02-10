import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Products from './Components/Products';
import Shirts from './Components/Shirts';
import Jeans from './Components/Jeans';
import Users from './Components/Users';
import UsersDetails from './Components/UsersDetails';
import Admin from './Components/Admin';
import Search from './Components/Search';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route index element={<Shirts />}></Route>
          <Route path='shirts' element={<Shirts />} />
          <Route path='jeans' element={<Jeans />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />

        <Route path='/users' element={<Users />}>
          <Route path=':id' element={<UsersDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>


    </>
  );
}

export default App;
