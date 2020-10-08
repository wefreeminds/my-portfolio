import React from 'react'

import { ReactComponent as SVGLinkedin } from './images/linkedin.svg'
import { ReactComponent as SVGGithub } from './images/github.svg'
import { ReactComponent as SVGEmail } from './images/email.svg'
import IMGProfile from './images/profile.jpeg'

export const About = (props) => {
  const { aboutRef } = props

  return (
    <section ref={aboutRef} className="row justify-content-md-center">
      <div className="col-md-6 about">
        <h1>About Me.</h1>
        <div className="about-profile">
          <img src={IMGProfile} alt="profile" className="about-profile-img" />
        </div>
        <p>Hello! I am Israel Wilson. I am a blockchain consultant with a background in marketing and business development.
              <strong> 7+ years experience</strong> in upgrading business systems,
              with a 5 years focused on <strong>decentralized applications (dApps)</strong> run on <strong>Ethereum</strong> blockchain.
            </p>
        <p>I've previously had great results with traditional companies I look forward to adding blackchain companies to my portfolio.</p>
        <p>I am always eager to share my knowledge with others and I am a big fan of blockchain, defi, finance, economics, personal development, and media technology.
            </p>
        <p><strong>Skills/Highlights:</strong></p>
        <ul>
          <li>Biz Dev/Marketing</li>
          <li>Solidity</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
          <li>CSS</li>
          <li>Test-driven development (TDD)</li>
          <li>Functional & Reactive programming</li>
          <li>Distributed systems</li>
        </ul>
        <p>Are you working on an <strong>Ethereum project, DeFi, IPFS, ICO, STO, dApp, need a solidity</strong> developer or consultation?</p>
        <p>Hire me on{''}
              <a className="about-email" href="mailto:israel.wilson@cryptoisreal.org?subject=cryptoisreal.org" rel="noopener noreferrer">
            israel.wilson@cryptoisreal.org
              </a>
        </p>
        <p className="about-resume">
          *See my resume on
              <a href="https://linkedin.com/in/iswilson/" target="_blank" rel="noopener noreferrer">
            LinkedIn
              </a>
          or
              <a href="mailto:israel.wilson@cryptoisreal.org?subject=cryptoisreal.org">
            email me
              </a>
          to get one.
            </p>
        <div className="about-social">
          <a href="https://linkedin.com/in/iswilson/" target="_blank" rel="noopener noreferrer">
            <SVGLinkedin className="about-social-icon" />
          </a>
          <a href="https://github.com/wefreeminds/" target="_blank" rel="noopener noreferrer">
            <SVGGithub className="about-social-icon" />
          </a>
          <a href="mailto:israel.wilson@cryptoisreal.org?subject=cryptoisreal.org">
            <SVGEmail className="about-social-icon"/>
          </a>
        </div>
      </div>
    </section>
  )
}
