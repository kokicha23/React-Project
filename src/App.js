import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { Search } from './components/common/search/Search';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Search />
      </header>
      <Footer />
    </div>
  );
}

export default App;
