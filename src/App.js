import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Contact } from './Contact';
import { About } from './About';
import { Footer } from './Footer';

function App() {
  return (
   <>
     <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/navbar' element={<Navbar/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/footer' element={<Footer/>}/>
                </Routes>
            </BrowserRouter>
   </>
  );
}

export default App;
