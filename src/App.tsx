import React from 'react';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contatos } from './pages/Imagens/Contatos';
import { Servicos } from './pages/Biografia/Biografia';
import './App.css'
import { Sobre } from './pages/Sobre/Sobre';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path=''element={<Home/>}></Route>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
