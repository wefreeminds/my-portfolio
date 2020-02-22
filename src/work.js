import React from 'react'

import { ReactComponent as SVGStock } from './images/stock.svg'
import { ReactComponent as SVGIco } from './images/ico.svg'

export const Work = (props) => {
  const { workRef } = props

  return (
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
  )
}
