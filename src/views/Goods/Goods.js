/*
 * @Author: your name
 * @Date: 2021-01-08 10:55:51
 * @LastEditTime: 2021-01-19 20:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\Goods\Goods.js
 */
import React , {Component} from 'react'
class Goods extends Component{
  constructor(props){
    super(props)
   
  }
  render(){
    let listObj = this.props
    return (
      <ul>
       {
         listObj.list.map(item=>{
           return (
            <li key = {item.id}>{item.id}、{item.text}</li>
           )
         })
       }
      </ul>
    )
  }
}
export default Goods