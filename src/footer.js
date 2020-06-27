import React from 'react'

export const Footer = (props) => {
  const { hireRef } = props

  return (
    <footer ref={hireRef} className="footer">
      <p>© Nick Zbiegien 2020</p>
      <a className="footer-code" href="https://github.com/deployAt/portfolio" target="_blank" rel="noopener noreferrer">source code</a>
    </footer>
  )
}
