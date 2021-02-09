// import './App.css';
import Home from './Home'
import StateDirectory from './StateDirectory';
import Share from './Share'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'

function App() {
  return (
		<div className='App'>
			<header className='App-header'>
				<Navigation />
			</header>
			<Route
				path='/'
				exact
				render={(routerProps) => {
					return <Home match={routerProps.match} />
				}}
			/>

			<Share />

			<Route
				path='/states'
				exact
				render={(routerProps) => {
					return <StateDirectory match={routerProps.match} />
				}}
			/>
      
		</div>
	)
}

export default App;
