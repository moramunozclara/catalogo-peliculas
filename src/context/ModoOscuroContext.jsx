import {createContext, useState, useContext} from 'react';


// creación del contexto para el tema

const ModoOscuroContext = createContext();


export const ModoOscuroContextProvider = ({children}) => {

        const [tema, setTema] = useState([]);
        const toggleTema = () => {
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
    }; }

    return ( 
        <ModoOscuroContext
    Provider>
            {children}
        </ModoOscuroContext
    Provider>

     );
};
 
export default ModoOscuroContextProvider;