import './App.css'
import ActiveList from './componenets/ActiveList';
import ActiveListOfProducts from './componenets/ActiveListOfProducts';
import Counter from './componenets/Counter';


function App() {
  return (
    <div>
      <h1 className='mainHeading'>My React App</h1>
      <ActiveList />
      <ActiveListOfProducts />
      <Counter title='My Counter App 1' initialValue={0} />
      <Counter title='My Counter App 2' initialValue={98} />
    </div>
  );
}

export default App;
