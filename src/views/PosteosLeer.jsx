import { useParams } from "react-router-dom";

const PosteosLeer = () => {
    const { id = "no-encontrado"} = useParams();
    console.log('Post n°', id)

  return (
    <div>
        <h2>{`Post n°${id}`}</h2>
    </div>
  )
}

export default PosteosLeer