import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './App.css'

const StateDirectory = () => {
	const [states, setStates] = useState([])
	const [stateNames, setStateNames] = useState([])

	const initUrl = `https://api.covidtracking.com/v1/states/info.json`

	//  const initUrl = `https://api.covidtracking.com/v1/states/`

	// const allStates = `current.json`
	// const state = `il`
	// const oneState = `${state}/info.json`

	useEffect(() => {
		getStates()
	}, [])

	function getStates() {
		const url = `https://api.covidtracking.com/v1/states/info.json`

		Axios(url)
			.then((data) => {
				// console.log(data.data.subclasses[0].name)
				// console.log(data.data)
				setStates(data.data)

				let array = states.map((state) => {
					return state.name
				})

				setStateNames(array)
				console.log(stateNames)
			})
			.catch(console.error)
	}

	return (
		<>
			{states.map((state) => {
				return (
					<a href={state.covid19Site} target='_blank' rel='noopener noreferrer'>
						<div key={state.name}>
							<button className='state-container'>
								{state.name}
								{/* <a
									href={state.covid19Site}
									>
									Link to state
								</a> */}
							</button>
						</div>
					</a>
				)
			})}
		</>
	)
}

export default StateDirectory
