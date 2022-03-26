import './App.css';
import { Header } from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

