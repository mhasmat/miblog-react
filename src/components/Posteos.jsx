import { useState } from "react";

const Posteos = () => {
    const data = [
        {
            "id": 12,
            "titulo": "Spiderman",
            "texto": "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
            "user_id": 7,
            "usuario": "stan_lee"
        },
        {
            "id": 14,
            "titulo": "X-MEN",
            "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
            "user_id": 7,
            "usuario": "stan_lee"
        },
        {
            "id": 16,
            "titulo": "Capitán América",
            "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
            "user_id": 7,
            "usuario": "stan_lee"
        },
        {
            "id": 17,
            "titulo": "Thanos",
            "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
            "user_id": 7,
            "usuario": "stan_lee"
        },
            {
            "id": 18,
            "titulo": "Ant-Man",
            "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
            "user_id": 7,
            "usuario": "stan_lee"
        },
    ];

    const [ posteo, setPosteo ] = useState(data)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            id: e.target.id.value,
            titulo: e.target.titulo.value,
            texto: e.target.texto.value,
            user_id: e.target.user_id.value,
            usuario: e.target.usuario.value,
        }

        // data.push(obj);
        const nuevoPost = [...posteo, obj];
        setPosteo(nuevoPost);
           
        // e.target.id.value = "";
        // e.target.titulo.value = "";
        // e.target.texto.value = "";
        // e.target.user_id.value = "";
        // e.target.usuario.value = "";
        
    }
    
        
  return (
    <div>
        <h2>Posteos</h2>      
        {
            data.map((post) => (
                <div key={post.id}>
                    <h3>{post.titulo}</h3>
                    <p>{post.texto}</p>
                    <div>
                        <button onClick={() => alert(`LEER post ID ${post.id}`)}>Leer</button>
                        {" "}
                        <button onClick={() => alert(`MODIFICAR post ID ${post.id}`)}>Modificar</button>
                    </div>       
                </div>
            ))
        }
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="user_id">ID Usuario:</label> 
            <input type="number" id="user_id" name="user_id"></input>
            <label htmlFor="usuario">Usuario:</label> 
            <input type="text" id="usuario" name="usuario"></input>

            <label htmlFor="id">ID:</label> 
            <input type="number" id="id" name="id"></input>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo"></input>

            <label htmlFor="texto">Posteo:</label>
            <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
                     
            <input type="submit" value="Enviar Posteo" />
        </form>     
    </div>
  )
}

export default Posteos