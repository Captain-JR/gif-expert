import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifItem  from '../GifItem';
import './GifGrid.css';


const GifGrid = (props) => {

    const categoria = props.categoria;

    const {data:imagenes, loading} = useFetchGifs(categoria);


    return(
        <>
        <h3 className="animate__animated animate__bounce">{ categoria }</h3>

            {loading && <p className="animate__animated animate__heartBeat">Cargando...</p>}

            <div className="card-grid">
                {
                    imagenes.map( img => (
                        <GifItem key={img.id} imagen={img}/>
                    ))
                }
            </div>
        </>
    );

}

export default GifGrid;