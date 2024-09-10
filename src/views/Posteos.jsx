import { useNavigate } from 'react-router-dom';
import { data } from '../data.js';

const Posteos = () => {    
    const navigate = useNavigate();
    
    return (
        <div>
            <h2>Posteos</h2>           
            {
                data.map((post) => (    
                    <div key={post.id} className="card-post">
                        <h3><li>{post.titulo}</li></h3>
                        <p>{post.texto}</p>                
                        <button onClick={() => {   
                            navigate(`/posteos/${post.id}/`)
                        }}>Leer</button>
                        {" "}
                        <button onClick={() => alert(`MODIFICAR post ID ${post.id}`)}>Modificar</button>
                    </div>   
                ))
            }      
        </div>
  )
}

export default Posteos;