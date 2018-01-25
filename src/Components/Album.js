import React from 'react';
import imaglol from '../Images/example.png';

import './album.css';

class Album extends React.Component {
  render() {
    return (
    <div className="animated fadeIn">  	
    	<main role="main">
      
      <section className="jumbotron text-center">
        <div className="container">

          <h1 className="jumbotron-heading">Nuestros Productos</h1>
          <p className="lead text-muted">Contamos con una alta gama de producto listos para su disposición. Cada uno de los programas cuenta con un video de prueba que se mostrará más adelante.</p>
          <p>
            <a  className="btn btn-espa btn-lg1 btn-primary">Solicitar una prueba</a>
            <a  className="btn btn-espa btn-lg1 btn-secondary">Contácto</a>
          </p>
        </div>
      </section>
      
      <div className="album text-muted">
        <div className="container">

          <div className="row">
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>

            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>

            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
            <div className="card">
              <img className="imagen" src={imaglol}  alt="Card cap"/>
              <p className="card-text">Descripción del producto va aquí. Esto es lo que tendrá la información respecto a lo que hace el programa en general.</p>
            </div>
          </div>

        </div>
      </div>

</main>
	</div>
	)
  }
}
	
export default Album;
