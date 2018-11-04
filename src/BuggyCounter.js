import React, { Component } from 'react'

class BuggyCounter extends Component {
  state = {
      counter :0
  }
  handleClick = () => {
      this.setState((prevState, props) => {
          return{
              counter : prevState.counter + 1
          }
      })
  }
    render() {
        if (this.state.counter === 5){
                throw new Error("Crashed")
        }
        return <h1 onClick={this.handleClick}>New counter is {this.state.counter}</h1>
   
  }
}

export default BuggyCounter;
