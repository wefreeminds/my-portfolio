import React from 'react'

import { IntroExtra } from './intro-extra'

export const Intro = (props) => {

  return (
    <section className="row justify-content-md-center">
      <div className="col-md-6 intro">
        <h1 className="intro-text-top">Hi! I'm Israel.</h1>
        <h1>A business development specialist and project manager who builds the Future with Ethereum.</h1>
        <IntroExtra />
      </div>
    </section>
  )
}
