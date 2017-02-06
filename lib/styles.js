/*
 * "Fork me on GitHub" CSS ribbon v0.2.0 | MIT License
 * https://github.com/simonwhitaker/github-fork-ribbon-css
 */

export const ribbonStyle = {
  position: 'fixed',

  padding: '2px 0',

  backgroundColor: '#a00',

  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',

  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',

  font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',

  zIndex:        9999,
  pointerEvents: 'auto',

  opacity:    1,
  transition: 'opacity .25s ease-in-out',
}

export const rightRibbonStyle = Object.assign({}, ribbonStyle, {
  top:   42,
  right: -43,

  transform: 'rotate(45deg)',
})

export const wrapperStyle = {
  width:         150,
  height:        150,
  position:      'absolute',
  overflow:      'hidden',
  top:           0,
  zIndex:        9999,
  pointerEvents: 'none',
}

export const rightWrapperStyle = Object.assign({}, wrapperStyle, {
  right: 0,
})

export const textStyle = {
  color:          '#fff',
  textDecoration: 'none',
  textShadow:     '0 -1px rgba(0, 0, 0, 0.5)',
  textAlign:      'center',
  cursor:         'pointer',

  width:      200,
  lineHeight: '20px',

  display: 'inline-block',
  padding: '2px 0',

  borderWidth: '1px 0',
  borderStyle: 'dotted',
  borderColor: '#fff',
}
