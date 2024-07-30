import { Outlet, } from "react-router-dom";
import './css/Layout.css';
import './css/catalogo-peliculas.css';


const Layout = () => {


  return ( 
    <>
    <header>
      <h1>Estoy en el inicio</h1>
    </header>
      <main>
          <Outlet/>
      </main>
    </>
   );
}
 
export default Layout;