import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {Escolha} from './pages/Escolha'
import {Criar} from './pages/Criar'
import {Listar} from './pages/Listar'
import {Vencedor} from './pages/Vencedor'
import {Nav} from './pages/Navegador'
import {Sorteio} from './pages/Sorteio'

function App() {
  return (
    <Router> 
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/escolha' element={<Escolha/>}/>
        <Route path='/criar' element={<Criar/>}/>
        <Route path='/listar' element={<Listar/>}/>
        <Route path='/vencedor' element={<Vencedor/>}/>
        <Route path='/sorteio' element={<Sorteio/>}/>
        <Route path='/*' element={<h1 style={{ alignContent:'center', textAlign: 'center', fontSize: '100px', color: '#35185A', marginTop: '250px'}} >PÁGINA NÃO ENCONTRADA :/</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;