import React, { useState } from 'react'

import './main.scss'
import { Intro } from './intro'
import { Nav } from './nav'
import { Work } from './work'
import { About } from './about'
import { Footer } from './footer'

export const Main = () => {
  const [isNav, setNav] = useState(false)
  const workRef = React.createRef()
  const aboutRef = React.createRef()
  const hireRef = React.createRef()

  const scrollIntoView = ref => () => {
    setNav(!isNav)
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = scrollIntoView(workRef)
  const scrollToAbout = scrollIntoView(aboutRef)
  const scrollToHire = scrollIntoView(hireRef)

  return (
    <div className="container-fluid page-container">
      <header>
        <Nav
          scrollToWork={scrollToWork}
          scrollToAbout={scrollToAbout}
          scrollToHire={scrollToHire}
          setNav={setNav}
          isNav={isNav}
        />
      </header>
      <main>
        <Intro />
        <Work workRef={workRef} />
        <About aboutRef={aboutRef} />
      </main>
      <Footer hireRef={hireRef} />
    </div>
  )
}
