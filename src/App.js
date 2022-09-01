import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'




function App() {
  return (
<BrowserRouter>
<Navigation/>
<Routes>
  <Route exact path='/' element={<About/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/contact' element={<Contact/>}/>
  {/* <Route path='/resume' element={<Resume/>}/> */}
</Routes>
<Footer></Footer>
</BrowserRouter>
  );
}

export default App;
