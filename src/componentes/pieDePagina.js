import React from "react";

export default class Footer extends React.Component {
  constructor() {
    super();
    var today = new Date(),
      date = today.getFullYear();

    this.state = {
      date: date,
    };
  }

  render() {
    return (
      <>
        <div className="footer-links">
          <h4></h4>
          <div className="footer-container"></div>
        </div>

        <footer className="footer">
          <h3>Camilo Talero &copy; {this.state.date}</h3>
        </footer>
      </>
    );
  }
}
