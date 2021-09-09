import React from "react";
import react from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export default class Cabecera extends React.Component {
  
  render() {
    return (
      <>
        <header className="showcase">
          <h2>Llega la nueva Temporada Free Fire</h2>
          <p>
            Estas preparado para la nueva temporada de Free Fire, este años
            viene cargada de nuevas sorpresa, personajes, mapas, armas y cargada
            de premios
          </p>
          <Button color="primary" onClick={this.abrilModal}>Mas</Button>
        </header>
      </>
    );
  }
}
