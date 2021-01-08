/*
 * @Author: your name
 * @Date: 2021-01-08 14:57:21
 * @LastEditTime: 2021-01-08 16:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactDemo\src\views\Board\Board.js
 */
import React,{Component} from 'react'
import Square from '../Square/Square'
class Board extends Component{
  renderSquare(i){
    return (
      <Square value = {i}></Square>
    )
  }
  render(){
    const status = 'next paly: x'
    return (
      <div>
        <div className = "status">
          {status}
        </div>
        <div className = "board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className = "board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className = "board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
export default Board