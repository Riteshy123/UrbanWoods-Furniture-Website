import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Homefurniture from './pages/Homefurniture';
import Officefurniture from './pages/Officefurniture';
import Outdoorfurniture from './pages/Outdoorfurniture';
import HeaderNavbar from './components/HeaderNavbar';


function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/> 
          <Route exact path='/about' element={<About/>}/> 
          <Route exact path='/home' element={<Homefurniture />}/> 
          <Route exact path='/office' element={<Officefurniture />}/> 
          <Route exact path='/outdoor' element={<Outdoorfurniture />}/> 
          <Route exact path='/contact' element={<Contact />}/>                 
        </Routes>
      </Router>

    <Footer />    
    </div>
  );
}

export default App;