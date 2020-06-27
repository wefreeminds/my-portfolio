import React from 'react'

import { ReactComponent as SVGStock } from './images/stock.svg'
import { ReactComponent as SVGBlockchain } from './images/blockchain.svg'

export const Work = (props) => {
  const { workRef } = props

  return (
    <section ref={workRef} className="row">
      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/deployAt/crypto-exchange" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--stock">
            <SVGStock className="work-card-icon" />
            <h3 className="work-card-title">Crypto Exchange</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/deployAt/blockchain" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--blockchain">
            <SVGBlockchain className="work-card-icon" />
            <h3 className="work-card-title">Private Blockchain</h3>
          </div>
        </a>
      </div>
    </section>
  )
}
