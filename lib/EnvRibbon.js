import React, { Component } from 'react'

import {
  wrapperStyle,
  textStyle,
  textStyleHovered,
  modalStyle,
} from './styles'

export default class EnvRibbon extends Component {

  static defaultProps = {
    label: process.env.NODE_ENV || 'development',
    vars: {},
  };

  constructor (props) {
    super(props)
    this.state = {
      opened: false,
      hovered: false,
    }
  }

  renderModal () {
    const { vars } = this.props
    return (
      <div
        style={modalStyle}
      >
        {Object.keys(vars).map(k => ([
          <dt>{k}</dt>,
          <dd>{String(vars[k])}</dd>,
        ]))}
      </div>
    )
  }

  render () {
    if (process.env.NODE_ENV === 'production') {
      return null
    }

    const { label } = this.props
    const { opened, hovered } = this.state

    return (
      <div style={wrapperStyle}>
        { opened && this.renderModal() }
        <a
          style={hovered ? textStyleHovered : textStyle}
          onClick={() => this.setState({ opened: !this.state.opened })}
          onMouseOver={() => this.setState({ hovered: true })}
          onMouseOut={() => this.setState({ hovered: false })}
          tabIndex={0}
        >
          {label}
        </a>
      </div>
    )
  }
}

EnvRibbon.propTypes = {
  label: React.PropTypes.string,
  vars: React.PropTypes.object, // eslint-disable-line
}
