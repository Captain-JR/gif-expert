import React from 'react';
import './GifItem.css';

const GifItem = (props) => {

    const {title, url} = props.imagen;

    return(
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title}/>
            <h4>{title}</h4>
        </div>
    )

}

export default GifItem;