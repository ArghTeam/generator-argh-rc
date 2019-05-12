import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const s = theme => ({
  root: {}
})

class <%= name %> extends Component {
  static propTypes = {
    classes: PropTypes.array
  }
  static defaultProps = {}

  render () {
    const {classes, children} = this.props
    return <div className={classes.root}>{children}</div>
  }
}

export default withStyles(s)(<%= name %>)
