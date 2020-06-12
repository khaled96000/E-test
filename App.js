import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
//import  from './increment';
function khaled(props){
  return(
      <div>
          <h1>hello khaled {props.name}</h1>
      </div>
  )
  
  }
  class countup extends React.Component{
    constructor(){
      super()
        this.state={
          count:0
          
        
      }
    }
    render(){
      return(
     <div>
     <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
     <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button>
      <h1>{this.state.count}</h1>
      </div>
      )
    }
  }
  ReactDOM.render(<countup/>,document.getElementById("increment"))
  ReactDOM.render(<khaled />,document.getElementById("name"))
//export default khaled;
export default countup;
