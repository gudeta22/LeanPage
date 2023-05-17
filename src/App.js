import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';
import Applications from './componets/Applications';
import Product from './componets/Product';

function App() {
  return (
    <div className="App">
       <Nav /> 
       <Product />
       <Applications />
    </div>
  );
}

export default App;
