import './App.css';
import React, { useState, useEffect } from 'react';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { Search } from './components/common/search/Search';
import { Login } from './components/login/Login';
import { Routes, Route } from "react-router-dom"
import { Register } from './components/register/Register';
import "./App.css"
import { Create } from './components/create/Create';
import { Catalog } from './components/catalog/Catalog';
import { WelcomePage } from './components/welcomePage/WelcomePage';
import { About } from './components/about/About';
import { AuthProvider } from './context/authContext';
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';
import { Profile } from './components/profile/Profile';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <header>
          <Header />
          <Search />
        </header>

        <div className='main'>
          <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/' element={<WelcomePage />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='catalog/details/:id' element={<Details />}></Route>
            <Route path='catalog/edit/:id' element={<Edit />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

