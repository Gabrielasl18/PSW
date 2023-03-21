import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/index.js';
import Home from './components/Pages/Home/index.js'
import Carrinho from './components/Pages/Carrinho/index.js'
import UserRegistration from './components/Pages/UserRegistration/UserRegistration.js'
import PetRegistration from './components/Pages/PetRegistration/index.js'
import PetSelection from './components/Pages/PetSelection/index.js'
import Loja from './components/Pages/Loja/index.js'
import EstablishmentRegistration from './components/Pages/OptionRegistration/index.js'
import OptionRegistration from './components/Pages/OptionRegistration/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/registrarUsuario" element={<UserRegistration/>}/>
        <Route path="/registrarPet" element={<PetRegistration/>}/>
        <Route path="/selecionarPet" element={<PetSelection/>}/>
        <Route path="/loja" element={<Loja/>}/>
        <Route path="/registrarEstabelecimento" element={<OptionRegistration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
