import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuración

  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like} = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.50)
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length >= 1 && (
        <section className="equipo" style={obj}>
          <input 
          className="color"
          type="color"
          value={colorPrimario} //en el video aparece con hextorgba pero no funciona porque el input solo recibe valores en rgb
          onChange={(e) =>{
            actualizarColor(e.target.value, id);
          }} />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador 
              datos={colaborador} 
              key={index} 
              colorPrimario = {colorPrimario}
              eliminarColaborador = {eliminarColaborador}
              like = {like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
