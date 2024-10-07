import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
