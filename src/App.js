/*
 * @Author: your name
 * @Date: 2021-01-08 09:50:57
 * @LastEditTime: 2021-01-08 11:21:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.js
 */
import React ,{Component} from 'react'
import Root from './router/index'
import './App.css';
class App extends Component{
  render(){
    return(
      <div id="App">
        <Root></Root>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//          hello
//         </p>
//       </header>
//     </div>
//   );
// }
export default App;
