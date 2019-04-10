import React, { Component } from 'react';
import Comp1 from './components/comp1';

class App extends Component {
 
  render() {
    return (
      <div className="container">

        <Comp1 
        name={"sudor"}>
     
        </Comp1>
        <Comp1 
        name={"sudor1"}>
         
        </Comp1>
        <Comp1 
        name={"sudor2"}>
         
        </Comp1>
      </div>
    );
  }
}

export default App;
