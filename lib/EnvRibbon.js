import React from 'react'

import {
  rightRibbonStyle,
  rightWrapperStyle,
  textStyle,
} from './styles'

export default function EnvRibbon (props) {
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  let { label } = props
  if (label == null) {
    label = process.env.NODE_ENV || 'development'
  }
  return (
    <div style={rightWrapperStyle}>
      <div style={rightRibbonStyle}>
        <span style={textStyle}>{label}</span>
      </div>
    </div>
  )
}

EnvRibbon.propTypes = {
  label: React.PropTypes.string,
}
