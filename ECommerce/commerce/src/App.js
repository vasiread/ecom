import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import CartPage from './Pages/CartPage/CartPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartPage />} />

          

        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
