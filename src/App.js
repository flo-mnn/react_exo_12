import React from 'react';
import ArticleBox from './ArticleBox';
import './App.css';



class App extends React.Component {
  
  state = {
    numberArt : 0
  };

  changeNumber = (e) => {
    this.setState ({
      numberArt : e.target.value
    });
    console.log(this.state.numberArt);
  };

  render(){
    
    return (
      <div className="App">
        <span>Le nombre est égal à : </span>
        <input type="number" id="number" onInput={this.changeNumber}/>
        <ArticleBox state={this.state}/>
      </div>
    );
  }
  
}

export default App;
