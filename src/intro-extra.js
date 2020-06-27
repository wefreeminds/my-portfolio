import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { forkJoin, from, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, mergeAll } from 'rxjs/operators'
import Identicon from 'identicon.js'

import greetsData from './greets.data'

export const IntroExtra = () => {
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
    sub$.subscribe(({ ethAddress, localization, countriesList }) => {
      const countryCode = localization && localization.country_code
      const country = localization && localization.country_name
      const flagEmoji = countriesList[countryCode] && countriesList[countryCode].emoji
      setState({ ethAddress, flagEmoji, country, isComplete: true })
    })
  }

  const { isComplete, ethAddress, flagEmoji, country } = state
  return (
    isComplete && (
      <div className="intro-extra">
        <p className="intro-extra-greet">
          {getGreetings()}
          {displayEthAddress(ethAddress)}
        </p>
        {displayWeatherGreet(country, flagEmoji)}
      </div>
    )
  )
}

const displayEthAddress = (ethAddress) => {
  if (!ethAddress) return
  const options = {
    background: [255, 255, 255, 255],
    margin: 0.1,
    size: 25,
    format: 'svg',
  }
  const avatar = new Identicon(ethAddress, options).toString()
  return (
    <span>
      <a
        className="intro-extra-address"
        href={`https://etherscan.io/address/${ethAddress}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="address" src={`data:image/svg+xml;base64,${avatar}`} />
      </a>
    </span>
  )
}

const displayWeatherGreet = (country, flagEmoji) =>
  country &&
  flagEmoji && (
    <p>
      How's your {getPartOfDay()} in {country} {flagEmoji}?
    </p>
  )

const getPartOfDay = () => {
  const date = new Date()
  const hour = date.getHours()
  const morning = 5 <= hour && hour <= 11
  const afternoon = 12 <= hour && hour <= 17
  const evening = 18 <= hour && hour <= 23

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
  const userLanguage = detectUserLanguage()
  const greet = greetsData.find((language) => language.locale === userLanguage)
  return greet.string
}

const getEthAddress = () => {
  if (window.ethereum) {
    // Modern dapp browsers
    window.ethereum.autoRefreshOnNetworkChange = false
    window.web3 = new Web3(window.ethereum)
    return window.ethereum.enable()
  } else if (window.web3) {
    // Legacy dapp browsers
    const web3 = new Web3(window.web3.currentProvider)
    window.web3 = web3
    return web3.eth.getAccounts()
  } else {
    // Non-dapp browsers
    return of(null)
  }
}

const fetchLocalization = ajax.getJSON('https://ipapi.co/json/').pipe(catchError((err) => of(err)))

const fetchCountriesList = ajax
  .getJSON('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.json')
  .pipe(catchError((err) => of(err)))

const fetchEthAddress = from(getEthAddress()).pipe(
  mergeAll(),
  catchError((err) => of(null))
)

const sub$ = forkJoin({
  ethAddress: fetchEthAddress,
  localization: fetchLocalization,
  countriesList: fetchCountriesList,
})

const detectUserLanguage = () =>
  [
    ...(window.navigator.languages || []),
    window.navigator.language,
    window.navigator.browserLanguage,
    window.navigator.userLanguage,
    window.navigator.systemLanguage,
  ]
    .filter(Boolean)
    .map((language) => language.substr(0, 2))[0] || 'en'
