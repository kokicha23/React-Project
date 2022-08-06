import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { Search } from './components/common/search/Search';
import { Login } from './components/login/Login';
import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Search />
      </header>
      <div className='main'>
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
