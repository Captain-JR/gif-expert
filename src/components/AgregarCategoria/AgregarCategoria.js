import React, {useState} from 'react';
import './AgregarCategoria.css';

const AgregarCategoria = (props) => {

    const setCategorias = props.setCategorias;

    const [valor, setValor] = useState('');

    const cambioValor = (e) => {
        setValor(e.target.value);
    }

    const enviarDatos = (e) => {

        e.preventDefault();

        if(valor.trim().length > 2){
            setCategorias( categoria => [valor, ...categoria]);
            setValor('');
        }else{
            window.alert('Campo inválido, la información no puede ir vacía y debe tener más de dos caracteres');
        }
        
    }

    return (
        <form onSubmit={enviarDatos}>
            <input type="text"
                   value={valor}
                   onChange={cambioValor}/>
        </form>
    )

}

export default AgregarCategoria;