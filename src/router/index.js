/*
 * @Author: your name
 * @Date: 2021-01-08 10:31:33
 * @LastEditTime: 2021-01-08 16:07:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\router\index.js
 */
import React, {Component} from 'react'
import { HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import Home from '../views/Home/Home.js'
import Goods from '../views/Goods/Goods.js'
import Square from '../views/Square/Square.js'
import Game from '../views/Game/Game.js'
import Board from '../views/Board/Board.js'

class Root extends Component {
  render(){
    return (
      <HashRouter>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/game">square</NavLink>
        <Switch>
          <Route path="/home" component = { Home } ></Route>
          <Route path="/goods" component = { Goods } ></Route>
          <Route path="/square" component = { Square } ></Route>
          <Route path="/game" component ={ Game }></Route>
          <Route path="/board" component ={ Board }></Route>
          <Redirect to='/home' />
        </Switch>
      </HashRouter>
    )
  }
}
export default Root