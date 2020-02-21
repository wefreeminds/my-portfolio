import React, { useState } from 'react'
// import Particles from 'react-particles-js'

import './enavbar.scss'
import { ReactComponent as SVGEthereum } from './images/ethereum.svg'
import { ReactComponent as SVGStock } from './images/stock.svg'
import { ReactComponent as SVGIco } from './images/ico.svg'

export const Main = () => {
  const aboutRef = React.createRef()
  const workRef = React.createRef()
  const scrollToAbout = () => {
    setNav(!isNav)
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToWork = () => {
    setNav(!isNav)
    workRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [isNav, setNav] = useState(false)

  return (
    <div className="container-fluid page-container ">
      <header>
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
              <li><span className="enavbar-nav-link">Resume</span></li>
              <li><span className="enavbar-nav-link" onClick={scrollToAbout}>About</span></li>
            </ul>
          </nav>
        </div>
      </header>

      <main role="main">
        {/* Intro */}
        <section className="row justify-content-md-center ">
          <div className="col-md-6 col-sm-12 intro">
            <h1 className="intro-text-top">Hi! I'm Nick.</h1>
            <h1>I'm a software engineer.</h1>
          </div>
        </section>

        {/* Work */}
        <section ref={workRef} className="row">
          <div className="col-md-6 col-sm-12 pr-0 pl-0">
            <a href="#">
              <div className="work-card work-card--stock">
                <SVGStock className="work-card-icon" />
                <h3 className="work-card-title">Cryptocurrency Exchange</h3>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-sm-12 pr-0 pl-0">
            <a href="#">
              <div className="work-card work-card--ico">
                <SVGIco className="work-card-icon" />
                <h3 className="work-card-title">Crowdsale ICO</h3>
              </div>
            </a>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="row justify-content-md-center no-gutters">
          <div className="col-md-6 col-sm-12 about">
            <h1>About Me.</h1>
            <p></p>

            <div>linkedin</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© Nick Zbiegien 2020</p>
      </footer>
    </div>
  )
}

