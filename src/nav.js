import React from 'react'

import './nav.scss'
import { ReactComponent as SVGEthereum } from './images/ethereum.svg'

export const Nav = (props) => {
  const { isNav, setNav, scrollToWork, scrollToHire, scrollToAbout } = props

  return (
    <div className="enavbar">
      <div className="enavbar-header">
        <div className="enavbar-header-mobile-flex"></div>
        <SVGEthereum tabIndex='0' className="enavbar-header-logo" height='60px' width='60px' />
        <button className="enavbar-header-toggle" onClick={() => setNav(!isNav)}>
          <div className={`enavbar-header-toggle-icon ${isNav ? 'enavbar-header-toggle-icon--opened' : ''}`}>
            <i></i><i></i><i></i>
          </div>
        </button>
      </div>
      <nav className={`enavbar-nav ${isNav ? 'enavbar-nav--opened' : ''}`}>
        <ul>
          <li><span className="enavbar-nav-link" onClick={scrollToWork}>Work</span></li>
          <li><span className="enavbar-nav-link" onClick={scrollToHire}>Hire</span></li>
          <li><span className="enavbar-nav-link" onClick={scrollToAbout}>About</span></li>
        </ul>
      </nav>
    </div>
  )
}
