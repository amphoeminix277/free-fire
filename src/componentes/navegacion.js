import react from "react";

function Navegacion() {
    return (
        
      <>
      <nav className="nav-main">
        
        <img src="https://res.cloudinary.com/gamestry/image/upload/v1612307975/profile_images/file_tl4hlr.jpg" alt="TechNews Logo" class="nav-brand" />
        
        <ul className="nav-menu">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#noticias">Noticias</a>
          </li>
          <li>
            <a href="#viene">Que se viene</a>
          </li>
          <li>
            <a href="#personajes">Personajes</a>
          </li>
          <li>
            <a href="#opiniones">Opiones</a>
          </li>
          <li>
            <a href="#siguenos">Siguenos</a>
          </li>
        </ul>

        <ul className="nav-menu-right">
          <li>
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </nav>

      </>
    );
  }
  
  export default Navegacion;