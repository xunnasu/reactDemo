
/*
 * @Author: your name
 * @Date: 2021-01-08 10:51:53
 * @LastEditTime: 2021-01-19 18:29:57
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
      value:null,
    }
  }
  render(){
    return (
      // <div>
          <button className="square" onClick = {()=> this.setState({value:'x'})}>{this.state.value}</button>
      // {/* </div> */}
      // <button className="square" onClick = {()=> console.log('click')}>{this.prop.value}</button>
    )
  }

}
export default Square