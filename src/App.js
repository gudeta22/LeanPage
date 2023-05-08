
import './App.css';
import Product from './Components/Products/Product';
import Nav from './Components/Products/Nav';
import Applications from './Components/Products/Applications';



function App() {
  return (
    <div className="App h-screen bg-[#f5f3f3]">
          <Nav />
          <Product />
          <Applications />
          
        
    </div>
  );
}

export default App;
