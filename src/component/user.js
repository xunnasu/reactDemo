/*
 * @Author: your name
 * @Date: 2021-01-19 19:43:54
 * @LastEditTime: 2021-01-19 19:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactDemo\src\component\user.js
 */
import React,{Component} from 'react'
class User extends Component{
  props = {
    name: 'nina',
    age:'4',
    address:'bj'
  }
  render(){
    return (
      <User name='React' age='4' address='America'></User>
    )
  }
}
export default User