// Write your code here

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  ClickBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else if (speed === 0) {
      this.setState(prevState => prevState)
    }
  }

  ClickAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else if (speed === 200) {
      this.setState(prevState => prevState)
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Container">
        <h1 className="mainHeading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h4 className="heading">Speed is {speed}mph</h4>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="button" onClick={this.ClickAccelerate}>
          Accelerate
        </button>
        <button className="button" onClick={this.ClickBrake}>
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
