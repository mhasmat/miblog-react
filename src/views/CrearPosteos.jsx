import { useRef, useState } from "react";
import { data } from '../data.js';

const CrearPosteos = () => {
    const [ posteos, setPosteos ] = useState(data);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            id: "",
            titulo: e.target.titulo.value,
            texto: e.target.texto.value,
            user_id: "",
            usuario: e.target.usuario.value,
        }
        setPosteos([...posteos, obj]);
        console.log(posteos);
        form.current.reset();    
    };    

    return (
        <>
        <h2>Nuevo Post</h2>     
        <form onSubmit={handleSubmit} ref={form}>            
            <label htmlFor="usuario">Usuario:</label> 
            <input type="text" id="usuario" name="usuario"></input>            
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo"></input>
            <label htmlFor="texto">Posteo:</label>
            <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
            <br />         
            <input type="submit" value="Enviar" className="btn-enviar" />
        </form>   
        </>
    )  
}

export default CrearPosteos