'use strict';

import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import Blah from './BlahComponent.js';

const Myheader = (props) => <h1>{props.heading}</h1>;

class Main extends React.Component {
  render () {
    return (
      <>
      <Myheader heading="Wow!"/>
      <Blah/>
      </>
    );
  }

}

export default Main;

const domContainer = document.querySelector('#main_react');
ReactDOM.render(<Main/>, domContainer);
