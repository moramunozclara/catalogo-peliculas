// LAYOUT CON CREATE CONTEXT

//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
// 4º importar el create context para el tema
// 5ª meter todo el return dentro del context

import { Outlet, } from "react-router-dom";
import './css/Layout.css';
import './css/catalogo-peliculas.css';
import { ModoOscuroContext } from './context/ModoOscuroContext' // Importar el contexto


import {createContext, useState} from 'react';

// creación del contexto para el tema
export const ModoOscuroContext = createContext();

const Layout = () => {
      const [tema, setTema] = useState("light");

      const toggleTema = () => {
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
      };

  return ( 

    <ModoOscuroContext.Provider value={{ tema, toggleTema }}>
      <>
        <header>
          <h1>Estoy en el inicio</h1>
        </header>
          <main>
              <Outlet/>
          </main>
      </>

    </ModoOscuroContext.Provider>
   );
}
 
export default Layout;