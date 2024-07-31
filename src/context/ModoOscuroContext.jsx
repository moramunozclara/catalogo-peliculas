import {createContext, useState} from 'react';


// creación del contexto para el tema
export const ModoOscuroContext = createContext();


const ModoOscuroContext = () => {

    const [tema, setTema] = useState("light");

    const toggleTema = () => {
      setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
    }; }

    return (  );
}
 
export default ModoOscuroContext;