import React from 'react';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    	super(props);
    	this.scrollUp = this.scrollUp.bind(this);
  	}

  scrollUp() {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 75);
            setTimeout(this.scrollUp, 10);
            
        }
    }

  render() {
    return (
    <div className={this.props.className}>  	
	  <footer className="text-muted">
	        <div className="container">
	          <p className="float-right">
	            <a className="l-white" onClick={this.scrollUp}>Volver arriba</a>
	          </p>
	          <p>Todos los derechos reservados © 2018 grupo estrellitos, Guatemala</p>
	          <p>¿Alguna duda? <a href="https://gmail.com/">contáctanos</a> o visita nuestra página en <a href="https://facebook.com/">Facebook</a>.</p>
	        </div>
	      </footer>
	 </div>
	)
  }
}
	
export default Footer;
