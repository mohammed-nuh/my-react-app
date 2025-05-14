import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
import ProductList from './componenets/ProductList';
import MovieList from './componenets/MovieList';


function App() {
  return (
    <BrowserRouter>
      <h1 className='mainHeading'>My React App</h1>
      <nav>
        <Link to='/' className='py-3 px-5 myNavButton'>Home</Link>
        <Link to='/products' className='py-3 px-5 myNavButton'>Products</Link>
        <Link to='/movies' className='py-3 px-5 myNavButton'>Movies</Link>
        <Link to='/contact' className='py-3 px-5 myNavButton'>Contact</Link>
        <Link to='/about' className='py-3 px-5 myNavButton'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/movies' element={<MovieList />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
