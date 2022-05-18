import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  onClickingButton = () => {
    this.setState(presentState => ({mode: !presentState.mode}))
  }

  render() {
    const {mode} = this.state

    let container
    let heading
    let button
    let btnText

    if (mode === true) {
      container = 'divLight'
      heading = 'headingLight'
      button = 'buttonLight'
      btnText = 'Dark Mode'
    } else if (mode === false) {
      container = 'divDark'
      heading = 'headingDark'
      button = 'buttonDark'
      btnText = 'Light Mode'
    }

    return (
      <div className={container}>
        <h1 className={heading}>Click To Change Mode</h1>
        <button
          className={button}
          type="button"
          onClick={this.onClickingButton}
        >
          {btnText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
