import React, {Component} from 'react'
import nxtWrap from '../../nxtWrapper'

const s = theme => ({
  root: {}
})

@nxtWrap(s)
class <%= name %> extends Component {
  render() {
    const {classes, children} = this.props
    return (
      <div className = {classes.root}>{children}</div>
  )
  }
}

export default <%= name %>
