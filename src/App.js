import React, { Component } from 'react';
import './App.css';
import { quotes } from './data/quotes';

class App extends Component {

  state = {
    quotes,
    randomQuote : null,
    isClicked : false
  }


  showRandomQuote = () => {
    const { quotes } = this.state;
  
    this.setState({ 
        randomQuote : quotes[Math.floor(Math.random() * quotes.length)],
        isClicked : true
     })
  }

  render() {
    
    const { randomQuote, isClicked } = this.state;

    return(
      <div className="container">
          { isClicked ? 
            (<Quote 
              randomItem = {randomQuote}
            />) 
            : 
            (<p className="info">Funny Quotes At random...</p>)
          }
        <button className="loadQuote" onClick={this.showRandomQuote}>Load Quote</button>
      </div>
      
    );
  }
}

const Quote = ({ randomItem }) => {
  return(
    <div className="quote-box" key={randomItem.id}>
      <p className="quote">{randomItem.quote}</p>
      <p className="source">{randomItem.source}</p>    
    </div>
  );
}

export default App;
