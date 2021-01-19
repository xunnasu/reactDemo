/*
 * @Author: your name
 * @Date: 2021-01-08 10:51:53
 * @LastEditTime: 2021-01-19 20:45:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\pages\home.js
 */
import React,{Component} from 'react'
import Goods from '../Goods/Goods'
class Home extends Component{
  constructor (props){
    super(props);
    // 初始化state
    this.state = {
      // value:null,
      persons:[
        {name:'本页面列表展示1',id:1},
        {name:'本页面列表展示2',id:2},
        {name:'本页面列表展示3',id:3}
      ],
      list:[
        {
          text:'组件传值来的方式实现',
          id:1
        },
        {
          text:'我们一起学习react',
          id:2
        }
      ]
    }
  }
  handle(){
    console.log('1234 :>> ', 1234);
  }
  render(){
   return(
     <div className="App">
        <ul>
          {this.state.persons.map(item => <li key = {item.id} onClick = {()=>this.handle()}>{item.name}</li>)}
        </ul>
        <Goods list = {this.state.list}></Goods>
        {/* <ul>
          列表:
          <li>一起讨论react!</li>
          <li>一起讨论react!!!</li>
          <li>一起讨论react@@@</li>
        </ul> */}
     </div>
   )}
}
export default Home