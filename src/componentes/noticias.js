


function Noticias(props) {
  return (
    <div>
        <img
          src={props.imagen}
          alt=""
        />
        <h3>{props.titulo}</h3>
        <p>
          {props.articulo}
        </p>
        
      </div>
  );
}

export default Noticias;