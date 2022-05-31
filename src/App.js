import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleGamePlay = (index) => {
    alert(index)
  }

  render() {
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="game-board">
          {this.state.board.map((value, index) => {
            return(
              <Square
                value={value}
                key={index}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
