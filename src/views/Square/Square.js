
/*
 * @Author: your name
 * @Date: 2021-01-08 10:51:53
 * @LastEditTime: 2021-01-08 16:36:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\pages\home.js
 */
import React,{Component} from 'react'
import './square.css'
class Square extends Component{
  constructor (props){
    super(props);
    // 初始化state
    this.state ={
      value:null
    }
  }
  render(){
    return (
      <button className="square" onClick = {()=> this.setState({value:'x'})}>{this.state.value}</button>
    )
  }

}
export default Square