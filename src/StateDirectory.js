import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card'
import './App.css'

const StateDirectory = () => {
	const [states, setStates] = useState([])

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
				console.log(data.data)
				setStates(data.data)
			})
			.catch(console.error)
	}
	return (
		<>
			{states.map((state) => {
				return (
					<div className='wrapper-states'>
						<Card className='state-container'>
							<Card.Title> {state.name}</Card.Title>
							<a
								href={state.covid19Site}
								target='_blank'
								rel='noopener noreferrer'>
								Link to state
							</a>
						
						</Card>
					</div>
				)
			})}
		</>
	)
}

export default StateDirectory
