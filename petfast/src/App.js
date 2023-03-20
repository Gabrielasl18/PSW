import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/index.js';
import Home from './components/Pages/Home/index.js'
import Carrinho from './components/Pages/Carrinho/index.js'
import UserRegistration from './components/Pages/UserRegistration/UserRegistration.js'
import EstablishmentRegistration from './components/Pages/OptionRegistration/index.js'
import OptionRegistration from './components/Pages/OptionRegistration/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/registrar" element={<UserRegistration/>}/>
        <Route path="/registrarEstabelecimento" element={<OptionRegistration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
