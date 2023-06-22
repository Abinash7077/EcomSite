import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Footer from './Pages/Footer';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <Header/>
     

      
    <Routes>
      <Route path='/About' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>

    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
