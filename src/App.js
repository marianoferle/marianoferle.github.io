import React, { Component, Fragment } from 'react';
import Header_ from './header_titulo';

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      nombre: '',
    };    
  }

  render(){
    const { nombre } = this.state;

    return (  
      <Fragment> 
        <Header_ titulo="GitHub Index"/>  
      </Fragment>   
    );
  }


}


export default App;
