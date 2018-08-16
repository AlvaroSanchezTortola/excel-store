import React from 'react';
import imag from '../Images/img1.jpg';
import Particles from 'react-particles-js';
import {Vivus1, Vivus2, Vivus3, Vivus4, Vivus5, Vivus6} from './Vivus';


import './carousel.css';

class Carousel extends React.Component {
	
	render() {
    	return (
    		<main  className="animated fadeIn whole" role="main">
    		      <div id="myCarousel" className="carousel slide" data-ride="carousel">
    		        <div className="carousel-inner" id="particles-js">
    		          <div className="carousel-item active">
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
                                      "value": "#020101"
                                    },
                                    "shape": {
                                      "type": "circle",
                                      "stroke": {
                                        "width": 0,
                                        "color": "#000000"
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
                                      "color": "#000000",
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
    		              <div className="carousel-caption text-left">
    		                <h1>Productos de alta calidad.</h1>
    		                <p>Nusestros productos garantizan un alto impacto dentro de su empresa, o lo que sea que haga.</p>
    		                <p><a className="btn btn-lg1 btn-primary" onClick={ this.props.gotoAlbum } role="button">Ve nuestros productos</a></p>
    		              </div>
    		            </div>
    		          </div>
    		      </div>
    		      </div>
    		      <div className="container marketing">
    		        
    		        <div className="row">
    		          <div className="col-lg-4">
    		            <Vivus1/>
    		            <h2>Seguros</h2>
    		            <p>La segurdad de nuestros productos es lo máximo.</p>
    		            <p><a className="btn btn-lg1 btn-secondary"  role="button">Ver detalles &raquo;</a></p>
    		          </div>
    		          <div className="col-lg-4">
    		            <Vivus2/>
    		            <h2>Eficientes</h2>
    		            <p>Somos más efecientes que todos.</p>
    		            <p><a className="btn btn-lg1 btn-secondary"  role="button">Ver detalles &raquo;</a></p>
    		          </div>
    		          <div className="col-lg-4">
    		            <Vivus3/>
    		            <h2>Eficaces</h2>
    		            <p>Somos más eficaces que nadie.</p>
    		            <p><a className="btn btn-lg1 btn-secondary"  role="button">Ver detalles &raquo;</a></p>
    		          </div>
    		        </div>


    		        

    		        <hr className="featurette-divider"/>

    		        <div className="row featurette">
    		          <div className="col-md-7">
    		            <h2 className="featurette-heading">Seguridad  <span className="text-muted">que la gran.</span></h2>
    		            <p className="lead">Es uno de nuestros pilares que la gran.</p>
    		          </div>
    		          <div className="col-md-5">
    		            <Vivus4/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        <div className="row featurette">
    		          <div className="col-md-7 order-md-2" style={{'text-align':'right'}}>
    		            <h2 className="featurette-heading">Eficiencia <span className="text-muted">que la gran.</span></h2>
    		            <p className="lead">Es otro de nuestros pilares que la gran.</p>
    		          </div>
    		          <div className="col-md-5 order-md-1">
    		            <Vivus5/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        <div className="row featurette">
    		          <div className="col-md-7">
    		            <h2 className="featurette-heading">Eficacia <span className="text-muted">no podría faltar.</span></h2>
    		            <p className="lead">Es lo que nos hace diferentes que la gran.</p>
    		          </div>
    		          <div className="col-md-5">
    		            <Vivus6/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        

    		      </div>


    		</main>
    	)
    }
}
export default Carousel;