import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
import Commande from "./Pages/Commande";
import Client from "./Pages/Client";
import Fournisseur from "./Pages/Fournisseur";
import Personelle from './Pages/Personelle';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
import Apropos from './Pages/Apropos';
import Register from './Pages/Register';
import Login from './Pages/Login';

import PrivateRoute from "./Pages/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

     
        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />

        <Route path='/commande' element={
          <PrivateRoute>
            <Commande />
          </PrivateRoute>
        } />

        <Route path='/personelle' element={
          <PrivateRoute>
            <Personelle />
          </PrivateRoute>
        } />

        <Route path='/fournisseur' element={
          <PrivateRoute>
            <Fournisseur />
          </PrivateRoute>
        } />


        <Route path='/client' element={
          <PrivateRoute>
            <Client />
          </PrivateRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;