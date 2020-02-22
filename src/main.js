import React, { useState } from 'react'

import './enavbar.scss'
import { ReactComponent as SVGEthereum } from './images/ethereum.svg'
import { ReactComponent as SVGStock } from './images/stock.svg'
import { ReactComponent as SVGIco } from './images/ico.svg'
import { ReactComponent as SVGLinkedin } from './images/linkedin.svg'
import { ReactComponent as SVGGithub } from './images/github.svg'
import { ReactComponent as SVGEmail } from './images/email.svg'
import IMGProfile from './images/profile.jpeg'

export const Main = () => {
  const workRef = React.createRef()
  const aboutRef = React.createRef()
  const hireRef = React.createRef()
  const scrollToWork = () => {
    setNav(!isNav)
    workRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    setNav(!isNav)
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToHire = () => {
    setNav(!isNav)
    hireRef.current.scrollIntoView({ behavior: 'smooth' })
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
              <li><span className="enavbar-nav-link" onClick={scrollToHire}>Hire</span></li>
              <li><span className="enavbar-nav-link" onClick={scrollToAbout}>About</span></li>
            </ul>
          </nav>
        </div>
      </header>

      <main role="main">
        {/* Intro */}
        <section className="row justify-content-md-center">
          <div className="col-md-6 intro">
            <h1 className="intro-text-top">Hi! I'm Nick.</h1>
            <h1>A software engineer who builds the Future with Ethereum.</h1>
          </div>
        </section>

        {/* Work */}
        <section ref={workRef} className="row">
          <div className="col-md-6 pr-0 pl-0">
            <a href="#">
              <div className="work-card work-card--stock">
                <SVGStock className="work-card-icon" />
                <h3 className="work-card-title">Cryptocurrency Exchange</h3>
              </div>
            </a>
          </div>

          <div className="col-md-6 pr-0 pl-0">
            <a href="#">
              <div className="work-card work-card--ico">
                <SVGIco className="work-card-icon" />
                <h3 className="work-card-title">Crowdsale ICO</h3>
              </div>
            </a>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="row justify-content-md-center">
          <div className="col-md-6 about">
            <h1>About Me.</h1>
            <div class="about-profile">
              <img src={IMGProfile} alt="profile" class="about-profile-img" />
            </div>
            <p>Hello! I am Nick Zbiegien. I am a software engineer with a master of engineering
              in computer science and
              <strong> 6+ years experience</strong> in creating quality web systems,
              with a year focused on <strong>decentralized applications (dApps)</strong> run on <strong>Ethereum</strong> blockchain.
            </p>
            <p>I worked on a spot in tech companies in Poland, Uruguay and Sydney Australia. Currently based in Spain.</p>
            <p>I am always eager to share my knowledge with others and I am a big fan of
               the Ethereum blockchain ecosystem, personal development and simplifying peopleʼs lives.
            </p>
            <p><strong>Skills/Highlights:</strong></p>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>Solidity</li>
              <li>React</li>
              <li>Redux / Mobx</li>
              <li>Node</li>
              <li>CSS</li>
              <li>Functional & Reactive programming</li>
              <li>Distributed systems</li>
            </ul>
            <p>Are you working on an <strong>Ethereum project, ICO, dApp, need a solidity</strong> developer or consultation?</p>
            <p>Hire me on
              <a className="about-email" href="mailto:nzbiegien@gmail.com?body=Hi%20there%2C%20I%20was%20browsing%20your%20website%20and%20wanted%20to%20connect.&amp;subject=zbiegien.com">
                nzbiegien@gmail.com
              </a>
            </p>
            <p className="about-resume">
              *See my resume on
              <a href="https:/linkedin.com/in/zbiegien/" target="_blank">
                LinkedIn
              </a>
              or
              <a href="mailto:nzbiegien@gmail.com?body=Hi%20there%2C%20I%20was%20browsing%20your%20website%20and%20wanted%20to%20connect.&amp;subject=zbiegien.com">
                email me
              </a>
              to get one.
            </p>
            <div className="about-social">
              <a href="https:/linkedin.com/in/zbiegien/" target="_blank">
                <SVGLinkedin className="about-social-icon" />
              </a>
              <a href="https://github.com/zbiegien" target="_blank">
                <SVGGithub className="about-social-icon" />
              </a>
              <a href="mailto:nzbiegien@gmail.com?body=Hi%20there%2C%20I%20was%20browsing%20your%20website%20and%20wanted%20to%20connect.&amp;subject=zbiegien.com">
                <SVGEmail className="about-social-icon" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer ref={hireRef} className="footer">
        <p>© Nick Zbiegien 2020</p>
        <a href="https://github.com/zbiegien" target="_blank" className="footer-code">source code</a>
      </footer>
    </div>
  )
}

