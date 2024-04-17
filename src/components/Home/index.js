import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {
    userInput: '',
  }

  componentDidMount() {
    this.getStateWiseData()
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="background-home-container">
        <Header />
        <p className="paragraph">
          Coronavirus disease (COVID-19) is an infectious disease caused by the
          SARS-CoV-2 virus. Most people infected with the virus will experience
          mild to moderate respiratory illness and recover without requiring
          special treatment. However, some will become seriously ill and require
          medical attention.
        </p>
        <div className="input-element-container">
          <p className="input-element-text">Enter the State Here</p>
          <input
            type="search"
            placeholder="Enter the state"
            className="input-element"
          />
        </div>
      </div>
    )
  }
}

export default Home
