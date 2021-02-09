import React, { useState, useEffect } from 'react'
import Axios from 'axios'

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
		<div>
			{states.map((state) => {
				return (
					<div>
						<p> {state.name}</p>
                        <a 
                        href={state.covid19Site} target='_blank'
                        rel='noopener noreferrer' >Link to state</a>
						{/* <p> {state.covid19Site}</p> */}
					</div>
				)
			})}
		</div>
	)
}

export default StateDirectory
