import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) =>{
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return (
    <div className="colaborador">
        { <AiFillCloseCircle className="eliminar" onClick={()=> eliminarColaborador(id)}/>}
        {/* Esta arrow function lo que hace es que se elimine el colaborador si la persona hace clic, si no lo colocamos y solo lo dejamos eliminarColaborador(id) en un proyecto real se eliminan todos los colaboradores */}
        <div className="encabezado" style = {{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
           <h4>{nombre}</h4>
           <h5>{puesto}</h5>
           {fav === true ? <AiFillHeart color="red" onClick = {() => like(id)}/> : <AiOutlineHeart onClick = {() => like(id)}/> }
           
           
        </div>

    </div>
)}

export default Colaborador