import React from 'react'

import { IntroHidden } from './intro-hidden'

export const Intro = (props) => {

  return (
    <section className="row justify-content-md-center">
      <div className="col-md-6 intro">
        <h1 className="intro-text-top">Hi! I'm Nick.</h1>
        <h1>A software engineer who builds the Future with Ethereum.</h1>
        <IntroHidden />
      </div>
    </section>
  )
}
