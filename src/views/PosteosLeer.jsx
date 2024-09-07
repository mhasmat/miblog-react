import { useParams } from "react-router-dom";
import Posteos from "./Posteos";

const PosteosLeer = () => {
    const { id = "no-encontrado"} = useParams();
    

  return (
    <div>
        <h2>{`Post ${id}`}</h2>
        <Posteos content={id} />    

    </div>
  )
}

export default PosteosLeer