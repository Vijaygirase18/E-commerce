
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/products';
import Footer from './components/Footer';
import Aboutus from './components/About us';
import ContactForm from './components/Contact us';
import Product from './components/product';
import LoginForm from './components/Loginform';
import RegistrationForm from './components/register';
import CartPage from './components/cart';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/products' Component={Products} />
        <Route exact path='/products/:id' Component={Product} />
        <Route exact path='/About us' Component={Aboutus} />
        <Route exact path='/Contact us' Component={ContactForm} />
        <Route exact path='/Loginform' Component={LoginForm} />
        <Route exact path='/register' Component={RegistrationForm} />
        <Route exact path='/cart' Component={CartPage} />

        


      </Routes>
      <Footer />


    </>
  );
}

export default App;
