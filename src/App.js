import React from 'react';
import './App.css';
import axios from 'axios';
import ZipResult from './ZipResult';

class App extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      zipcodes: []
    }
  }

  searchZip = ( event ) => {
    event.preventDefault();
    let userInput = event.target[0].value;
    console.log(userInput);

    axios.get('http://ctp-zip-api.herokuapp.com/zip/'+userInput)
    .then( (resolve) => {   
      this.setState( {zipcodes: resolve.data} );
      console.log(resolve.data);
    })
    .catch( (err)=> console.log(err));
  }

  render() {
    let elems = [];     // container
    let index = 0;
    for(let zip of this.state.zipcodes) {
      elems.push(<ZipResult key={index++} {...zip}/>);
    }
    // elems = this.state.zipcodes.map((elem, i) => <ZipResult key={i} {...elem} />)
    return (
      <div> 
        <form onSubmit={this.searchZip}>  
          <h1>Home</h1>
          <input type="text" />
        </form>

        {elems}
      </div>
    );
  }
}

export default App;
