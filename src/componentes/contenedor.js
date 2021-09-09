import Cabecera from "./cabecera";
import ContenedorNoticias from "./contenedorNoticias";
import ContenedorPersonajes from "./contenedorPersonajes";
import Navegacion from "./navegacion";
import Opinion from "./opinion";
import Footer from "./pieDePagina";
import Redes from "./redes";
import Seccion from "./seccion";



function Contenedor() {
  return (
    <div className="container">
        <Navegacion />
        <hr />
        <Cabecera />
        <hr />
        <h2>Noticias de Free Fire</h2>
        <ContenedorNoticias />
        <Seccion />
        <hr />
        <h2>Personajes destacados</h2>
        <ContenedorPersonajes />
        <hr />
        <h3>Tus opniones son importantes</h3>
        <Opinion />
        <Redes />
        <Footer />
        
      
    </div>
  );
}

export default Contenedor;