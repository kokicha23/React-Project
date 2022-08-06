import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { Search } from './components/common/search/Search';
import { Login } from './components/login/Login';
import "./App.css"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Search />
      </header>
      <div className='main'>

        <Routes>
          
          
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
