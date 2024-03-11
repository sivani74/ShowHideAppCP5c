// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstnameHide: true, isLastnameHide: true}

  onClickFirstnameButton = () => {
    this.setState(prevState => ({isFirstnameHide: !prevState.isFirstnameHide}))
  }

  onClickLastnameButton = () => {
    this.setState(prevState => ({isLastnameHide: !prevState.isLastnameHide}))
  }

  render() {
    const {isFirstnameHide, isLastnameHide} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickFirstnameButton}
            >
              Show/Hide Firstname
            </button>
            {!isFirstnameHide && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickLastnameButton}
            >
              Show/Hide Lastname
            </button>
            {!isLastnameHide && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
