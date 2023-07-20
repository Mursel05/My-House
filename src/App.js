import React from 'react'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import NewHouses from "./pages/newHouses";
import OldHouses from "./pages/oldHouses";
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About Us' element={<About/>}/>
        <Route path='/New Houses' element={<NewHouses/>}/>
        <Route path='/Old Houses' element={<OldHouses/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App