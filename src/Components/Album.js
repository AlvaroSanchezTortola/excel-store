import React from 'react';
import imaglol from '../Images/example.png';
import Particles from 'react-particles-js';

import './album.css';

class Album extends React.Component {
  render() {
    return (
    
    	<main className="animated fadeIn" role="main">
      
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item-1 active">
                    <Particles 
                            params={
                                {
                                  "particles": {
                                    "number": {
                                      "value": 80,
                                      "density": {
                                        "enable": true,
                                        "value_area": 800
                                      }
                                    },
                                    "color": {
                                      "value": "#ffffff"
                                    },
                                    "shape": {
                                      "type": "circle",
                                      "stroke": {
                                        "width": 0,
                                        "color": "#ffffff"
                                      },
                                      "polygon": {
                                        "nb_sides": 5
                                      },
                                      "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                      }
                                    },
                                    "opacity": {
                                      "value": 0.5,
                                      "random": false,
                                      "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                      }
                                    },
                                    "size": {
                                      "value": 3,
                                      "random": true,
                                      "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                      }
                                    },
                                    "line_linked": {
                                      "enable": true,
                                      "distance": 150,
                                      "color": "#ffffff",
                                      "opacity": 0.4,
                                      "width": 1
                                    },
                                    "move": {
                                      "enable": true,
                                      "speed": 1.5783201938177185,
                                      "direction": "none",
                                      "random": false,
                                      "straight": false,
                                      "out_mode": "out",
                                      "bounce": false,
                                      "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                      }
                                    }
                                  },
                                  "interactivity": {
                                    "detect_on": "canvas",
                                    "events": {
                                      "onhover": {
                                        "enable": false,
                                        "mode": "repulse"
                                      },
                                      "onclick": {
                                        "enable": false,
                                        "mode": "push"
                                      },
                                      "resize": true
                                    },
                                    "modes": {
                                      "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                          "opacity": 1
                                        }
                                      },
                                      "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                      },
                                      "repulse": {
                                        "distance": 200,
                                        "duration": 0.4
                                      },
                                      "push": {
                                        "particles_nb": 4
                                      },
                                      "remove": {
                                        "particles_nb": 2
                                      }
                                    }
                                  },
                                  "retina_detect": true
                              }
                            }
                        />
                    <div className="container">
                      <div className="carousel-caption carr text-center">
                        <h1>Catálogo de Productos</h1>
                        <p>Contamos con una alta gama de producto listos para su disposición. Cada uno de los programas cuenta con un video de prueba que se mostrará más adelante..</p>
                        <div>
                          <p><a className="btn btn-lg1 btn-primary" role="button">Solicita una prueba</a></p>
                          <p><a className="btn btn-lg1 btn-secondary" role="button">Contacto</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
      
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
	
	)
  }
}
	
export default Album;
