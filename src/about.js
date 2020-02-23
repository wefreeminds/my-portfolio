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
  )
}
