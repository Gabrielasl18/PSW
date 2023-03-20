import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/index.js';
import Home from './components/Pages/Home/index.js'
import Carrinho from './components/Pages/Carrinho/index.js'
import UserRegistration from './components/Pages/UserRegistration/UserRegistration.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/registrar" element={<UserRegistration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
