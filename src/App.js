import './App.css';
import Home from './Home';
import StateDirectory from './StateDirectory';
import Share from './Share';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<div>
				<Route exact path='/directory' component={StateDirectory} />
				<Route exact path='/share' component={Share} />
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return <Home match={routerProps.match} />;
					}}
				/>

				<Share />

				<StateDirectory />
			</div>
		</Router>
	);
}

export default App;
