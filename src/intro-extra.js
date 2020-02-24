import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { forkJoin, from, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError } from 'rxjs/operators'

import greetsData from './greets.data.js'

export const IntroExtra = (props) => {
  const [state, setState] = useState({
    isComplete: false,
    ethAddress: null,
    flagEmoji: null,
    city: null,
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    sub$.subscribe(({ ethAddress, localization, contriesList }) => {
      const countryCode = localization.country_code
      const country = localization.country_name
      const flagEmoji = contriesList[countryCode] && contriesList[countryCode].emoji
      setState({ ethAddress, flagEmoji, country, isComplete: true })
    })
  }

  const { isComplete, ethAddress, flagEmoji, country } = state
  return (
    isComplete &&
    <div className="intro-extra">
      <p className="intro-extra-greet">{getGreetings()}</p>
      <p>
        <a className="intro-extra-address" href={`https://etherscan.io/address/${ethAddress}`} target="_blank" rel="noopener noreferrer" >
          {ethAddress}
        </a>
      </p>
      <p>How's your {getPartOfDay()} in {country} {flagEmoji}?</p>
    </div>
  )
}

const getPartOfDay = () => {
  const date = new Date()
  const hour = date.getHours()
  const morning = (5 <= hour) && (hour <= 11)
  const afternoon = (12 <= hour) && (hour <= 17)
  const evening = (18 <= hour) && (hour <= 23)

  if (morning) {
    return 'morning'
  } else if (afternoon) {
    return 'afternoon'
  } else if (evening) {
    return 'evening'
  } else {
    return 'night'
  }
}

const getGreetings = () => {
  const userLanguage = window.navigator.language || 'en'
  const userLanguageParsed = userLanguage.substring(0, 2).toLocaleLowerCase()
  const greet = greetsData.find(language => language.locale === userLanguageParsed)
  return greet.string
}

const getEthAddress = () => {
  if (window.ethereum) {
    // Modern dapp browsers
    window.ethereum.autoRefreshOnNetworkChange = false
    window.web3 = new Web3(window.ethereum)
    try {
      return window.ethereum.enable()
    } catch (err) { }
  } else if (window.web3) {
    // Legacy dapp browsers
    const web3 = new Web3(window.web3.currentProvider)
    window.web3 = web3
    return web3.eth.getAccounts()
  } else {
    // Non-dapp browsers
    return of('')
  }
}

const fetchLocalization = ajax.getJSON('https://ipapi.co/json/').pipe(
  catchError(err => of()),
)

const fetchCountriesList = ajax.getJSON('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.json').pipe(
  catchError(err => of()),
)

const fetchEthAddress = from(getEthAddress())

const sub$ = forkJoin({
  ethAddress: fetchEthAddress,
  localization: fetchLocalization,
  contriesList: fetchCountriesList,
})

