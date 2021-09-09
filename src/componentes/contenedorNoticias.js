import Noticias from "./noticias";

function ContenedorNoticias() {
    return (
      <div className="news-cards" id="noticias">
      <Noticias imagen="https://dl.dir.freefiremobile.com/common/web_event/hash/ad7bfb69dc915694e61c24350a48e7adpng" titulo="NOTAS DEL PARCHE: REVOLUCIÓN" articulo="Agregamos más objetos a la máquina expendedora para que tenga suficientes para apoyar las necesidades en la batalla. También agregamos límites de compra personales en algunos de los consumibles y objetos más valiosos para evitar que los jugadores junten utilidades al final del juego" />
      <Noticias imagen="https://dl.dir.freefiremobile.com/common/web_event/hash/a44da4bc428b1717caa37dd3efa259b3png" titulo="NOTA DEL PARCHE: PROYECTO COBRA" articulo="Desde que ajustamos la tienda de Duelo de Escuadras en la temporada 4, recibimos comentarios de que extrañaban la MP40 y la MP5. En la temporada 5, vamos a introducir un nuevo sistema de tienda donde los pagadores favoritas estarán disponibles para ti en Duelo de Escuadras" />
      <Noticias imagen="https://freefiremobile-a.akamaihd.net/common/Latam/officialweb/hackers.png" titulo="BLOG: HACKERS" articulo="Desde el lanzamiento de la Operación Cutcord, hemos realizado mejoras continuas en nuestro sistema anti-hackeo. Estas medidas fueron reveladas a los jugadores a través de las Preguntas Frecuentes Anti-Hack. Sin embargo, sabemos que les gustaría una explicación más detallada de ciertos temas. " />
      <Noticias imagen="https://freefiremobile-a.akamaihd.net/common/Latam/officialweb/PatchNotes.jpg" titulo="NOTAS DEL PARCHE: 3VOLUCIÓN" articulo="Por lo general, en Duelo de Escuadras los jugadores no son revividos por sus compañeros de equipo debido a la constante batalla. Con la introducción de la Horizonalina, los jugadores tienen otra oportunidad de unirse a la batalla una vez que han sido ya derribados." />

    </div>
    );
  }
  
  export default ContenedorNoticias;