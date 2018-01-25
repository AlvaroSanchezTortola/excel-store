import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header';
import Album from './Components/Album';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Cover from './Components/Cover';

class App extends Component {
  constructor() {
         super();
         this.gotoAlbum = this.gotoAlbum.bind(this);
         this.gotoCarousel = this.gotoCarousel.bind(this);
         this.gotoCover = this.gotoCover.bind(this);
         this.handleClick = this.handleClick.bind(this);
         this.state = {
            current: 'cover',
            isAboutVisible: 'hidden',
            bar_anim: '',
         }
       }

   gotoAlbum(){
        this.setState({
           current: 'album'
         });
        }

    gotoCarousel(){
       this.setState({
           current: 'carousel'
         });
        }

    gotoCover(){
        this.setState({
           current: 'cover'
         });
        }

    handleClick(){
        if(this.state.isAboutVisible==='hidden'){
          this.setState({
           isAboutVisible: 'show',
           bar_anim: 'animated slideInDown'
         });

        }else{
          this.setState({
           isAboutVisible: 'hidden',
           bar_anim: 'animated slideInUp'
         });
        }     
    }


  render() {
    //console.log(this.state.current);
    if(this.state.current==='album'){
      return (
      <div className="App">
        {/*<Header className={ this.state.className } />*/}
        <Header bar_anim={this.state.bar_anim} isAboutVisible={this.state.isAboutVisible} handleClick= {this.handleClick} gotoAlbum = {this.gotoAlbum} gotoCarousel = {this.gotoCarousel} gotoCover={this.gotoCover}/>
        <Album bar_anim={this.state.bar_anim}/>
        <Footer/>
      </div>
    );
    }else if(this.state.current==='carousel'){
      return (
      <div className="App">
        {/*<Header className={ this.state.className } />*/}
        <Header bar_anim={this.state.bar_anim} isAboutVisible={this.state.isAboutVisible} handleClick= {this.handleClick} gotoAlbum = {this.gotoAlbum} gotoCarousel = {this.gotoCarousel} gotoCover={this.gotoCover}/>
        <Carousel gotoAlbum = {this.gotoAlbum}/>
        <Footer/>
      </div>
    );
    }else if(this.state.current==='cover'){
      return (
      <div className="App">
        {/*<Header className={ this.state.className } />*/}
        <Cover gotoAlbum = {this.gotoAlbum} gotoCarousel = {this.gotoCarousel} gotoCover={this.gotoCover}/>      
      </div>
    );
    }     
  }
}

export default App;
