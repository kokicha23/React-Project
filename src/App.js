import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { Search } from './components/common/search/Search';
import { Login } from './components/login/Login';
import { Routes, Route } from "react-router-dom"
import { Register } from './components/register/Register';
import "./App.css"
function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Search />
      </header>
      <div className='main'>

        <Routes>
          
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
