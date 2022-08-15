import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  state = {
    isClicked: false,
    inputElement: '',
  }

  editable = event => {
    this.setState({inputElement: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, inputElement} = this.state

    return (
      <div className="bg-container">
        <div className="edit-card-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {isClicked === true ? (
              <div className="p-con">
                <p className="p">{inputElement}</p>
                <button type="button" className="button" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className="inp"
                  value={inputElement}
                  onChange={this.editable}
                />
                <button type="button" className="button" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
