import React, { Component, Fragment } from 'react';

class Header_ extends Component{
  constructor(props){
    super(props);    
  }//---constructor
  render(){
    const {titulo} = this.props;
    return(
      <Fragment>          
        <h1>{titulo}</h1>         
      </Fragment>
    );
  }//---render
}//--class

export default Header_;
