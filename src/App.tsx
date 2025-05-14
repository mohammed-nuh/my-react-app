import './App.css'
import BookInfo from './componenets/BookInfo';
import MovieInfo from './componenets/MovieInfo';
import MovieList from './componenets/MovieList';
import ProductList from './componenets/ProductList';
import UserProfile from './UserProfile';


function App() {
  return (
    <div>
      <h1 className='mainHeading'>My React App</h1>
      <hr />
      <ProductList />
      <hr />
      <MovieList />

      {/* <UserProfile name="Nuh" age={19} qualifications={["BCA with Data Analytics", "MCA with AI and ML", "Specialist in React"]}/>
      <BookInfo name="Atomic Habits" author="James Clear" year={2006} price={1500} />
      <MovieInfo name="3-Idiots" director="Rajkumar Hirani" year={2009} isRecommended={true} /> */}
    </div>
  );
}

export default App;
