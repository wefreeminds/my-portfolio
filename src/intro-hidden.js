import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

export const IntroHidden = (props) => {

  const [ethAddress, setEthAddress] = useState(null)
  const [flag, setFlag] = useState(null)

  useEffect(() => {
    loadWeb3()
    loadFlag()
  }, [])

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false
      const web3 = window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const accounts = await web3.eth.getAccounts()
      setEthAddress(accounts[0])
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      //Non-Ethereum browser
    }
  }

  const loadFlag = async () => {
    const localization = await fetch('http://ip-api.com/json')
    const data = await localization.json()
    const countryCode = data.countryCode

    const flagResponse = await fetch('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.json')
    const flagData = await flagResponse.json()
    const flagEmoji = flagData[countryCode].emoji
    setFlag(flagEmoji)
  }

  const show = ethAddress && flag

  return (
    show &&
    <div className="intro-eth">
      <p>Nice to meet you</p>
      <p className="intro-eth-name">{ethAddress}</p>
      <span>{flag}</span>
    </div>
  )
}

