import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0,timer:0}
      }
      componentDidMount(){
          setInterval(()=>this.setState({...this.state,timer:this.state.timer+1}),1000)
      }
      componentDidUpdate (){
        console.log("componentDidUpdate")
      }
      componentWillUnmount(){
        console.log("componentWillUnmount")

      }
    render() {
       console.log("rendring")
        return (
            <div>
              <h3 style={{color:"green"}}>Nom:{this.props.prénom}</h3>
              <h3 style={{color:"green"}}>Prénom:{this.props.name}</h3>
              <div style={{display:"flex"}}>
              <button style={{margin:"auto"}} onClick={()=>this.setState({count:this.state.count>1?this.state.count-1:this.state.count-2})}> - </button>  
              <p> {this.state.count} </p>
              <button  style={{margin:"auto"}} onClick={()=>this.setState({count:this.state.count<10?this.state.count+1:this.state.count+2})}> + </button>  
              </div>
              <p>{this.state.timer}</p>
            </div>
        )
    }
}
