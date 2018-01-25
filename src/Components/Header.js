import React from 'react';
import classNames from 'classnames';

class Header extends React.Component { 	
  	render() {
  	var navb = classNames(
  		'collapse',
  		'bg-dark',
  		this.props.isAboutVisible,
  	);
  	
    return (
	       <header className={this.props.bar_anim}>
		      <div className={navb} id="navbarHeader">
		        <div className="container">
		          <div className="row">
		            <div className="col-sm-8 py-4">
		              <h4 className="text-white">Acerca de Nosotros</h4>
		              <p className="text-muted">Nos enfocamos en brindar soluciones de automatización y ejecución a través de programas con fines diversos. Nuestra meta es que nuestros clientes cumplan sus objetivos.</p>
		            </div>
		            <div className="col-sm-4 py-4">
		              <h4 className="text-white">Contacto</h4>
		              <ul className="list-unstyled">
		                <li><a href="https://twitter.com/" className="text-white">Sígenos en Twitter</a></li>
		                <li><a href="https://facebook.com/" className="text-white">Danos like en Facebook</a></li>
		                <li><a href="https://gmail.com/" className="text-white">Envíanos un correo</a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="navbar navbar-dark bg-dark">
		        <div className="container d-flex justify-content-between">
		          <a  className="navbar-brand" onClick={ this.props.gotoCover } >Portada</a>
		          <a  className="navbar-brand" onClick={ this.props.gotoCarousel } >Información</a>
		          <a  className="navbar-brand" onClick={ this.props.gotoAlbum } >Productos</a>
		          <button className="navbar-toggler" onClick={ this.props.handleClick }>
		            <span className="navbar-toggler-icon"></span>
		          </button>
		        </div>
		      </div>
		</header>
	 
	)
  }
}
	
export default Header;
