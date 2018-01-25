import React from 'react';
import imag from '../Images/img1.jpg';
import imgcirc from '../Images/noc.png';
import imaglol from '../Images/lol.png';

import './carousel.css';

class Carousel extends React.Component {
	
	render() {
    	return (
    		<main  className="animated fadeIn whole" role="main">
    		      <div id="myCarousel" className="carousel slide" data-ride="carousel">
    		        <div className="carousel-inner">
    		          <div className="carousel-item active">
    		            <img className="first-slide" src={imag} alt="First slide"/>
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
    		            <img className="rounded-circle" src={imgcirc} alt="Generic placeholder " width="140" height="140"/>
    		            <h2>Seguros</h2>
    		            <p>La segurdad de nuestros productos es lo máximo.</p>
    		            <p><a className="btn btn-lg1 btn-secondary"  role="button">Ver detalles &raquo;</a></p>
    		          </div>
    		          <div className="col-lg-4">
    		            <img className="rounded-circle" src={imgcirc} alt="Generic placeholder " width="140" height="140"/>
    		            <h2>Eficientes</h2>
    		            <p>Somos más efecientes que todos.</p>
    		            <p><a className="btn btn-lg1 btn-secondary"  role="button">Ver detalles &raquo;</a></p>
    		          </div>
    		          <div className="col-lg-4">
    		            <img className="rounded-circle" src={imgcirc} alt="Generic placeholder " width="140" height="140"/>
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
    		            <img className="featurette-image img-fluid mx-auto" src={imaglol} alt="Generic placeholder "/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        <div className="row featurette">
    		          <div className="col-md-7 order-md-2" style={{'text-align':'right'}}>
    		            <h2 className="featurette-heading">Eficiencia <span className="text-muted">que la gran.</span></h2>
    		            <p className="lead">Es otro de nuestros pilares que la gran.</p>
    		          </div>
    		          <div className="col-md-5 order-md-1">
    		            <img className="featurette-image img-fluid mx-auto" src={imaglol} alt="Generic placeholder "/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        <div className="row featurette">
    		          <div className="col-md-7">
    		            <h2 className="featurette-heading">Eficacia <span className="text-muted">no podría faltar.</span></h2>
    		            <p className="lead">Es lo que nos hace diferentes que la gran.</p>
    		          </div>
    		          <div className="col-md-5">
    		            <img className="featurette-image img-fluid mx-auto" src={imaglol} alt="Generic placeholder "/>
    		          </div>
    		        </div>

    		        <hr className="featurette-divider"/>

    		        

    		      </div>


    		</main>
    	)
    }
}
export default Carousel;