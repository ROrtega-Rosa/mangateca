import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './paginas/login';
import Registro from './paginas/registro';
import Main from './paginas/main';
import './App.css';
import { Error404 } from './componentes/Error404';
import Mangas from './paginas/mangas';
import Contacto from './paginas/contacto';
import Novedades from './paginas/novedades';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/mangas' element={<Mangas/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/novedades' element={<Novedades/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
