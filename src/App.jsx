import React, { Component } from 'react';
import Card from './Card';
import Animal from './Animal';


export default class App extends Component {
  render(){
    const animal = new Animal('ee', './images/casual.jpg', 3.3, 6000, 70, 1, 40);
    return (
      <div>
          <h1>SupertrumpdadsafABAaaaaaaCV</h1>
          <Card animal={animal} uncovered/>


      </div>
    );
  }
}
