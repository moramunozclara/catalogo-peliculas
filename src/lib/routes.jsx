import { createBrowserRouter } from "react-router-dom";

import Login from '../pages/Login';
import CatalogoPeliculas from '../pages/CatalogoPeliculas';

import Layout from "../Layout";
import ErrorPage from "../ErrorPage";





const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    // errorElement: <ErrorPage/>,
    children: [ 
        {
            index: true,
            element: <Login/>
        },
        {
            path: 'catalogo', //los children van sin barra pq ya trae path
            element: <CatalogoPeliculas/>
        },
        {
            path: '*',
            element: <ErrorPage/>
        }
    ]

}]);


export default router;