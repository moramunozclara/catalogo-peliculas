import {useState, useEffect, useContext} from 'react';
import { ModoOscuroContext } from '../Layout' // Importar el contexto



const CatalogoPeliculas = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    // Función para alternar el tema
    const {tema, toggleTema} = useContext(ModoOscuroContext); // Consumir el contexto


    useEffect(() => {
        const getDatos = async() => {
            try {
                const respuestaPeliculas = await fetch ('/backend/API/v1/peliculas.json');
                const objetoPeliculas = await respuestaPeliculas.json();
                setPeliculas(objetoPeliculas.peliculas);

                const respuestaUsuarios = await fetch ('/backend/API/v1/usuarios.json');
                const objetoUsuarios = await respuestaUsuarios.json();
                setUsuarios(objetoUsuarios.usuarios);

            }
            catch (error) {
                console.error('Error al obtener las películas', error)
            }
        };

        

        getDatos(); // obtén las películas

        
    }, []);


    // Filtros para mostrar según usuario
    // peliculas de usuario equivale a peliculadas filtradas por su key idUsuario igual a el nombre de usuario
    const peliculasUser1 = peliculas.filter(pelicula => pelicula.idUsuario === 'user1');
    const peliculasUser2 = peliculas.filter(pelicula => pelicula.idUsuario === 'user2');
    

    return ( 
        <div className={tema === "dark" ? 'oscuro' : 'claro'}>
                  <button onClick={toggleTema}>
                    Cambiar a {tema === "dark" ? 'Tema Claro' : 'Tema Oscuro'}
                    </button>

            <h2>Este es tu catálogo de películas
            {/* https://www.freecodecamp.org/news/how-to-make-an-image-search-app-in-react/ */}
            </h2>


            <div className='ContainerPeliculas'>
                
            <h3>Todas las películas</h3>
            <ul className="CatalogoGrid"> 
                {peliculas.map((pelicula) => (
                    <li key={pelicula.id}>
                        <img src={pelicula.imagen} alt={pelicula.titulo}/>
                        {pelicula.titulo}</li>
                ))}
            </ul>
            </div>

            <div className='ContainerPeliculas'>
            <h3>Películas de Clara (user1)</h3>
            <ul className="CatalogoGrid"> 
                {peliculasUser1.map((pelicula) => (
                    <li key={pelicula.id}><img src={pelicula.imagen} alt={pelicula.titulo}/>{pelicula.titulo}</li>
                ))}
            </ul>
            </div>

            <div className='ContainerPeliculas'>
            <h3>Películas de Roberto (user2)</h3>
            <ul className="CatalogoGrid"> 
                {peliculasUser2.map((pelicula) => (
                    <li key={pelicula.id}><img src={pelicula.imagen} alt={pelicula.titulo}/>{pelicula.titulo}</li>
                ))}
            </ul>
            </div>


        </div>
     );
}
 
export default CatalogoPeliculas;