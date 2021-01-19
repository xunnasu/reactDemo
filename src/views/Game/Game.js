/*
 * @Author: your name
 * @Date: 2021-01-08 14:57:38
 * @LastEditTime: 2021-01-19 18:29:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactDemo\src\views\Game\Game.js
 */
import React,{Component} from 'react'
import Board from '../Board/Board'
import './game.css'
class Game extends Component{
  render(){
    return (
      <div className="game">
        <div>
          <Board></Board>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
export default Game