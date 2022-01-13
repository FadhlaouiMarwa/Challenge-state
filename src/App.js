import React, { Component } from 'react'
import Counter from './component/Counter'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:true}
  }
  render() {
    return (
      <div>
        
        {this.state.show && <Counter name={" Julia"} prénom={" Bessi"}/>}
        <button  onClick={()=>{this.setState({show:! this.state.show})
                              setTimeout(()=>this.setState({show:false}),5000)}}> show | hide </button>
        


      </div>
    )
  }
}


