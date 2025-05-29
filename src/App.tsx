import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
import ProductList from './componenets/ProductList';
import MovieList from './componenets/MovieList';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import QuoteList from './componenets/QuoteList';
import Counter from './componenets/Counter';
import RecipeDetails from './componenets/RecipeDetails';
import RecipeListWithSearch from './componenets/RecipeListWithSearch';
import RecipesDashboard from './componenets/RecipesDashboard';
import EditRecipe from './componenets/EditRecipe';
import AddRecipe from './componenets/AddRecipe';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/counter' element={<Counter title="My Counter App" initialValue={0} />}></Route>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/movies' element={<MovieList />}></Route>
          <Route path='/quotes' element={<QuoteList />}></Route>
          <Route path='/recipes' element={<RecipeListWithSearch />}></Route>
          <Route path='/recipes-dashboard' element={<RecipesDashboard />}></Route>
          <Route path='/recipes/:id' element={<RecipeDetails />}></Route>
          <Route path='/edit-recipe/:id' element={<EditRecipe />}></Route>
          <Route path='/add-recipe' element={<AddRecipe />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
