import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'

const style = theme => ({
  root: {}
})

@withStyles(style)
class <%= name %> extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className = {classes.root}></div>
  )
  }
}

export default <%= name %>
