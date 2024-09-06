

const FormPosteos = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            "id": e.target.id.value,
            "titulo": e.target.titulo.value,
            "texto": e.target.texto.value,
            "user_id": e.target.user_id.value,
            "usuario": e.target.usuario.value,
        }

        
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user_id">ID Usuario:</label> 
            <input type="number" id="user_id" name="user_id"></input>
            <label htmlFor="usuario">Usuario:</label> 
            <input type="text" id="usuario" name="usuario" defaultValue={"miUsuario"}></input>

            <label htmlFor="id">ID:</label> 
            <input type="number" id="id" name="id"></input>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo"></input>

            <label htmlFor="texto">Posteo:</label>
            <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
                     
            <input type="submit" value="Ingresar"></input>
        </form>
    </div>
  )
}

export default FormPosteos