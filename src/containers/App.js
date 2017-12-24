import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {

  }

  styles = {
    header: {
      backgroundColor: 'rgb(47, 63, 71)'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Card" style={{backgroundColor: 'rgb(47, 63, 71)'}}>
          <h1>Khoi Pham</h1>
          <h2>Computer Science Student at Minerva Schools at KGI</h2>
          <h3>Class of 2021</h3>
        </div>
        <div className="Card">
          <h1>My skills:</h1>
          <h3>Front-end development:</h3>
          <p>JavaScript, React.js, HTML, CSS</p>
          <h3>Back-end development:</h3>
          <p>C++, Python, SQL</p>
          <h3>Theoretical knowledge:</h3>
          <p>Sorting, tree, path, regression algorithms, data structures, linear algebra</p>
        </div>
      </div>
    );
  }
}

export default App;
