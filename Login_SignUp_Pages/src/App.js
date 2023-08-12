import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path = '/' element = {<Signin />}></Route>
       <Route path = '/Register' element = {<Register />}></Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App