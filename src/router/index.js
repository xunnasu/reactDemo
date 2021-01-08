/*
 * @Author: your name
 * @Date: 2021-01-08 10:31:33
 * @LastEditTime: 2021-01-08 11:46:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\router\index.js
 */
import React, {Component} from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Home from '../views/Home/Home.js'
import Goods from '../views/Goods/Goods.js'

class Root extends Component {
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component ={Home}></Route>
          <Route path="/goods" component ={Goods}></Route>
          <Redirect to='/home' />
        </Switch>
      </HashRouter>
    )
  }
}
export default Root