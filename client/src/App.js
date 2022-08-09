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
function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);

  return (

    !spinner && <div className="App">
      <header>
        <Header />
        <Search />
      </header>

      <div className='main'>
        <Routes>
          <Route exact path='/about' element={spinner ? <p>Loading...</p> : <About />}></Route>
          <Route exact path='/welcomePage' element={<WelcomePage />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/create' element={<Create />}></Route>
          <Route exact path='/catalog' element={<Catalog />}></Route>
        </Routes>

      </div>

      <Footer />
    </div>
  );
}

export default App;

