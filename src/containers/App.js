import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Khoi Pham</h1>
          <h2>Computer Science Student at Minerva Schools at KGI</h2>
          <h3>Class of 2021</h3>
        </header>
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
