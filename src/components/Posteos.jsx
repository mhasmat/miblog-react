import { useRef, useState } from "react";
import { data } from '../data.js';

const Posteos = () => {    
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
        form.current.reset();    
    };    
        
  return (
    <div>
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

        <h2>Posteos</h2>           
        {
            posteos.map((post) => (    
                <div key={post.id} className="card-post">
                    <h3><li>{post.titulo}</li></h3>
                    <p>{post.texto}</p>                
                    <button onClick={() => alert(`LEER post ID ${post.id}`)}>Leer</button>
                    {" "}
                    <button onClick={() => alert(`MODIFICAR post ID ${post.id}`)}>Modificar</button>
                </div>   
            ))
        }      
    </div>
  )
}

export default Posteos;