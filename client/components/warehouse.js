import React, {Component} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import styles from '../styles/warehouseStyles'
export default class Warehouse extends Component {
  constructor() {
    super()
    this.state = {
      receivedOnTime: '',
      returned: '',
      accuratePullList: null,
      finishedOnTime: '',
      makeUpRuns: '',
      issues: '',
      truckCondition: null
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    const {
      receivedOnTime,
      returned,
      accuratePullList,
      finishedOnTime,
      makeUpRuns,
      issues,
      truckCondition
    } = this.state
    return (
      <div>
        <h1>Warehouse</h1>
        <form>
          <input type="text" />
          <div className="toggleContainer">
            <ToggleButtonGroup
              value={receivedOnTime}
              exclusive
              onChange={this.handleChange}
            />
            <ToggleButton value="yes">Yes</ToggleButton>
            <ToggleButton value="no">No</ToggleButton>
          </div>
        </form>
      </div>
    )
  }
}
