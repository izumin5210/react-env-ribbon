/*
 * "Fork me on GitHub" CSS ribbon v0.2.0 | MIT License
 * https://github.com/simonwhitaker/github-fork-ribbon-css
 */

export const wrapperStyle = {
  position: 'fixed',
  bottom: 8,
  left: 8,
}

export const modalStyle = {
  position: 'fixed',
  bottom: 48,
  left: 8,

  width: 320,
  padding: 8,
  overflowX: 'scroll',
  borderRadius: 4,
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.25)',
  font: '500 12px "Helvetica Neue", Helvetica, Arial, sans-serif',
}

export const textStyle = {
  position: 'fixed',
  bottom: 8,
  left: 8,

  width: 128,
  height: 32,
  zIndex: 9999,
  backgroundColor: '#a00',
  borderRadius: 16,
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',

  textDecoration: 'none',
  textAlign: 'center',
  font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight: '32px',

  color: '#fff',

  display: 'inline-block',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',
}

export const textStyleHovered = Object.assign({}, textStyle, {
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23)',
})
