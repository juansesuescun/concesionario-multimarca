import Index from 'pages/admin/Index';
import './App.css';
import 'assets/tailwind.css'
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { BrowserRouter as Router,  Route, Routes,  } from 'react-router-dom';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';

/* Con este código se hacen imports la libreria reac-router-dom para agregar las rutas. Además se importan los layouts y páginas necesarias
para proceder a hacer un ruteo, a cada una de las paginas, con sus respectivas rutas anidadas, yo se que esto no lo pidieron
pero lo hice a modo de práctica porque la librería cambió y quería aprender las nuevas funcionalidades.

Abajo, se hace el ruteo de acuerdo a la documentación de la libreria react-router-dom.
*/


const App =() => {
  return (
    <div>      
      <Routes>        
        <Route element ={<AuthLayout/>}>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/registro' element ={<Registro/>}/>
        </Route> 
        <Route element = {<PrivateLayout/>} exact>
          <Route path='/admin' element ={<Index/>}/>
          <Route path='/admin/vehiculos' element ={<Vehiculos/>}/>
          <Route path='/admin/clientes' element ={<Clientes/>}/>
        </Route>  
        <Route path='/' element = {<PublicLayout><Index/></PublicLayout>} exact/>       
      </Routes>      
    </div>
  );
}

export default App;
