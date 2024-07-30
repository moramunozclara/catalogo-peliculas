import {useState, useEffect} from 'react';


const CatalogoPeliculas = () => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const getPeliculas = async() => {
            try {
                const respuesta = await fetch ('/backend/API/v1/peliculas.json');
                const objeto = await respuesta.json();
                setPeliculas(objeto.peliculas);
            }
            catch (error) {
                console.error('Error al obtener las películas', error)
            }
        };

        

        getPeliculas(); // obtén las películas

        
    }, []);



    return ( 
        <>
            <h2>Este es tu catálogo de películas
            {/* https://www.freecodecamp.org/news/how-to-make-an-image-search-app-in-react/ */}
            </h2>



            <ul className="CatalogoGrid">
                {peliculas.map((pelicula) => (
                    <li key={pelicula.id}>{pelicula.titulo}</li>
                ))}
            </ul>


        </>
     );
}
 
export default CatalogoPeliculas;