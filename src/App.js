import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      player_turn: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
    this.squareClicked = this.squareClicked.bind(this);
  }
  
  squareClicked = (index) => {
    let player_turn = this.state.player_turn;
    let board = this.state.board;
    
    console.log(`index`, index);
    const winning_combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    // loop through winning combos
    for (let i = 0; i < winning_combos.length; i++){
      debugger;
      let winning_row = winning_combos[i];
      let p1 = winning_row[0];
      let p2 = winning_row[1];
      let p3 = winning_row[2];
      
      // if (board[p1] !== '' && board[p1] === board[p2] && board[p2] === board[p3] && board[p3] === board[p1] ){
      if (board[p1] === board[p2] && board[p2] === board[p3] && board[p3] === board[p1]) {
        console.log(`${player_turn} is the winner!`);
      }
    }
    
    console.log(`board:`, board);
    // assign player turn to board index
    board[index] = player_turn;
    player_turn = ( player_turn === 'X') ? 'O' : 'X';
    
    // remember to come back to this and use object shorthand notation
    this.setState({
      player_turn: player_turn,
      board: board
    })
  }
  
  resetBoard = () => {
    console.log(`Resetting the board!`);
    // reset the board state
    this.setState({
      board: ['', '', '', '', '', '', '', '', '']
    })
  }
  
  render(){
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.state.board.map((square, index) => {
            return (
              <div className="square" onClick={() => this.squareClicked(index)}>
                <h3 className="symbol">{square}</h3>
              </div>
            )
          })}
          <div className="reset">
            <button onClick={() => this.resetBoard()} title="Reset the board">Reset the board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
