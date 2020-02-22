import React from 'react'

export const Footer = (props) => {
  const { hireRef } = props

  return (
    <footer ref={hireRef} className="footer">
      <p>© Nick Zbiegien 2020</p>
      <a href="https://github.com/zbiegien" target="_blank" className="footer-code">source code</a>
    </footer>
  )
}
