import React from 'react';
import imag from '../Images/background.PNG';
import './cover.css'


class Cover extends React.Component {
	componentWillMount(){
	    document.body.style.backgroundImage = 'url('+imag+')';
	    document.body.style.backgroundSize = 'cover';
	    document.body.style.backgroundColor = 'transparent';
	}
	componentWillUnmount(){
	    document.body.style.backgroundImage = null;
	    document.body.style.backgroundColor = '#333';
	}

	render() {
    	return ( 

    		    <div  className="site-wrapper animated fadeIn">
    		    
    		          <div className="site-wrapper-inner">

    		            <div className="cover-container">

    		              <header className="masthead clearfix">
    		                <div className="inner">
    		                  <h3 className="masthead-brand">ProExcel</h3>
    		                  <nav className="nav nav-masthead">
    		                    <a className="nav-link active" onClick={ this.props.gotoCover }>Inicio</a>
    		                    <a className="nav-link" onClick={ this.props.gotoCarousel }>Información</a>
    		                    <a className="nav-link" onClick={ this.props.gotoAlbum }>Productos</a>
    		                  </nav>
    		                </div>
    		              </header>

    		              <main role="main" className="inner cover">
    		                <h1 className="cover-heading">Automatiza, soluciona.</h1>
    		                <p className="lead">Brindamos programas en Excel© que pretenden solucionar sus necesidades de una manera amigable y efectiva.</p>
    		                <p className="lead">
    		                  <a  className="btn btn-lg btn-second" onClick={ this.props.gotoCarousel }>Aprende más</a>
    		                </p>
    		              </main>

    		              <footer className="mastfoot">
    		                <div className="inner">
    		                  <p>Una solución con <a  className="link"  href="https://facebook.com/">♥</a>, por <a className="link" href="https://twitter.com/">@web solutions</a>.</p>
    		                </div>
    		              </footer>

    		            </div>

    		          </div>

    		        </div>

    	)
    }
}
export default Cover;