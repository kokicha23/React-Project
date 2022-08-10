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
import { reducerAuthFunction } from './context/reducer/authReducer';
import { initialAuthState } from './context/reducer/authInitialState'
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';

function App() {

  return (
    <AuthProvider initialState={initialAuthState} reducer={reducerAuthFunction}>
      <div className="App">
        <header>
          <Header />
          <Search />
        </header>

        <div className='main'>
          <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/' element={<WelcomePage />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/create' element={<Create />}></Route>
            <Route exact path='/catalog' element={<Catalog />}></Route>
            <Route exact path='catalog/details/:id' element={<Details />}></Route>
            <Route exact path='catalog/edit/:id' element={<Edit />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

