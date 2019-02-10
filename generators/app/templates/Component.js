import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const s = theme => ({
  root: {}
})

@withStyles(s)
export default class <%= name %> extends Component {
  static propTypes = {
}

  static defaultProps = {
}

  render () {
  const {classes, children} = this.props
  return <div className={classes.root}>{children}</div>
}
}
