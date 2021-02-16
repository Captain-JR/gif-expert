import  React, { useState } from "react";
import AgregarCategoria from "../AgregarCategoria/AgregarCategoria";
import GifGrid from "../GifGrid";
import './GifExpertApp.css';


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Star wars']);


    return(
        <>
            <h2>Gif Expert App by Erick Marroquín</h2>
            <AgregarCategoria setCategorias={ setCategorias }/>
            <hr />
            <ol>
                {
                    categorias.map( categoria => {
                        return <GifGrid key={categoria} categoria={categoria}/>
                    })
                }
            </ol>
        </>
    );

}


export default GifExpertApp;