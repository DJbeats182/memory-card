import { Component } from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {      
      currentScore: 0,
      bestScore: 0,
      prevScore: 0,
    };

    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(increment) {
    if(increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        // prevScore: this.state.currentScore + 1,
      });
    } else {
      this.setState({
        currentScore: 0,                
      });
      if(this.currentScore > this.bestScore){
        this.setState({
          bestScore: this.state.currentScore,
        });
      }
    }
    // if(!increment && this.prevScore > this.bestScore) {
    //   this.setState({
    //     bestScore: this.state.prevScore,
    //   })
    // }
  }

  render() {
    const { currentScore, bestScore } = this.state;
    return (
      <div className='App'>
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game handleScore={this.handleScore} />
      </div>
    )
  }
}

export default App;
